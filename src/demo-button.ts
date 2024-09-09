import { html, LitElement} from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "./demo-button-css.ts";
import { KeyboardFocusRingController } from "./focus-ring-controller.ts";
import "./demo-spinner.ts";

export interface PartNameInfo {
  readonly [name: string]: string | boolean | number;
}

export const partNameMap = (partNameInfo: PartNameInfo) => {
  return Object.keys(partNameInfo)
    .filter((key) => partNameInfo[key])
    .join(" ");
};

@customElement("demo-button")
export default class DemoButtonComponent extends LitElement {
  protected _disabled = false;
  /**
   * How large should the button be?
   */
  @property()
  size: "xsmall" | "small" | "medium" | "large" = "large";
  @query('[part="base"]', true)
  private _nativeButton!: HTMLButtonElement;

  /**
   * The type of the button. Defaults to `button`.
   * @attr
   */
  @property({ reflect: true })
  public type: "button" | "reset" | "submit" = "button";
  @property({ type: Boolean })
  loading = false;
  @property()
  ariaLabel = "a button"

  static styles = [styles];
  private _kbFocus = new KeyboardFocusRingController(this);

  override render() {
    return html`
      <button
        part=${partNameMap({
          base: true,
          focused: this._kbFocus.focused,
        })}
        aria-label=${this.loading ? "action in progress" : this.ariaLabel}
        ?disabled=${this.disabled}
        type=${this.type}
        @blur=${this.handleBlur}
        class=${[
          "demo-button",
          `demo-button--${this.size || "medium"}`,
          this.state(),
        ].join(" ")}
      >
        ${
            this.loading && !this.disabled
            ? html`<demo-spinner size=${this.size}></demo-spinner>`
            : html` <slot name="prefix"></slot>
                    <slot></slot>
                    <slot name="suffix"></slot>`
        }
      </button>
    `;
  }

  state() {
    return this.disabled ? "demo-button-disabled" : "demo-button--primary";
  }

  /**
   * The disabled state of the component
   * @attr [disabled=false]
   */
  @property({ type: Boolean, reflect: true })
  public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(value: boolean) {
    this._disabled = value;
    this.toggleAttribute("disabled", Boolean(this._disabled));
  }

  /** Sets focus in the button. */
  public override focus(options?: FocusOptions) {
    this._nativeButton.focus(options);
  }

  /** Simulates a mouse click on the element */
  public override click() {
    this._nativeButton.click();
  }

  /** Removes focus from the button. */
  public override blur() {
    this._nativeButton.blur();
  }

  protected handleBlur() {
    this._kbFocus.reset();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "demo-button": DemoButtonComponent;
  }
}
