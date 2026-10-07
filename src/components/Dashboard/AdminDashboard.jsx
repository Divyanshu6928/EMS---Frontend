import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div
            className="min-h-screen w-full bg-[#f8fbff] text-[#0f172a] px-6 py-5"
            style={{
                backgroundImage: `
                    linear-gradient(#dbeafe 1px, transparent 1px),
                    linear-gradient(90deg, #dbeafe 1px, transparent 1px)
                `,
                backgroundSize: '18px 18px'
            }}
        >

            <Header changeUser={props.changeUser} />

            <CreateTask />

            <AllTask />

        </div>
    )
}

export default AdminDashboard