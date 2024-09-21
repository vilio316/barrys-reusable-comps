interface DivProps extends React.ComponentPropsWithoutRef<'div'>{
    bRadius?: number,
    pad?: number,
    mTopBott? : number,
    mLeftRight?: number,
    bgColor?: string,
    width?: number

}

export function Div({className, children, pad, mTopBott, mLeftRight, bRadius, width} : DivProps){

    return(
        <div className={className} style={{
            padding: `${pad} rem`,
            margin: `${mTopBott}rem ${mLeftRight}rem`,
            borderRadius: `${bRadius}rem`,
            width: `${width}rem`
        }}>
            {children}
        </div>
    )
}