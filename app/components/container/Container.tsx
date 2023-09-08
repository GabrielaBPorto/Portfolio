import React, { useState, useRef } from "react";
import Grain from "../overlay/Grain";
import "./container.css";
import {useEventListener} from "usehooks-ts";

type CustomCSSProperties = React.CSSProperties & {
    "--width"?: string | number;
    "--height"?: string | number;
    "--gradient"?: string;
    "--highlight-color"?: string;
    "--accent-color"?: string;
    "--border-radius"?: string | number;
    "--top"?: string | number;
    "--left"?: string | number;
    "--is-hovered"?: number;
    "--cursor-x"?: string;
    "--cursor-y"?: string;
    "--angle"?: number;
};

type ContainerProps = {
    // size
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    // position
    top?: string | number;
    left?: string | number;
    // colors
    color: string;
    // accent
    accent?: boolean; // TODO: !!
    accentColor?: string;
    accentOffsetX?: string | number; // TODO: !!
    accentOffsetY?: string | number; // TODO: !!
    // blur
    blur?: boolean;
    // border
    border?: boolean; // TODO: !!
    borderColor?: string; // TODO: !!
    // border-highlight
    borderHighlight?: boolean; // TODO: !!
    borderHighlightColor?: string; // TODO: !!
    // spotlight
    spotlight?: boolean; // TODO: !!
    spotlightColor?: string;
    // gradient
    angle?: number;
    // grain
    grain?: boolean; // TODO: !!
    baseFrequency?: string;
    numOctaves?: number;
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
    blur = true,
    children,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const blurClasses = blur ? "backdrop-brightness-200" : "";

    return (
        <div
            className={`container ${blurClasses}`}
            style={{
                '--is-hovered': 1
            } as unknown as CustomCSSProperties}
            ref={containerRef}
        >
            {children}
        </div>
    );
};

export default Container;
