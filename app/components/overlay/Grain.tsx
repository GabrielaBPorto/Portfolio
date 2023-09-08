import React from "react";

type GrainProps = {
  baseFrequency?: string;
  numOctaves?: number;
  w?: number | string;
  h?: number | string;
};

const Grain: React.FC<GrainProps> = ({
    baseFrequency = "1",
    numOctaves = 2,
    w = "100%",
    h = "100%",
}) => {
    const viewBox = "0 0 300 300";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            preserveAspectRatio="none"
        >
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency={baseFrequency}
                    numOctaves={numOctaves}
                />
            </filter>
            <text x="50%" y="50%" textAnchor="middle" fontSize="200" filter="url(#noiseFilter)">
                *
            </text>
        </svg>
    );
};

export default Grain;
