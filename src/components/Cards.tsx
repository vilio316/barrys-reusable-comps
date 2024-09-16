type SideCardProps = {
    fS?: number,
    bRadius?: number, 
    padding?: number,
    imgWidth?: number,
    mTopBott?: number,
    mLeftRight?: number,
    text: string,
    imgSrc?: string
}

export default function SideCard({fS, bRadius, padding, imgWidth, text, imgSrc} : SideCardProps){

    return(
        <>
        <div style={{
            borderRadius: `${bRadius}rem`,
            padding: `${padding}rem`,
            display: 'grid',
            gridTemplateColumns: `${imgWidth}% auto`
        }}>
            <div>
            <img src={imgSrc} alt="Card Shot" style={{width:"90%"}}/>
            </div>
            <p style={{fontSize: `${fS}rem`}}>{text}</p>

        </div>
        </>
    )
}