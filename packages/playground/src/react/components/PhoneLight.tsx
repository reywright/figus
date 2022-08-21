import React, { SVGProps } from "react";

export function PhoneLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M10 2.5h-.5v.5272c0 .212 0 .4181.0228.588.0257.1917.0885.4103.27.592.1817.1815.4003.2443.5919.27.17.0229.3761.0229.5881.0228h2.0544c.212 0 .4181 0 .5881-.0228.1916-.0257.4102-.0885.5918-.27.1816-.1817.2444-.4003.2701-.592.0229-.1699.0228-.376.0228-.588V2.5H10Z"
            />
            <rect
                width="11"
                height="19"
                x="6.5"
                y="2.5"
                stroke="currentColor"
                rx="1.5"
            />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
    );
}
export default PhoneLight;