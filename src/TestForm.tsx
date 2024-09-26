import { Div } from "./components/Div"
import { PasswordInput, TextInput } from "./components/Inputs"
import { Paragraph } from "./components/Paragraphs"
import Button from "./components/Button"
export function TestForm(){
    return(
        <>
        <Div className='grid center'>
            <Div className="grid width_80">
                <Paragraph text='Howdy!' color="blue" fS={2.5} weight="bold"/>
                <TextInput label="Input" readOnly={false} fS={1.5}/>
                <PasswordInput readOnly={false} label="Password" fS={1.5} width={90}/>
                <Button text='Submit' className="width_80" bRadius={2.5} fS={2.5} color="white" mTopBott={1.25} mLeftRight={0} bgColor="purple"/>
            </Div>
        </Div>
        </>
    )
    }