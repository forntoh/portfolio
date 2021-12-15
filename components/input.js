import React from "react";
import { useState } from "react";

const Input = React.forwardRef(
  ({ onChange, onBlur, id, label, rows, type = "text", className }, ref) => {
    let [isEmpty, setIsEmpty] = useState(true);

    return (
      <div
        className={`${
          type == "checkbox" ? "inline-flex items-center" : "relative"
        }`}
      >
        {type === "textarea" ? (
          <textarea
            type={type}
            name={id}
            id={id}
            ref={ref}
            rows={rows || 3}
            onBlur={onBlur}
            onChange={(event) => {
              onchange && onChange(event);
              setIsEmpty(event.target.value.trim().length <= 0);
            }}
            className="border-0 bg-transparent outline-none focus:ring-0 border-b-2 focus:border-primary w-full transition-all duration-150 p-0"
          />
        ) : type == "checkbox" ? (
          <input
            className="!text-secondary w-6 h-6 mr-4 focus:ring-secondary focus:ring-opacity-25 border border-gray-300 rounded-sm text-xs"
            type={type}
            name={id}
            id={id}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            name={id}
            id={id}
            ref={ref}
            onBlur={onBlur}
            onChange={(event) => {
              onchange && onChange(event);
              setIsEmpty(event.target.value.trim().length <= 0);
            }}
            className="border-0 bg-transparent outline-none focus:ring-0 border-b-2 focus:border-primary w-full transition-all duration-150 p-0"
          />
        )}
        <label
          htmlFor={id}
          className={`caption transition-all duration-150 hover:cursor-text ${
            type == "checkbox" ? undefined : "absolute left-1 top-0"
          } ${!isEmpty ? "-translate-y-4 -translate-x-1" : undefined}`}
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
