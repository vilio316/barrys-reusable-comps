interface NavbarProps extends React.ComponentPropsWithoutRef<'div'>{
    logoWidth?: number,
    logoSrc?: string,
    action_text?: string,
}

export function Navbar_TwoCols({className, logoWidth, logoSrc, children }:NavbarProps ){
    return(
        <>
        <div className={className} style={{
            gridTemplateColumns:`${logoWidth}% auto`

        }}>
            <div>
                <img src={logoSrc} alt="Header Logo"/>
            </div>
            <div style={{
                justifyContent:"end"
            }} className="grid four_cols">
                {children}
            </div>
        </div>
        </>
    )
}

export function Navbar_ThreeCols({ action_text,className, logoWidth, logoSrc, children }:NavbarProps){
    return(
        <>
        <div className={className} style={{
            gridTemplateColumns:`${logoWidth}% auto auto`

        }}>
            <div>
                <img src={logoSrc} alt="Header Logo"/>
            </div>
            <div>
                {children}
            </div>
            <div>
                <button>{action_text}</button>
            </div>
        </div>
        </>
    )

}