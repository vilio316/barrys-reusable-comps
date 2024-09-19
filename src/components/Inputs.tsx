import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"

interface Input_Text extends React.ComponentPropsWithoutRef<'input'>{
    bRadius?: number,
    bWidth?: number,
    bColor?: string,
    width?: number,
    placeholder?: string,
    readOnly: boolean,
    pad?: number,
    fS?: number,
    indent?: number,
    label?: string,
    mTopBott?: number,
    mLeftRight?: number,
}

export function TextInput({bRadius, bColor, pad, bWidth, placeholder, readOnly, fS, indent, className, label, id, name, mTopBott, mLeftRight}: Input_Text){
    let default_style = {
        outline: 'none',
        borderStyle: 'solid',
    }
    let updated_style_object = {
        ...default_style, borderRadius:`${bRadius}rem`, borderColor: `${bColor}`, borderWidth: `${bWidth}rem`, padding: `${pad}rem`, fontSize:`${fS}rem`, textIndent: `${indent}rem`, margin: `${mTopBott}rem ${mLeftRight}rem`
    }

    return(
        <>
        <label htmlFor="input">{label}</label>
        <input type="text" id={id} name={name} className={className} readOnly={readOnly} placeholder={placeholder} style={updated_style_object}/>
        </>
    )

}

export function PasswordInput( {bRadius, bColor, pad, bWidth, placeholder, readOnly, fS, indent, className, label, id, name, mLeftRight, mTopBott}: Input_Text){
    let [visible_state, changeVisibleState]= useState(false)
    let default_style = {
        outline: 'none',
        borderStyle: 'solid',
    }
    let updated_style_object = {
        ...default_style, borderRadius:`${bRadius}rem`, borderColor: `${bColor}`, borderWidth: `${bWidth}rem`, padding: `${pad}rem`, fontSize:`${fS}rem`, textIndent: `${indent}rem`, margin: `${mTopBott}rem ${mLeftRight}rem`
    }
    return(
        <>
        <div>
        <label htmlFor="password">{label}</label>
        <div style={{
            display: "grid",
            alignItems:"center",
            alignContent:"center",
            gridTemplateColumns:"70% 5%"
        }}>
        <input type={visible_state? 'text' : 'password'} id={id} name={name} placeholder={placeholder} style={updated_style_object} className={className}  readOnly={readOnly}/>
        <button onClick={()=> changeVisibleState(!visible_state)} style={{
            outline: 'none',
            border: '0',
            backgroundColor: 'inherit'
        }}>
            {visible_state ? <FaEye fill="blue" fillOpacity={0.65} size={`${fS}rem`} title="Hide Password"/> : <FaEyeSlash fill="blue" fillOpacity={0.65} size={`${fS}em`} title="Show Password"/>}
        </button>
        </div>
        </div>
        </>
    )
}