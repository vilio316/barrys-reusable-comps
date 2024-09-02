export type styleObject = {
    bR?: string, 
    color?: string, 
    bgColor?: string, 
    pad?: string,
    mLeft?: string,
    mRight?: string,
    mB?: string,
    mTop?: string,
    fS?: number,  
    width?: string
}

export default function Button(props : {
    style_obj : styleObject,
    text: string
}){

    return(
        <>
        <button style={{
            border: "none",
            outline: "none",
            borderRadius: `${props.style_obj.bR}rem`,
            color: `${props.style_obj.color}`,
            backgroundColor: `${props.style_obj.bgColor}`,
            padding: `${props.style_obj.pad}rem`,
            marginLeft: `${props.style_obj.mLeft}rem`,
            marginRight: `${props.style_obj.mRight}rem`,
            marginTop: `${props.style_obj.mTop}rem`,
            marginBottom: `${props.style_obj.mB}rem`,
            fontSize: `${props.style_obj.fS}rem`,
            width: `${props.style_obj.width}rem`,
        }}>{props.text}</button>
        </>
    )
}

