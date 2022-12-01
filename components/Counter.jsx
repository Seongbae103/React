import { useState } from "react"

const Counter = () =>{
    const [count, setCount] = useState(10)
    return (<>
    <div> 클릭횟수 : {count}</div>
    <button onClick={()=>{setCount(count+1)}}>
        클릭버튼
    </button>
    <button onClick={()=>{setCount(count-1)}}>
        클릭버튼
    </button>
    </>)
}

export default Counter