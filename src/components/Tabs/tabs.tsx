import React from "react"

export interface TabsProps {
    color?: string
    background?: string
    onTabChange?: (value: string, index: number) => void
}

function Tabs(props: TabsProps) {
    return <div style={{
        color: props.color ?? 'black',
        background: props.background ?? 'white',
    }} className="flex1 select-none"></div>
}

export default Tabs