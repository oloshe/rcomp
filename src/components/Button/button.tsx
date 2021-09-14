import React from "react";

export interface ButtonProps {
	disable?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
	return <div className="rc__btn">{props.children}</div>
}
export default Button