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
                display: 'grid', placeItems:"center", width:"500px"
            }}>
            <Image src={sources_array[showing]} alt="Blasphemous Screenshots" width={90} bRadius={1.5}/>
            </div>
            <p>{showing + 1} / {sources_array.length}</p>
            <button onClick={()=> handle_move_back(1)
             }>Prev. Slide!</button>
            <button onClick={()=> handle_move(1)
             }>Next Slide!</button>
         
            
        </>
    )
}