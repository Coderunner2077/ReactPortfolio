import React from "react";

function Button({ title, disabled = false }) {
	return <button disabled={disabled} className={`${disabled ? "cursor-not-allowed" : ""}`}>{title}</button>;
}

export default Button;
