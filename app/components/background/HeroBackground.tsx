import React from "react";
import Image from "next/image"

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
                <Image
                className="h-full w-full object-cover"
                src="/background.svg"
                alt="Background"
                layout="fill"
            />
        </div>
    );
};

export default HeroBackground;
