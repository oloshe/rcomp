import { CSSProperties as Css } from "react"

/** 单位 */
const UNIT = 'rem';

/** rcomp style function */
export namespace rs {
	export function size(num: number | string) {
		return `${num}${UNIT}`
	}
	export const unit_format = (str: string) => str.replace(/(\d+)(?!(%|\d|\.))/g, `$1${UNIT}`)

	export function create_style(...data: Css[]) {
		return Object.assign({}, ...data) as Css;
	}
}


export const build_in_color: Record<string, string> = {
    blue: '#658aff',
    yellow: '#fbfd2d',
    red: '#f24c4c',
    green: '#4cc338',
    purple: '#a04cff',
    cyan: '#3de9e9',
    gray: '#888',
    white: '#fff',
    black: '#000',
    ghost: '#f6f6f6',
    dark: '#333',
}

export const get_color = <T>(color: T) => color in build_in_color ? (build_in_color as any)[color] : color;

/** background */
export const bg = (color: Css['background']): Css => ({ background: get_color(color) });

/** color  */
export const clr = (color: Css['color']): Css => ({ color: get_color(color) });

/** border-radius */
export const radius = (borderRadius: Css['borderRadius']): Css => ({ borderRadius })

/** padding */
export const padding = (padding: Css['padding']): Css => ({ padding })