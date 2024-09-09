import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    background: transparent;
  }
  .demo-button {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 24px;
    display: inline-block;
    line-height: 1;
  }
  .demo-button:focus-visible {
    background-color: #26afdf;
    box-shadow: 0px 0px 0px 4px #b474d1;
  }
  .demo-button--primary {
    color: white;
    background-color: #027baf;
    cursor: pointer;
  }
  .demo-button--primary:hover {
    background-color: #26afdf;
  }
  .demo-button--disabled {
    color: #828282;
    background-color: #e1e1e1;
  }
  .demo-button--xsmall {
    font-size: 10px;
    padding: 8px 12px;
    width: 80px;
    height: 30px;
  }
  .demo-button--small {
    font-size: 18px;
    padding: 12px 16px;
    width: 150px;
    height: 50px;
  }
  .demo-button--medium {
    font-size: 36px;
    padding: 12px 16px;
    width: 220px;
    height: 80px;
  }
  .demo-button--large {
    font-size: 48px;
    padding: 12px 24px;
    border-radius: 48px;
    width: 300px;
    height: 110px;
  }
`;
