const steps = ["Learn", "Build", "Prove", "Certify"];

export default function FlowFigure() {
  return (
    <figure style={{ margin: "1.5rem 0" }}>
      <style>{`
        .flow-line { stroke-dasharray: 6 6; animation: flow-dash 1.2s linear infinite; }
        .flow-node { animation: flow-pulse 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes flow-dash { to { stroke-dashoffset: -12; } }
        @keyframes flow-pulse { 0%, 100% { opacity: .55; } 25% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .flow-line, .flow-node { animation: none; }
        }
      `}</style>
      <svg
        viewBox="0 0 640 110"
        role="img"
        aria-label="Path: Learn, Build, Prove, Certify"
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          <marker
            id="flow-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0L10 5L0 10z" fill="#0b2a45" />
          </marker>
        </defs>
        {steps.map((label, i) => {
          const x = 10 + i * 160;
          return (
            <g key={label}>
              <rect
                className="flow-node"
                x={x}
                y={30}
                width={110}
                height={50}
                rx={12}
                fill="#0b2a45"
                style={{ animationDelay: `${i}s` }}
              />
              <text
                x={x + 55}
                y={61}
                textAnchor="middle"
                fill="#fff"
                fontSize="16"
                fontWeight="600"
              >
                {label}
              </text>
              {i < steps.length - 1 && (
                <line
                  className="flow-line"
                  x1={x + 114}
                  y1={55}
                  x2={x + 156}
                  y2={55}
                  stroke="#0b2a45"
                  strokeWidth={2}
                  markerEnd="url(#flow-arrow)"
                />
              )}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
