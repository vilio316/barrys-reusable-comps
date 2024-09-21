import { Paragraph } from "./Paragraphs"

interface ImgStyle extends React.ComponentPropsWithoutRef<'img'>{
    bRadius?: number,
    width: number,
    height?: number,
    pad?: number, 
}

type ImageCard = {
    bRadius?: number,
    pad?: number,
    cardHeight?: number,
    cardWidth: number,
    fWeight?: 'bold'|'100'|'200'|'300'|'400',
    src: string,
    alt: string,
    icon?: any,
    imgRadius?: number
}

export function Image({width, className, bRadius, height, pad, alt, src,  } : ImgStyle){
    let img_width = width

    let default_style={
        width : `${img_width}%`,
        borderRadius:'0.5rem',
        padding: '0.5rem'
    }

    let new_style_obj = {...default_style, 
                        padding: `${pad}rem`,
                        borderRadius : `${bRadius}rem`,
                        height:`${height}%`
    }

    return(
        <>
            <img style={new_style_obj} alt={alt} src={src} className={className} />
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