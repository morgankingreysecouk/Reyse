export type Product = {
  slug: string;
  label: string;
  status?: "Live" | "Coming soon";
  description: string;
};

// Order matters: ProductsBento lays the first two out as large "featured"
// cards, then the rest in rows of three.
export const products: Product[] = [
  {
    slug: "live-chat",
    label: "Live chat",
    status: "Live",
    description: "Instant answers on your website chat widget, day or night.",
  },
  {
    slug: "ai-voice",
    label: "AI voice automation",
    status: "Coming soon",
    description: "The same intelligence, now answering the phone.",
  },
  {
    slug: "instagram-dm",
    label: "Instagram DM automation",
    description: "Replies to Instagram DMs the moment they land.",
  },
  {
    slug: "facebook-dm",
    label: "Facebook DM automation",
    description: "Handles Facebook Messenger enquiries automatically.",
  },
  {
    slug: "whatsapp",
    label: "WhatsApp automation",
    description: "Answers WhatsApp enquiries instantly, day or night.",
  },
  {
    slug: "teams-slack",
    label: "Teams / Slack",
    description: "Routes and answers enquiries wherever your team already works.",
  },
  {
    slug: "email",
    label: "Email",
    description: "Drafts and sends replies to enquiry emails automatically.",
  },
  {
    slug: "custom",
    label: "Custom",
    description: "A channel we don't list yet? We'll build it into your workflow.",
  },
];
