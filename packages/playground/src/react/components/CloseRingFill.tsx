import React, { SVGProps } from "react";

export function CloseRingFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Zm1.2929-6.2929c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L13.4142 12l1.2929-1.2929c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0L12 10.5858l-1.2929-1.293c-.3905-.3904-1.0237-.3904-1.4142 0-.3905.3906-.3905 1.0238 0 1.4143L10.5858 12l-1.293 1.2929c-.3904.3905-.3904 1.0237 0 1.4142.3906.3905 1.0238.3905 1.4143 0L12 13.4142l1.2929 1.2929Zm1.3859-9.1743a7 7 0 0 0-7.6286 11.4169c.3906.3906 1.0237.3906 1.4143 0 .3905-.3905.3905-1.0236 0-1.4142a4.9997 4.9997 0 0 1-.6218-6.3134A5 5 0 1 1 12 17c-.5523 0-1 .4477-1 1s.4477 1 1 1a7 7 0 0 0 2.6788-13.4672Z"
            />
        </svg>
    );
}
export default CloseRingFill;