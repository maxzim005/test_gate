import s from "./Form_1.module.css"
import React, { useEffect, useState } from "react"
import axios from "axios"
import TaskId from "./TaskId/TaskId"
import Query from "./TaskId/Query"
import Tag from "./TaskId/Tag"
import Target from "./TaskId/Target"

export default function Form1() {

  const [taskId, setTaskId] = useState("")

  const Send = async () => {
    const res = await axios.post(`https://gate-stub-for-frontend.herokuapp.com/addTaskByTag`, {
      tag: "ok",
      target: "telegram",
      method: "string",
      data: {},
    })

    setTaskId(res.data.task_id)
  }
    // попробовать переделать под useEffect самостоятельно
  return (
    <div>
      <div className="s.content">
        <span>Query</span><Query /> <br />
        <span>Tag</span><Tag /> <br />
        <span>Target</span><Target /> <br />
        <button type="button" class="btn btn-primary" onClick={() => Send()}> Send </button>
      </div>
      <br />
      {taskId !== '' ? 
      <div> 
        <TaskId task_id={taskId} />
      </div> : null}
    </div>
  )
}