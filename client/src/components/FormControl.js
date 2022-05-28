import React from "react";
import classnames from "../utils/classnames";

const FormControl = (props) => {
  const { field, form, label, placeholder } = props;
  const { values, errors, touched } = form;
  const error = Boolean(errors[field.name] && touched[field.name]);
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="text-[18px] font-[500]">{label}</label>
      <input
        type="text"
        className={classnames(
          "h-[40px] border-[1px] text-[16px] border-[#E4E4E4] px-[10px] rounded-[5px] hover:border-blue-500 focus:border-blue-500 outline-none",
          {
            ["border-[#dc3545]"]: error,
          }
        )}
        value={values[field.name]}
        placeholder={placeholder}
        {...field}
      />
      {error && (
        <p className="text-[#dc3545] text-[16px]">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default FormControl;
