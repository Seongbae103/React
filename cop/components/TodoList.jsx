import 'cop/styles/TodoList.css'
import { Todo } from 'cop'
import { useSelector } from 'react-redux'


const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    return (<>
    <ul>
        {todos.map( todo => (
            <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))} 
    </ul>
    </>)
}
export default TodoList