import { irisapi } from "blog/api"
const Iris = ()=> {
    const onChangePw = e => {
        e.preventDefault()
        const {value, PetalWidthCm} = e.pw
        setInputs({...inputs, [PetalWidthCm]: value})}
    const onChangePl = e => {
        e.preventDefault()
        const {value, PetalLengthCm} = e.pl
        setInputs({...inputs, [PetalLengthCm]: value})}
    const onChangeSw = e => {
        e.preventDefault()
        const {value, SepalWidthCm} = e.sw
        setInputs({...inputs, [PetalLengthCm]: value})}
    const onChangeSl = e => {
        e.preventDefault()
        const {value, SepalLengthCm} = e.sl
        setInputs({...inputs, [SepalLengthCm]: value})

    }
    const onClick = e =>{
        e.preventDefault()
        const request = {Species}
        irisapi(request)
    }
    return (
    <>
    <div> 꽃잎 폭 : <input type="text" name="PetalWidthCm" onChange={onChangePw} /></div>
    <div> 꽃잎 길이 : <input type="text" name="PetalLengthCm" onChange={onChangePl} /></div>
    <div> 꽃받침 폭 : <input type="text" name="SepalWidthCm" onChange={onChangeSw} /></div>
    <div> 꽃받침 길이 : <input type="text" name="SepalLengthCm" onChange={onChangeSl} /></div>
    <button onClick={onClick}> 실행 </button>
    </>
    )
}
export default Iris

