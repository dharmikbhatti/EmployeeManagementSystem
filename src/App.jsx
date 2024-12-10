import { useContext, useEffect, useState } from "react"
import Login from "./components/auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      console.log(userData)
      setUser(userData.role)
      setLoggedInUserData(userData)
    }
  }, []) // Add dependency array to prevent infinite re-renders

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      const adminData = { role: 'admin' }
      setUser('admin')
      setLoggedInUserData(adminData)
      localStorage.setItem('loggedInUser', JSON.stringify(adminData))
    } else if (authData) {
      const employee = authData.employee.find(
        (e) => email === e.email && password === e.password
      )
      if (employee) {
        const employeeData = { role: 'employee', data: employee }
        setUser('employee')
        setLoggedInUserData(employeeData)
        localStorage.setItem('loggedInUser', JSON.stringify(employeeData))
      } else {
        alert("Invalid credentials!")
      }
    } else {
      alert("No data found!")
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user === 'employee' ? (
        <EmployeeDashboard data={loggedInUserData?.data} />
      ) : null}
    </>
  )
}

export default App