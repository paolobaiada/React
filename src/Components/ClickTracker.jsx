import { useState } from "react"

export default function ClickTracker(){
  const [track,setTrack] = useState()
    function tracker(event){
        setTrack((event.target.value))
    }
    return (
        <>
        <h1>{track}</h1>
        <button onMouseOver={tracker} value={'one'}>one</button>
        <button onMouseOver={tracker} value={'two'}>two</button>
        <button onMouseOver={tracker} value={'three'}>three</button>
        </>
    )
}