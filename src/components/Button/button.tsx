import React, { useState } from "react";

export interface ButtonProps {
	mode?: 'normal' | 'calm' | 'crazy' | 'insame'
	disable?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
	let {
		mode = 'normal',
		disable = false
	} = props

	const [ani, setAni] = useState(false)

	const onAniEnd = () => {
		setAni(false)
	}

	const onClick = () => {
		if (mode === 'calm') {
			setAni(true)
		}
	}

	return (
		<div
		className={`rc__btn${disable ? ' disable' : ''} ${mode} pr ani`}
		onAnimationEnd={onAniEnd}
		onClick={onClick}
		data-ani={ani}
		>
			{props.children}
		</div>
	)
}
export default Button