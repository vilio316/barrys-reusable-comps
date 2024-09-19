import Button from './components/Button'
import { Paragraph } from './components/Paragraphs'
import barryFace from './assets/WIN_20240825_15_33_28_Pro.jpg'
import { Image, ImageCardOut} from './components/ImageCard'
import { PasswordInput, TextInput } from './components/Inputs'
import { FaHeart } from 'react-icons/fa6'
import SideCard from './components/Cards'
import { Carousel } from './components/Carousel'
import screen1 from './assets/Screenshot (52).png'
import screen2 from './assets/Screenshot (53).png'
import screen3 from './assets/Screenshot (54).png'
import screen4 from './assets/Screenshot (55).png'
import screen5 from './assets/Screenshot (56).png'

function App() {

  const imgs = [screen1, screen2, screen3, screen4, screen5]

  return(
    <>
    <Carousel array={imgs}/>
     
      <Button
          color='blue'
          fS={2}
          mLeftRight={1}
          mTopBott={2}
          bR={1.5}
          pad= {0.75} text="Log In"/>
      <input type='text' style={{
      border:"2px solid blue"
      }}/>
      <TextInput className="input" readOnly={false} bRadius={0.5} bColor='red' bWidth={0.25} pad={0.25} mTopBott={1.5} mLeftRight={1.75}/>
      <PasswordInput className="input" readOnly={true} fS={1.5} bRadius={1} indent={1.5} mTopBott={1.25}/>
      <Paragraph text='White Dove' indent={0.5} className='first_letter'/>
      <div style={{
        width:"75vw"
      }}>
      <Image alt='A shot of my pretty face' src={barryFace} bRadius={1.5}/>
      </div>
      <ImageCardOut alt='A shot of my pretty face' src={barryFace} cardWidth={0.9} fWeight='bold' pad={0.75} icon={<FaHeart size={`2.5em`} fill='red'/>} imgRadius={1.25} />


      <SideCard imgWidth={50} imgSrc={barryFace} bgColor='purple' bRadiusImg={2.5} bRadius={1.5}>
        <Paragraph text='Scarface' color='blue' className='first_letter'/>
        <Paragraph text='Skyfall'/>
        <TextInput readOnly label='Email'/>
        </SideCard>
    </>
  )
}
export default App
