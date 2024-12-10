import Header from "../other/Header"
import TaskListnumbers from "../other/TaskListNumbers"
import TaskList from "../TaskList/TaskList" 


const EmployeeDashboard = ({data}) => {
  return (
    <>
        <div className="h-screen w-screen p-10">
            <Header data={data}/>
            <TaskListnumbers data={data} />
            <TaskList data={data}/>
        </div>
    </>
  )
}

export default EmployeeDashboard