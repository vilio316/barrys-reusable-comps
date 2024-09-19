interface Paragraph extends React.ComponentPropsWithoutRef<'p'>{
    weight?: string,
    fS?: number,
    text: string,
    indent?: number,
    //style?: 'italic' | 'oblique', 
}

export function Paragraph({indent, style, fS, text, weight ,className, color}: Paragraph){
    
    return(
        <>
        <p style={{
            fontSize: `${fS}rem`,
            fontStyle: `${style}`,
            textIndent: `${indent}rem`,
            fontWeight: weight,
            color: color,
        }} className={className}>{text}</p>
        </>
    )
}