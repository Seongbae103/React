import { strokeapi } from "blog/api"

const Stroke = () => {
    const onClick = e =>{
        e.preventDefault()
        strokeapi()
    }
    return (
    <>
    <button onClick={onClick}> 실행 </button>
    </>
    )}
export default Stroke