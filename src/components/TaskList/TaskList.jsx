import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
    return (
        <>
            <div id="tasklist" className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg text-black">Your Tasks</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.tasks?.map((e, idx) => {
                        if (e.active) {
                            return <AcceptTask key={idx} task={e} data={data} />
                        }
                        if (e.isNew) {
                            return <NewTask key={idx} task={e} data={data}/>
                        }
                        if (e.completed) {
                            return <CompleteTask key={idx} task={e} data={data}/>
                        }
                        if (e.failed) {
                            return <FailedTask key={idx} task={e} data={data}/>
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    );
}

export default TaskList;