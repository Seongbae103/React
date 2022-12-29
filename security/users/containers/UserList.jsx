
import { useEffect, useState } from 'react'
import axios from 'axios'
import ListForm from '../components/ListForm'

export default function UserList(){
    const [list, setList] = useState([])
    
    useEffect(()=>{
        axios
        .get('http://localhost:8000/security/user-list')
        .then(res => {setList(res.data)})
        .catch(err => {console.log(err)})
    }, [])

    return <>
        <ListForm list={list}/>
    </>
}
