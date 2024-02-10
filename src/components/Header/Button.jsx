import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-orange-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} hover:bg-orange-700 ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}