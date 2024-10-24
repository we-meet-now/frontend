const Friendcon = ({ width = "37", height = "37", color = "#000000" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height="36.1905" fill="url(#pattern0_907_260)" />
      <defs>
        <pattern
          id="pattern0_907_260"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_907_260"
            transform="matrix(0.011115 0 0 0.0113636 -0.0557505 0)"
          />
        </pattern>
        <image
          id="image0_907_260"
          width="100"
          height="88"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Friendcon;
