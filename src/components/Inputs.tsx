import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"

type Input_Text = {
    bRadius?: number,
    bWidth?: number,
    bColor?: string,
    width?: number,
    placeholder?: string,
    readOnly: boolean,
    pad?: number
}

export function TextInput(props : Input_Text){
    let default_style = {
        outline: 'none',
        borderStyle: 'solid',
    }
    let updated_style_object = {
        ...default_style, borderRadius:`${props.bRadius}rem`, borderColor: `${props.bColor}`, borderWidth: `${props.bWidth}rem`, padding: `${props.pad}rem`
    }
    console.log(
        updated_style_object
    )
    return(
        <input type="text" readOnly={props.readOnly} placeholder={props.placeholder} style={updated_style_object}/>
    )

}

export function PasswordInput(){
    let [visible_state, changeVisibleState]= useState(false)

    return(
        <>
        <div>
        <input type={visible_state? 'text' : 'password'} placeholder="password"/>

        <button onClick={()=> changeVisibleState(!visible_state)}>
            {visible_state ? <FaEye/> : <FaEyeSlash/>}
        </button>

        </div>
        </>
    )
}