export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 280 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Antenna Icon */}
      <g>
        {/* Signal waves */}
        <path
          d="M8 20C8 15.5817 9.79107 11.6447 12.6863 8.75736"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12.6863 31.2426C9.79107 28.3553 8 24.4183 8 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M27.3137 8.75736C30.2089 11.6447 32 15.5817 32 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 20C32 24.4183 30.2089 28.3553 27.3137 31.2426"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Inner waves */}
        <path
          d="M13 20C13 17.6131 13.9482 15.4239 15.5147 13.8579"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.5147 26.1421C13.9482 24.5761 13 22.3869 13 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24.4853 13.8579C26.0518 15.4239 27 17.6131 27 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M27 20C27 22.3869 26.0518 24.5761 24.4853 26.1421"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Center antenna */}
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        <line x1="20" y1="22.5" x2="20" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="8" x2="20" y2="17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      {/* Text: ANTENNA MEASUREMENT SERVICE */}
      <text
        x="42"
        y="16"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="0.5"
      >
        ANTENNA
      </text>
      <text
        x="42"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="7"
        fontWeight="500"
        fill="currentColor"
        opacity="0.8"
        letterSpacing="1"
      >
        MEASUREMENT SERVICE
      </text>
    </svg>
  );
};
