import { useState } from 'react'
import { Image } from './ImageCard';

type CarouselProps ={
    array: string[]
} 

export function Carousel({array} : CarouselProps){
let [showing, changeShowing] = useState(0);
const sources_array = array;

const handle_move = (val : number) => {
    changeShowing(showing += val)
    if(showing > sources_array.length - 1 ){
        changeShowing(0)
    }
}

const handle_move_back = (val : number) => {
    changeShowing(showing -= val)
    if(showing < 0 ){
        changeShowing(sources_array.length - 1)
    }
}

    return(
        <>
            <div className='carousel_container' style={{
                position:"relative", display: 'grid', placeItems:"center", width:"50%"
            }}>
            <Image src={sources_array[showing]} alt="Blasphemous Screenshots" width={100} bRadius={1.5} className='carousel_img'/>
            <span style={{
                fontWeight: "bold",
                fontSize: '2.5rem',
            }}>{showing + 1} / {sources_array.length}</span>
            <button className="slide_button prev" onClick={()=> handle_move_back(1)
             }> {'<'} </button>
            <button className="slide_button next" onClick={()=> handle_move(1)
             }>{'>'}</button>
         </div>
            
        </>
    )
}