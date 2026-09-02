export type Industry = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "estate-agents",
    label: "Estate agents",
    tagline: "Answer buyer questions and book viewings the moment they message.",
    description:
      "Buyers message at all hours asking about price, square footage, and when they can view. Reyse answers instantly and books the viewing, so agents spend their time with buyers who are ready to move.",
  },
  {
    slug: "letting-agents",
    label: "Letting agents",
    tagline: "Qualify tenants and fill vacancies faster, day or night.",
    description:
      "Every vacant listing brings a wave of tenant enquiries about availability, deposits and move-in dates. Reyse qualifies each one and fills vacancies faster, without tying up your team.",
  },
  {
    slug: "property-management",
    label: "Property management",
    tagline: "Handle resident queries at scale without adding headcount.",
    description:
      "Residents have questions around the clock — maintenance, service charges, parking. Reyse handles the routine ones instantly, so your team isn't fielding the same questions on repeat.",
  },
  {
    slug: "new-homes-developers",
    label: "New homes & developers",
    tagline: "Turn plot and pricing questions into booked show-home visits.",
    description:
      "Plot pricing, specifications and show-home times drive a constant stream of enquiries. Reyse answers them the moment they land and books the visit.",
  },
  {
    slug: "short-term-lets",
    label: "Short-term lets",
    tagline: "Confirm availability and bookings before guests look elsewhere.",
    description:
      "Guests expect an answer in minutes, not hours — and they'll book elsewhere if they don't get one. Reyse confirms availability and takes the booking before they look elsewhere.",
  },
  {
    slug: "wedding-event-venues",
    label: "Wedding & event venues",
    tagline: "Answer date and pricing enquiries the instant they land.",
    description:
      "Couples enquire about dates, capacity and pricing long before they ever call. Reyse answers instantly, keeping your venue front of mind while they're comparing options.",
  },
  {
    slug: "student-accommodation",
    label: "Student accommodation",
    tagline: "Handle intake-season enquiry spikes without extra staff.",
    description:
      "Enquiries spike hard during intake season, all asking about rooms, rent and contracts. Reyse handles the surge without extra staff, so nothing slips through.",
  },
  {
    slug: "holiday-parks",
    label: "Holiday parks",
    tagline: "Keep pitches and lodges booked through every peak season.",
    description:
      "Pitch and lodge enquiries pile up fast in peak season. Reyse keeps answering and booking around the clock, even when your team can't.",
  },
  {
    slug: "self-storage",
    label: "Self-storage",
    tagline: "Turn unit enquiries into move-ins the same day.",
    description:
      "People enquiring about a unit want to know size, price and availability right now. Reyse answers on the spot and turns enquiries into move-ins the same day.",
  },
  {
    slug: "holiday-rental-agencies",
    label: "Holiday rental agencies",
    tagline: "Answer booking enquiries across your whole portfolio, instantly.",
    description:
      "Guests enquire about dozens of different properties at once, all expecting a fast reply. Reyse answers instantly across your entire portfolio, so no booking enquiry waits for a human to catch up.",
  },
  {
    slug: "campsites-glamping",
    label: "Campsites & glamping",
    tagline: "Keep pitches and glamping units booked through every peak season.",
    description:
      "Seasonal booking spikes bring a flood of questions about pitches, availability and facilities. Reyse answers around the clock, so your team isn't overwhelmed the moment good weather hits.",
  },
];
