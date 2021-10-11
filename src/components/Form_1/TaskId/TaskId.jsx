import s from './TaskId.module.css';

const TaskId = (props) => {
    return <div className={s}>
        <div class="alert alert-primary" role="alert">
            Task ID : {props.task_id}
        </div>
    </div>
}

export default TaskId;