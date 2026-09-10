"use client";

import Link from "next/link";
import { useState } from "react";
import {
  businessTypeOptions,
  getIndustry,
  questions,
  scoreQuiz,
} from "../lib/quiz";

type Step = number; // 0 = business type, 1..questions.length = questions, last = result

export default function Quiz() {
  const [step, setStep] = useState<Step>(0);
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const resultStep = questions.length + 1;
  const industry = getIndustry(businessType ?? undefined);

  function selectBusinessType(value: string) {
    setBusinessType(value);
    setTimeout(() => setStep(1), 200);
  }

  function selectAnswer(questionId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setTimeout(() => setStep((s) => s + 1), 200);
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function restart() {
    setBusinessType(null);
    setAnswers({});
    setStep(0);
  }

  const totalSteps = questions.length + 1;
  const progress = Math.min(step, totalSteps);

  if (step === resultStep) {
    const { primary, secondary } = scoreQuiz(answers);
    const interestParam = encodeURIComponent(primary.label);

    return (
      <div className="mx-auto max-w-xl">
        <p className="text-center text-sm font-medium text-accent-text">
          {industry ? `For a ${industry.label.toLowerCase()} business like yours` : "Based on your answers"}
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl leading-[1.15] tracking-tight sm:text-4xl">
          Start with {primary.label}.
        </h2>
        <p className="mt-4 text-center text-foreground/70">{primary.tagline}</p>

        <div className="mt-8 rounded-2xl border border-border bg-panel p-6">
          <p className="text-sm text-foreground/70">{primary.description}</p>
        </div>

        {secondary && (
          <p className="mt-4 text-center text-sm text-foreground/60">
            Worth exploring after that:{" "}
            <Link href={`/products/${secondary.slug}`} className="font-medium text-accent-text hover:underline">
              {secondary.label}
            </Link>
          </p>
        )}

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link
            href={`/get-started?interest=${interestParam}`}
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Get started with {primary.label}
          </Link>
          <Link
            href={`/products/${primary.slug}`}
            className="text-sm text-foreground/60 hover:text-foreground"
          >
            See what&rsquo;s included →
          </Link>
          <button
            type="button"
            onClick={restart}
            className="mt-2 text-xs text-foreground/40 hover:text-foreground/60"
          >
            Retake the quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex items-center gap-1.5" aria-hidden>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i < progress ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>

      {step === 0 ? (
        <div className="mt-8">
          <h2 className="text-center font-heading text-2xl leading-[1.2] tracking-tight sm:text-3xl">
            What kind of property business are you?
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {businessTypeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => selectBusinessType(option.value)}
                className={`rounded-xl border px-3 py-3 text-center text-sm font-medium transition ${
                  businessType === option.value
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/30 hover:bg-panel"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        (() => {
          const q = questions[step - 1];
          return (
            <div className="mt-8">
              <h2 className="text-center font-heading text-2xl leading-[1.2] tracking-tight sm:text-3xl">
                {q.question}
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                {q.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => selectAnswer(q.id, option.value)}
                    className={`rounded-xl border px-5 py-4 text-left text-sm font-medium transition ${
                      answers[q.id] === option.value
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border text-foreground/70 hover:border-foreground/30 hover:bg-panel"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })()
      )}

      {step > 0 && (
        <button
          type="button"
          onClick={goBack}
          className="mt-8 text-sm text-foreground/50 hover:text-foreground"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
