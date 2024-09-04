type ImgStyle ={
    bRadius?: number,
    width?: number,
    pad?: number, 
    alt: string,
    src: string,
}
//pickup from here tomorrow
export function Image(props: ImgStyle){
    let img_width = (props.width) ? props.width * 100: 75

    let default_style={
        width : `${img_width}%`,
        borderRadius:'0.5rem',
        padding: '0.5rem'
    }

    let new_style_obj = {...default_style, 
                        padding: `${props.pad}rem`,
                        borderRadius : `${props.bRadius}rem`

    }

    return(
        <>
            <img style={new_style_obj} alt={props.alt} src={props.src} />
        </>
    )
}
