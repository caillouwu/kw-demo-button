import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("demo-spinner")
export class DemoSpinnerElement extends LitElement {
  @property()
  size: "xsmall" | "small" | "medium" | "large" = "small";

  static styles = css`
    .loader {
      border: var(--demo-circle-spinner-border, 4px solid #fff);
      border-bottom-color: var(--demo-circle-spinner-border-bottom-color, #82c31f);
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    .loader--xsmall {
      width: var(--demo-circle-spinner-xsmall, 16px);
      height: var(--demo-circle-spinner-xsmall, 16px);
    }
    .loader--small {
      width: var(--demo-circle-spinner-small, 24px);
      height: var(--demo-circle-spinner-small, 24px);
    }
    .loader--medium {
      width: var(--demo-circle-spinner-medium, 40px);
      height: var(--demo-circle-spinner-medium, 40px);
    }
    .loader--large {
      width: var(--demo-circle-spinner-large, 64px);
      height: var(--demo-circle-spinner-large, 64px);
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`<span
      class=${["loader", `loader--${this.size}`].join(" ")}
    ></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "demo-spinner": DemoSpinnerElement;
  }
}