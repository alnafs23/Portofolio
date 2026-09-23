type IconProps = { size?: number; className?: string };

export function PowerBIIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <rect x="3" y="12" width="4" height="9" rx="1" fill="#F2C811" />
      <rect
        x="10"
        y="7"
        width="4"
        height="14"
        rx="1"
        fill="#F2C811"
        opacity="0.85"
      />
      <rect
        x="17"
        y="3"
        width="4"
        height="18"
        rx="1"
        fill="#F2C811"
        opacity="0.7"
      />
    </svg>
  );
}

export function CanvaIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <defs>
        <linearGradient id="canva-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#canva-grad)" />
      <path
        d="M12.3 7.3c-2.8 0-4.9 2.1-4.9 4.8 0 2.6 1.9 4.5 4.4 4.5 1.3 0 2.2-.5 2.7-1 .1.5.5.9 1 .9.6 0 1-.5 1-1.3V9c0-.5-.4-.8-.9-.8-.4 0-.7.2-.9.6-.6-.9-1.6-1.5-2.4-1.5zm.4 7.5c-1.5 0-2.5-1.1-2.5-2.7s1.1-2.8 2.6-2.8c1.2 0 2 .8 2 .8v3.6s-.9 1.1-2.1 1.1z"
        fill="white"
      />
    </svg>
  );
}

export function MentimeterIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF3131" />
      <path
        d="M6 16V9a1 1 0 0 1 2 0v3.2L10.2 9a1 1 0 0 1 1.8.6v3l2-3.4a1 1 0 0 1 1.8.5V16"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CapCutIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <defs>
        <linearGradient id="capcut-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        fill="url(#capcut-grad)"
      />
      <path
        d="M8 9.5a2.2 2.2 0 1 0 0 4.4M16 9.5 8 14.3M16 14.3 12 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function MicrosoftFabricIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <defs>
        <linearGradient id="fabric-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0DA9DA" />
          <stop offset="50%" stopColor="#5A6EFC" />
          <stop offset="100%" stopColor="#9F5FF0" />
        </linearGradient>
      </defs>
      <path d="M12 2 21 8 12 22 3 8Z" fill="url(#fabric-grad)" />
      <path d="M12 2 21 8 12 12 3 8Z" fill="white" opacity="0.25" />
    </svg>
  );
}

export function DbDiagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <rect
        x="2"
        y="3"
        width="9"
        height="7"
        rx="1.5"
        stroke="#1F6FEB"
        strokeWidth="1.6"
      />
      <rect
        x="13"
        y="14"
        width="9"
        height="7"
        rx="1.5"
        stroke="#1F6FEB"
        strokeWidth="1.6"
      />
      <path
        d="M6.5 10v4a2 2 0 0 0 2 2h4"
        stroke="#1F6FEB"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
