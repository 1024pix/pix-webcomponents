/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HelloWorld {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLHelloWorldElement extends Components.HelloWorld, HTMLStencilElement {
    }
    var HTMLHelloWorldElement: {
        prototype: HTMLHelloWorldElement;
        new (): HTMLHelloWorldElement;
    };
    interface HTMLElementTagNameMap {
        "hello-world": HTMLHelloWorldElement;
    }
}
declare namespace LocalJSX {
    interface HelloWorld {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "hello-world": HelloWorld;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hello-world": LocalJSX.HelloWorld & JSXBase.HTMLAttributes<HTMLHelloWorldElement>;
        }
    }
}
