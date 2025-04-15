import { useCatImage } from "../Hooks/useCatImage"
export function Otro (){
    const {imageUrl} = useCatImage({fact})
    return(
        <>
        {imageUrl && <img src= {imageUrl}/>}
        </>
    )
}