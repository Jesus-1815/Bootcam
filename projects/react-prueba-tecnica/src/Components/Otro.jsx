import { useCatImage } from "../Hooks/useCatImage"
export function Otro (){
    const {imageUrl} = useCatImage({fact: 'cat'})
    console.log(imageUrl)
    return(
        <>
        {imageUrl && <img src= {imageUrl}/>}
        </>
    )
}