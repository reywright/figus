import React, { SVGProps } from "react";

export function SortRandom(props: SVGProps<SVGSVGElement>) {
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
                d="M3 7h1.7798c2.152 0 3.2279 0 4.0994.4563a4 4 0 0 1 1.0058.7483c.6875.7037.9967 1.7343 1.615 3.7954.6183 2.0611.9275 3.0917 1.615 3.7954a4.0018 4.0018 0 0 0 1.0058.7483C14.9923 17 16.0683 17 18.2202 17H21m0 0-3-3m3 3-3 3"
            />
            <path
                fill="currentColor"
                d="m21.7071 6.293-3-3-1.4142 1.4142L18.5858 6h-.4105c-1.0379 0-1.8818 0-2.5728.0609-.7179.0633-1.3491.1972-1.9455.5095a4.9993 4.9993 0 0 0-1.2096.8872c.2409.3937.4304.8012.5932 1.2097.1133.284.2229.5935.332.9239.1516-.3152.2969-.5231.4577-.6878a2.9999 2.9999 0 0 1 .7543-.5612c.2751-.144.6176-.2383 1.1936-.289C16.3711 8.001 17.1267 8 18.2202 8h.3656l-1.2929 1.293 1.4142 1.4142 3-3L22.4142 7l-.7071-.7071ZM10.5526 16.5424c-.2409-.3936-.4304-.8011-.5932-1.2097-.1133-.284-.2229-.5935-.332-.9238-.1516.3152-.2969.5231-.4577.6877a2.9972 2.9972 0 0 1-.7543.5612c-.2751.1441-.6176.2383-1.1936.2891-.5929.0523-1.3485.0532-2.442.0532H3v2h1.8247c1.0379 0 1.8818 0 2.5728-.0609.7179-.0633 1.3491-.1972 1.9455-.5095a5.0007 5.0007 0 0 0 1.2096-.8873Z"
            />
        </svg>
    );
}
export default SortRandom;