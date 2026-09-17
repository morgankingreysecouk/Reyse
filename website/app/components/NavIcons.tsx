function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      {children}
    </svg>
  );
}

export const SearchIcon = (
  <Icon>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.8-4.8" strokeLinecap="round" />
  </Icon>
);

export const SparkIcon = (
  <Icon>
    <path
      d="M12 3.5c.6 3 2 4.4 5 5-3 .6-4.4 2-5 5-.6-3-2-4.4-5-5 3-.6 4.4-2 5-5Z"
      strokeLinejoin="round"
    />
    <path d="M19 15.5c.3 1.4.9 2 2.3 2.3-1.4.3-2 .9-2.3 2.3-.3-1.4-.9-2-2.3-2.3 1.4-.3 2-.9 2.3-2.3Z" strokeLinejoin="round" />
  </Icon>
);

export const StarIcon = (
  <Icon>
    <path
      d="M12 3.5l2.5 5.3 5.8.7-4.3 4 1.1 5.8-5.1-2.9-5.1 2.9 1.1-5.8-4.3-4 5.8-.7L12 3.5Z"
      strokeLinejoin="round"
    />
  </Icon>
);

export const ChartIcon = (
  <Icon>
    <path d="M4 20V10M11 20V4M18 20v-7" strokeLinecap="round" />
    <path d="M3 20h18" strokeLinecap="round" />
  </Icon>
);

export const ScaleIcon = (
  <Icon>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.3" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.3" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.3" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.3" />
  </Icon>
);

export const LayersIcon = (
  <Icon>
    <path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z" strokeLinejoin="round" />
    <path d="m3 12 9 4.5 9-4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m3 16 9 4.5 9-4.5" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const CompassIcon = (
  <Icon>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m14.8 9.2-1.6 4.4-4.4 1.6 1.6-4.4 4.4-1.6Z" strokeLinejoin="round" />
  </Icon>
);

export const InfoIcon = (
  <Icon>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5.5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
  </Icon>
);

export const DocumentIcon = (
  <Icon>
    <path d="M7 3.5h7l4 4V20a.7.7 0 0 1-.7.7H7A.7.7 0 0 1 6.3 20V4.2A.7.7 0 0 1 7 3.5Z" strokeLinejoin="round" />
    <path d="M14 3.5V8h4" strokeLinejoin="round" />
    <path d="M9 12.5h6M9 15.5h6M9 9.5h2" strokeLinecap="round" />
  </Icon>
);

export const BriefcaseIcon = (
  <Icon>
    <rect x="3" y="7.5" width="18" height="12" rx="1.6" />
    <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" strokeLinecap="round" />
    <path d="M3 12.5h18" />
  </Icon>
);

export const ShieldIcon = (
  <Icon>
    <path d="M12 3.5 19 6.5v5c0 5-3 8-7 9-4-1-7-4-7-9v-5l7-3Z" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const MailIcon = (
  <Icon>
    <rect x="3" y="5.5" width="18" height="13" rx="1.6" />
    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const HeartIcon = (
  <Icon>
    <path
      d="M12 19.5s-7.5-4.6-9.3-9.3C1.6 7.1 3.4 4 6.5 4c2 0 3.3 1.1 4 2.3.7-1.2 2-2.3 4-2.3 3.1 0 4.9 3.1 3.8 6.2C19.5 14.9 12 19.5 12 19.5Z"
      strokeLinejoin="round"
    />
  </Icon>
);
