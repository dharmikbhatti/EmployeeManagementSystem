import AllTask from "../other/AllTask"; 
import Header from "../other/Header";

const AdminDashboard = ({data}) => {
  console.log(data)
  return (
    <>
      <div className="h-screen w-screen p-10">
        <Header data={data}/>
        <AllTask />
      </div>
    </>
  );
};

export default AdminDashboard;
