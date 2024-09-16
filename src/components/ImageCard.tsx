import { Paragraph } from "./Paragraphs"

type ImgStyle ={
    bRadius?: number,
    width?: number,
    height?: number,
    pad?: number, 
    alt: string,
    src: string,
}

type ImageCard = {
    bRadius?: number,
    pad?: number,
    cardHeight?: number,
    cardWidth?: number,
    fWeight?: 'bold'|'100'|'200'|'300'|'400',
    src: string,
    alt: string,
    icon?: any,
    imgRadius?: number
}

export function Image(props: ImgStyle){
    let img_width = (props.width) ? props.width * 100: 75

    let default_style={
        width : `${img_width}%`,
        borderRadius:'0.5rem',
        padding: '0.5rem'
    }

    let new_style_obj = {...default_style, 
                        padding: `${props.pad}rem`,
                        borderRadius : `${props.bRadius}rem`,
    }

    return(
        <>
            <img style={new_style_obj} alt={props.alt} src={props.src} />
        </>
    )
}

export function ImageCardOut({src, alt, pad, fWeight, cardWidth, icon, imgRadius}: ImageCard){
    return(
        <>
        <div style={{
            padding: `${pad}rem`,
            display: 'grid',
            justifyItems:"center",
            }}>
            <Image src={src} alt={alt} width={cardWidth} bRadius={imgRadius}/>
            <div>
                <Paragraph text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quisquam impedit eum quaerat. Itaque quia cumque maiores voluptatum quod amet at repellendus et iure, explicabo minima ad cum quos sit!'} indent={0.75} fS={1.5} weight={fWeight} className="justify"/>
            </div>
            <div>
            {icon}
            </div>
        </div>
        </>
    )
}