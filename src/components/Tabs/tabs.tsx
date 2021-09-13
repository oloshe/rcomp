import React, { PropsWithChildren, ReactNode, useState } from "react"
import { isJsxElement } from "typescript";
import { GlobalStyle } from "../../utils/global-style";
import { rs, bg, clr } from "../../utils/style";

export interface TabsProps {
    color?: string
    background?: string
    onTabChange?: (value: string, index: number) => void
}

const Tabs: React.FC<TabsProps> & { Item: React.FC<TabsItemProp> } = (props) => {
    // const { onTabChange } = props;
    // const [current, setCurrent] = useState(0)

	React.Children.map(props.children, (node) => {
		if (React.isValidElement(node) && node.type === TabsItem) {
			let props = node.props as TabsItemProp
			props.tab
		}
	})


	const style = rs.create_style(
		clr(props.color ?? 'black'),
		bg(props.background ?? 'white'),
		GlobalStyle.flex1,
		GlobalStyle.selectNone
	);

    return <div style={style}>
		{props.children}
    </div>
}



interface TabsItemProp {
    tab: ReactNode
	key: string
    onClick?: (active: boolean) => void
}

const TabsItem: React.FC<TabsItemProp> = function (props) {
	const style = rs.create_style(
		bg(true ? 'blue' : 'white'),
		clr(true ? 'white' : 'gray'),
		{
			borderRadius: rs.unit_format('0.5 0.5'),
			padding: rs.unit_format('0.2 1')
		}
	);

    return <div style={style} onClick={ () => props.onClick?.(false) }>{props.children}</div>
}

Tabs.Item = TabsItem
Tabs.displayName = "Tabs"
TabsItem.displayName = "TabsItem"

export default Tabs