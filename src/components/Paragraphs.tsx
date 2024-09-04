type Paragraph = {
    weight?: string,
    fS?: number,
    style?: string,
    text: string,
    indent?: number, 
    
}

interface Paragraph_Int extends React.ComponentPropsWithoutRef<'p'>{
    text?: string,
}

export function Paragraph(props : Paragraph_Int ){
    /*const default_p_style : any = {
        fontSize: '1rem',
        fontStyle:"normal",
        textIndent: '',
    }
    let new_style_obj = {...default_p_style, fontSize: `${props.fS}rem`, fontStyle: `${props.style}`, fontWeight:`${props.weight}`, textIndent: `${props.indent}rem`}
    */
    return(
        <>
        <p className={`${props.className}`}>{props.text}</p>
        </>
    )
}