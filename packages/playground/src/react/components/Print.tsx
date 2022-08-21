import React, { SVGProps } from "react";

export function Print(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.3529 14H19c.9428 0 1.4142 0 1.7071-.2929C21 13.4142 21 12.9428 21 12v-1c0-1.8856 0-2.8284-.5858-3.4142C19.8284 7 18.8856 7 17 7H7c-1.8856 0-2.8284 0-3.4142.5858C3 8.1716 3 9.1144 3 11v2c0 .4714 0 .7071.1465.8536C3.2929 14 3.5286 14 4 14h1.647"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M6 20.3063V12c0-.9428 0-1.4142.2929-1.7071C6.5858 10 7.0572 10 8 10h8c.9428 0 1.4142 0 1.7071.2929C18 10.5858 18 11.0572 18 12v8.3063c0 .3165 0 .4748-.1038.5497-.1038.0748-.254.0247-.5543-.0754l-2.1838-.7279c-.0783-.0261-.1175-.0392-.1581-.0392s-.0798.0131-.1581.0392l-2.6838.8946c-.0783.0261-.1175.0392-.1581.0392s-.0798-.0131-.1581-.0392l-2.6838-.8946c-.0783-.0261-.1175-.0392-.1581-.0392s-.0798.0131-.1581.0392l-2.1838.7279c-.3003.1001-.4505.1502-.5543.0754C6 20.7811 6 20.6228 6 20.3063ZM18 7V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C16.6321 3 16.1281 3 15.12 3H8.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C6 4.3678 6 4.872 6 5.88V7"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10 14h3m-3 3h4.5"
            />
        </svg>
    );
}
export default Print;