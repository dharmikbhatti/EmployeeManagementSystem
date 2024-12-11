import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className="h-screen w-screen p-10">
        <Header data={data} />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
};

export default AdminDashboard;
