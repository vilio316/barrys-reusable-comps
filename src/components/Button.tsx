interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>{
    bRadius?: number, 
    color?: string, 
    bgColor?: string, 
    pad?: number,
    mLeftRight?: number,
    mTopBott?: number,
    fS?: number,  
    width?: string,
    text: string,
}

export default function Button({bRadius, bgColor,color, pad, mLeftRight, mTopBott, fS, width, text, onClick} : ButtonProps,){

    return(
        <>
        <button onClick={onClick} style={{
            border: "none",
            outline: "none",
            borderRadius: `${bRadius}rem`,
            color: color,
            backgroundColor: bgColor,
            padding: `${pad}rem`,
            margin: `${mTopBott}rem ${mLeftRight}rem`,
            fontSize: `${fS}rem`,
            width: `${width}rem`,
        }}>{text}</button>
        </>
    )
}

