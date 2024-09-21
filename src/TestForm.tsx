import { Div } from "./components/Div"
import { PasswordInput, TextInput } from "./components/Inputs"
import { Paragraph } from "./components/Paragraphs"
import Button from "./components/Button"
export function TestForm(){
    return(
        <>
        <Div className='grid center'>
            <Div>
                <Paragraph text='Howdy!' color="blue" fS={2.5} weight="bold"/>
                <TextInput label="Input" readOnly={false} fS={1.5}/>
                <PasswordInput readOnly={false} label="Password" fS={1.5} width={75}/>
                <Button text='Submit'/>
            </Div>
        </Div>
        </>
    )
    }

