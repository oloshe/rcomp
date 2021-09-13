import { CSSProperties } from "react";
import { padding, radius, rs } from "./style";

type Css = CSSProperties

export namespace GlobalStyle {

	//========== display ==========
	export const flex: Css = {
		display: 'flex'
	}

	export const flex1: Css = {
		...flex,
		alignItems: 'center',
	}

	export const flex2: Css = {
		...flex1,
		justifyContent: 'center',
	}

	export const flex3: Css = {
		...flex1,
		...flex2,
	}


	export const borderBox: Css = {
		boxSizing: 'border-box'
	}
	
	export const pa: Css = {
		position: "absolute",
	}

	export const pr: Css = {
		position: "relative",
	}

	export const selectNone: Css = {
		userSelect: "none",
	}

	export const pointer: Css = {
		cursor: 'pointer'
	}

	export const round: Css = {
		borderRadius: '50%',
	}

	export const radiusSm: Css = radius(rs.size(0.1))
	export const radiusM: Css = radius(rs.size(0.2))
	export const radiusL: Css = radius(rs.size(0.3))
	export const radiusXL: Css = radius(rs.size(0.4))
}