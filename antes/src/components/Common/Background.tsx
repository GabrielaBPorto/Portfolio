import React from "react";
import Image from "next/image"

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute h-full w-full">
                <Image
                src="/assets/images/backgrounds/background.svg"
                alt="Background"
                layout="full"
                width={1080}
                height={100}
            />
        </div>
    );
};

export default HeroBackground;
