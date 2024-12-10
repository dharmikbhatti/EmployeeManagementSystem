import Header from "../other/Header"
import TaskListNumbers from "../other/TaskListnumbers"
import TaskList from "../TaskList/TaskList" 


const EmployeeDashboard = ({data}) => {
  return (
    <>
        <div className="h-screen w-sreen p-10">
            <Header data={data}/>
            <TaskListNumbers data={data} />
            <TaskList data={data}/>
        </div>
    </>
  )
}

export default EmployeeDashboard