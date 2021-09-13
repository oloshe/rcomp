import React from "react"
import { GlobalStyle } from "../../utils/global-style"
import { bg, clr, rs } from "../../utils/style"

export interface ButtonProps {

}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<div style={
			rs.create_style(
				bg('blue'),
				clr('white'),
				GlobalStyle.flex3,
				{
					padding: rs.size(0.2),
					width: rs.size(3),
					fontSize: rs.size(1),
				},
				GlobalStyle.radiusL,
				GlobalStyle.selectNone,
				GlobalStyle.pointer,
			)
		}>{props.children}</div>
	)
}

export default Button