type Paragraph = {
    weight?: string,
    fS?: number,
    style?: string,
    text: string,
    indent?: number, 
    
}
export function Paragraph(props : Paragraph ){
    const default_p_style : any = {
        fontSize: '1rem',
        fontStyle:"normal",
        textIndent: '',
    }
    let new_style_obj = {...default_p_style, fontSize: `${props.fS}rem`, fontStyle: `${props.style}`, fontWeight:`${props.weight}`, textIndent: `${props.indent}rem`}

    return(
        <>
        <p style={
            new_style_obj
        } className="first_letter"
        >
            {props.text}
        </p>
        </>
    )
}