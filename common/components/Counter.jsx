import { useState } from "react"

const Counter = () =>{
    const [count, setCount] = useState(10)
    return (<>
            <h3 >클릭횟수 : {count}</h3>
            <div>감소
                <button onClick={()=>{setCount(count-1)}}>-</button>
            </div>
            <div>증가 
                <button onClick={()=>{setCount(count+1)}}>+</button>
            </div>   
    </>)
}

export default Counter