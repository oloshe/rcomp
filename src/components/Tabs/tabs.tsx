import React, { useState } from "react"

export interface TabsProps<T, K extends keyof T> {
    items: T[]
    displayKey: K
    color?: string
    background?: string
    onTabChange?: (value: T, index: number) => void
}

function Tabs<T, K extends keyof T>(props: TabsProps<T, K>) {
    const { items, displayKey, onTabChange } = props;
    const [current, setCurrent] = useState(0)
    return <div style={{
        color: props.color ?? 'black',
        background: props.background ?? 'white',
    }} className="flex1 select-none">
        {items.map((item, index) => (
            <TabItem
                key={index}
                active={current === index} 
                onClick={ (active) => {
                    if (!active) {
                        onTabChange?.(item, index);
                        setCurrent(index);
                        console.log(index)
                    }
                }}
            >
                {item[displayKey]}
            </TabItem>
        ))}
    </div>
}

interface TabItemProp {
    active: boolean
    onClick?: (active: boolean) => void
}

const TabItem: React.FC<TabItemProp> = function (props) {
    const colorBg = props.active ? `bg-blue clr-dark` : `bg-white clr-gray`;
    return <div className={`${colorBg}`} onClick={ () => props.onClick?.(props.active) }>{props.children}</div>
}

export default Tabs