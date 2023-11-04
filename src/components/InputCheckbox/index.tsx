import { InputCheckboxComponent } from "./types";
import classNames from "classnames";
import { useRef } from "react";

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`);

  return (
    <div className="RampInputCheckbox--container">
      <label
       htmlFor={inputId}
        //Bug 2: Approve checkbox not working
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  );
};
