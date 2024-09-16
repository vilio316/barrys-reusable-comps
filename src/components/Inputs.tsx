import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"

type Input_Text = {
    bRadius?: number,
    bWidth?: number,
    bColor?: string,
    width?: number,
    placeholder?: string,
    readOnly: boolean,
    pad?: number,
    fSize?: number,
    indent?: number,
    className?: string
}

export function TextInput(props : Input_Text){
    let default_style = {
        outline: 'none',
        borderStyle: 'solid',
    }
    let updated_style_object = {
        ...default_style, borderRadius:`${props.bRadius}rem`, borderColor: `${props.bColor}`, borderWidth: `${props.bWidth}rem`, padding: `${props.pad}rem`
    }

    return(
        <>
        <label htmlFor="input">Input</label>
        <input type="text" id='input' className={props.className} readOnly={props.readOnly} placeholder={props.placeholder} style={updated_style_object}/>
        </>
    )

}

export function PasswordInput(props : Input_Text){
    let [visible_state, changeVisibleState]= useState(false)
    let default_style = {
        outline: 'none',
        borderStyle: 'solid',
    }
    let updated_style_object = {
        ...default_style, borderRadius:`${props.bRadius}rem`, borderColor: `${props.bColor}`, borderWidth: `${props.bWidth}rem`, padding: `${props.pad}rem`, fontSize:`${props?.fSize}rem`, textIndent: `${props.indent}rem`,
    }
    return(
        <>
        <div>
        <label htmlFor="password">Password</label>
        <div style={{
            display: "grid",
            alignItems:"center",
            alignContent:"center",
            gridTemplateColumns:"70% 5%"
        }}>
        <input type={visible_state? 'text' : 'password'} id="password" placeholder="Password" style={updated_style_object} className={props.className}  readOnly={props.readOnly}/>
        <button onClick={()=> changeVisibleState(!visible_state)} style={{
            outline: 'none',
            border: '0',
            backgroundColor: 'inherit'
        }}>
            {visible_state ? <FaEye fill="blue" fillOpacity={0.65} size={`${props.fSize}rem`} title="Hide Password"/> : <FaEyeSlash fill="blue" fillOpacity={0.65} size={`${props.fSize}em`} title="Show Password"/>}
        </button>
        </div>
        </div>
        </>
    )
}