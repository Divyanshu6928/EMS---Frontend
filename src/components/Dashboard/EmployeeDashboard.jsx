import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div
            className="min-h-screen w-full bg-[#f8fbff] text-[#0f172a] p-6"
            style={{
                backgroundImage: `
                    linear-gradient(#dbeafe 1px, transparent 1px),
                    linear-gradient(90deg, #dbeafe 1px, transparent 1px)
                `,
                backgroundSize: '18px 18px'
            }}
        >

            <Header
                changeUser={props.changeUser}
                data={props.data}
            />

            <TaskListNumbers data={props.data} />

            <TaskList
                data={props.data}
                userData={userData}
                setUserData={setUserData}
            />

        </div>
    )
}

export default EmployeeDashboard