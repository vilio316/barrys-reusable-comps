type Paragraph = {
    weight?: string,
    fS?: number,
    style?: 'italic' | 'oblique' ,
    text: string,
    indent?: number, 
    className?: string
}

export function Paragraph({indent, style, fS, text, weight ,className}: Paragraph){
    
    return(
        <>
        <p style={{
            fontSize: `${fS}rem`,
            fontStyle: `${style}`,
            textIndent: `${indent}rem`,
            fontWeight: weight
        }} className={className}>{text}</p>
        </>
    )
}