import {useSelector, useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'
import {Link } from 'react-router-dom'

export function TaskList(){
    const tasks = useSelector(state => state.tasks)
    console.log(tasks)
    const dispatch= useDispatch()
    const handleDelete = (id) => {
    dispatch(deleteTask(id))
     
    }

    

    return (
        <div>
            <header>
                <h1>Task {tasks.length}</h1>
                <Link to={'/create-task'}>
                 Create Task
                </Link>
            </header>

            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={ () => handleDelete(task.id)} >Eliminar</button>
                </div>
            ))}

        </div>

    )
}
