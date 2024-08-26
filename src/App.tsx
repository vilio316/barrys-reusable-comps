import { styleObject } from './components/Button'
import Button from './components/Button'

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
          width:"5",
          color: 'blue',
          fS:2,
          mLeft:'1',
          mRight:'1.5',
          mTop:'2',
          bR:"1.5",
          pad:'0.5',
        }
      } text="Log In"/>
    </>
  )
}

export default App
