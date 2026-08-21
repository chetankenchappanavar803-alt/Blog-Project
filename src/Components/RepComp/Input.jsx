import React, { useId } from "react";

const Input = React.forwardRef(function Input({
    label,
    type ="text",
    className = "",
    ...props
},ref)
{
    const id = useId()
    return (
        <div className="w-full">
  {label && (
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-700"
    >
      {label}
    </label>
  )}
  <input
    type="text"
    ref={ref}
    {...props}
    id={id}
    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               focus:border-blue-500 placeholder-gray-400"
  />
</div>


    )
})

export default Input