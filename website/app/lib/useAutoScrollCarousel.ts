"use client";

import { useEffect, useRef } from "react";

const AUTO_SCROLL_PX_PER_FRAME = 0.5;
const RESUME_DELAY_MS = 1500;

// Drives an infinite auto-scrolling, drag/wheel/touch-pausable carousel.
// Caller renders its items twice back to back (the loop wraps at the
// halfway point) and spreads the returned ref onto the scroll container.
export function useAutoScrollCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null);
  const pausedRef = useRef(false);
  const virtualScrollLeftRef = useRef(0);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-scroll loop. scrollLeft only holds whole pixels, so a sub-pixel
  // per-frame speed would get rounded away every frame and never move —
  // the real position is tracked separately in virtualScrollLeftRef.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    virtualScrollLeftRef.current = track.scrollLeft;
    let frameId: number;
    const step = () => {
      const loopWidth = track.scrollWidth / 2;
      if (pausedRef.current) {
        virtualScrollLeftRef.current = track.scrollLeft;
      } else if (loopWidth > 0) {
        virtualScrollLeftRef.current += AUTO_SCROLL_PX_PER_FRAME;
        if (virtualScrollLeftRef.current >= loopWidth) virtualScrollLeftRef.current -= loopWidth;
        track.scrollLeft = virtualScrollLeftRef.current;
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const pause = () => {
      pausedRef.current = true;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
    const scheduleResume = () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
      }, RESUME_DELAY_MS);
    };

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      pause();
      startX = e.clientX;
      startScrollLeft = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const loopWidth = track.scrollWidth / 2;
      let target = startScrollLeft - (e.clientX - startX);
      // scrollLeft can't go negative — the browser clamps it to 0 instead of
      // wrapping, so a large rightward drag (revealing earlier items) would
      // otherwise get stuck at the floor. Wrap here so dragging left works
      // just as far as dragging right does.
      if (loopWidth > 0) target = ((target % loopWidth) + loopWidth) % loopWidth;
      track.scrollLeft = target;
    };
    const endDrag = () => {
      dragging = false;
      scheduleResume();
    };
    const onScroll = () => {
      // Native wheel/trackpad scrolling hits the same 0-floor clamp, so
      // correct it here too — landing strictly inside (0, loopWidth) rather
      // than exactly on either boundary avoids re-triggering the other
      // branch on the scroll event this correction itself fires.
      const loopWidth = track.scrollWidth / 2;
      if (loopWidth <= 1) return;
      if (track.scrollLeft >= loopWidth) track.scrollLeft = Math.max(track.scrollLeft - loopWidth, 1);
      else if (track.scrollLeft <= 0) track.scrollLeft = loopWidth - 1;
    };
    const onWheel = () => {
      pause();
      scheduleResume();
    };
    const onKeyDown = () => {
      pause();
      scheduleResume();
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", scheduleResume);
    track.addEventListener("wheel", onWheel, { passive: true });
    track.addEventListener("keydown", onKeyDown);
    track.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", scheduleResume);
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("keydown", onKeyDown);
      track.removeEventListener("scroll", onScroll);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return trackRef;
}
