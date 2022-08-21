import React, { SVGProps } from "react";

export function LinkAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M5.251 9.663 3.6645 8.2526c-.4128-.367-1.0449-.3297-1.4118.083-.367.4128-.3297 1.0449.083 1.4118l1.4051 1.249.0688-.0611c.502-.4464.9817-.8728 1.4416-1.2723Zm2.2945 4.6416c.364.2907.7094.5505 1.0412.7773 1.1165.7631 2.1843 1.2283 3.4133 1.2283 1.2291 0 2.2968-.4652 3.4133-1.2283 1.0808-.7387 2.306-1.8277 3.8426-3.1936l.0521-.0463 2.3564-2.0946c.4128-.3669.4499-.999.083-1.4118-.3669-.4127-.999-.45-1.4118-.083l-2.3563 2.0945c-1.6007 1.4228-2.7314 2.4254-3.6945 3.0836-.9396.6422-1.6128.8795-2.2848.8795-.6719 0-1.3451-.2373-2.2848-.8795a13.7656 13.7656 0 0 1-.636-.4643c-.4458.3777-.9492.82-1.5337 1.3382Z"
            />
            <path
                fill="currentColor"
                d="M16.4545 9.6951c-.3639-.2907-.7094-.5505-1.0412-.7773-1.1165-.763-2.1842-1.2283-3.4133-1.2283-1.229 0-2.2968.4652-3.4133 1.2283-1.0808.7387-2.306 1.8277-3.8426 3.1936l-.052.0463-2.3565 2.0946c-.4127.3669-.45.999-.083 1.4117.367.4128.999.45 1.4118.0831l2.3563-2.0946c1.6007-1.4228 2.7314-2.4253 3.6945-3.0835.9397-.6422 1.6129-.8796 2.2848-.8796.672 0 1.3452.2374 2.2848.8796.2036.1391.4146.2936.6361.4643.4457-.3777.9491-.8201 1.5336-1.3382Zm3.8048 3.3082-.0687.0611h-.0001c-.5021.4464-.9817.8728-1.4415 1.2723l1.5866 1.4104c.4128.3669 1.0449.3297 1.4118-.0831.3669-.4127.3298-1.0448-.083-1.4117l-1.4051-1.249Z"
            />
        </svg>
    );
}
export default LinkAlt;