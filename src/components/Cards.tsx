import { Image } from "./ImageCard"

interface SideCardProps extends React.ComponentPropsWithoutRef<'div'>{
    fS?: number,
    bRadius?: number, 
    bRadiusImg?: number,
    padding?: number,
    imgWidth?: number,
    mTopBott?: number,
    mLeftRight?: number,
    imgSrc: string,
    bgColor?: string,

}

export default function SideCard({bRadius, padding, imgWidth, imgSrc, children, bgColor, bRadiusImg} : SideCardProps){
    console.log(children)    
    return(
        <>
        <div style={{
            borderRadius: `${bRadius}rem`,
            padding: `${padding}rem`,
            display: 'grid',
            gridTemplateColumns: `${imgWidth}% auto`,
            backgroundColor: bgColor,
        }}>
            <div style={{
                display: 'grid',
                placeItems: 'center'
            }}>
                <Image alt="Null" src={imgSrc} bRadius={bRadiusImg} width={75}/>
            </div>
            <div>
                {children}
            </div>

        </div>
        </>
    )
}