import React, {FC} from 'react';

const Gear: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path d="M0 40.8H40V0.8H0V40.8Z" fill="url(#patternGear0)" />
      <defs>
        <pattern id="patternGear0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#imageGear0" transform="scale(0.015625)" />
        </pattern>
        <image
          id="imageGear0"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Gear;
