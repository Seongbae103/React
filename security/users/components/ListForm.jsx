export default function ListForm({list}){
    return (<>
    <h3>User List</h3>
    <table className='user-list'>
        <tr ><th>번호</th><th>유저명</th><th>이메일</th><th>phone</th><th>birth</th><th>address</th><th>job</th><th>user_interests</th></tr>
        {list && list.map(({id, user_name, user_email, phone, birth, address, job, user_interests})=>(
            <tr key={id}>
                <td>{id}</td>
                <td>{user_name}</td>
                <td>{user_email}</td>
                <td>{phone}</td>
                <td>{birth}</td>
                <td>{address}</td>
                <td>{job}</td>
                <td>{user_interests}</td>
            </tr>
        ))}
    </table>
    </>
)}
