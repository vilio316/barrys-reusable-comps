export type ButtonProps = {
    bR?: number, 
    color?: string, 
    bgColor?: string, 
    pad?: number,
    mLeftRight?: number,
    mTopBott?: number,
    fS?: number,  
    width?: string,
    text: string,
}

export default function Button({bR, bgColor,color, pad, mLeftRight, mTopBott, fS, width, text} : ButtonProps,){

    return(
        <>
        <button style={{
            border: "none",
            outline: "none",
            borderRadius: `${bR}rem`,
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

