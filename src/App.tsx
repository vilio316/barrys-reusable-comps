import { styleObject } from './components/Button'
import Button from './components/Button'
import { Paragraph } from './components/Paragraphs'
import barryFace from './assets/WIN_20240825_15_33_28_Pro.jpg'
import { Image } from './components/ImageCard'
import { PasswordInput, TextInput } from './components/Inputs'

function App() {
  let button_style : styleObject = {
    bR:"1.5",
    bgColor: "red",
    fS:1,
    pad:'0.5',
    color: 'white'
  }

  return(
    <>
      <Button style_obj={
        button_style
      } 
      text='Redrum'
      />
      <Button style_obj={
        {
          color: 'blue',
          fS:2,
          mLeft:'1',
          mRight:'1.5',
          mTop:'2',
          bR:"1.5",
          pad:'0.75',
        }
      } text="Log In"/>
      <input type='text' style={{
      border:"2px solid blue"
      }}/>
      <TextInput readOnly={false} bRadius={0.5} bColor='red' bWidth={0.25} pad={0.25}/>
      <PasswordInput readOnly={false} fSize={1.5} bRadius={1} indent={1.5}/>
      <Paragraph text='Scorn' className='first_letter'/>
      <div style={{
        width:"75vw"
      }}>
      <Image alt='A shot of my pretty face' src={barryFace} bRadius={1.5}/>
      </div>
    </>
  )
}
export default App
