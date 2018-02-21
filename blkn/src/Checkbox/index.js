// @flow

import * as React from "react";
import Typography from "../Typography";

type Props = {
  label: string,
  checked: boolean,
  onChange: (SynthethicInputEvent<HTMLInputElement>) => any,
};

const Checkbox = (props: Props) => (
  <div>
    <label>
      <div className="checkbox">{props.checked && <i>todo checked icon</i>}</div>
      <Typography variant={props.checked ? "bold" : "normal"}>{props.label}</Typography>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
    </label>
    <style jsx>{`
      label {
        display: flex;
        align-items: center;
      }
      .checkbox {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border-radius: 3px;
        background-color: white;
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #bac7d5;
      }
      input[type="checkbox"] {
        display: none;
      }
    `}</style>
  </div>
);

export default Checkbox;
