import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div
            className="
                mt-7
                bg-white
                border-2
                border-blue-200
                p-6
                shadow-[6px_6px_0px_#dbeafe]
            "
        >

            {/* Header */}

            <div className="
                flex
                items-center
                justify-between
                mb-6
            ">

                <div>

                    <h2 className="
                        text-2xl
                        font-extrabold
                        text-[#0f172a]
                    ">
                        Employee <span className="text-[#2563eb]">Tasks</span>
                    </h2>

                    <p className="
                        text-sm
                        text-slate-500
                        mt-1
                    ">
                        Overview of employee task progress.
                    </p>

                </div>


                <div className="
                    px-4
                    py-2
                    bg-blue-50
                    border
                    border-blue-100
                    text-sm
                    font-semibold
                    text-[#2563eb]"
                >
                    {userData.length} Employees
                </div>

            </div>


            {/* Table Header */}

            <div className="
                bg-[#2563eb]
                text-white
                py-4
                px-5
                flex
                justify-between
                items-center
                mb-3
            ">

                <h2 className="text-sm font-bold w-1/5">
                    Employee Name
                </h2>

                <h3 className="text-sm font-bold w-1/5 text-center">
                    New Task
                </h3>

                <h5 className="text-sm font-bold w-1/5 text-center">
                    Active Task
                </h5>

                <h5 className="text-sm font-bold w-1/5 text-center">
                    Completed
                </h5>

                <h5 className="text-sm font-bold w-1/5 text-center">
                    Failed
                </h5>

            </div>


            {/* Employee Rows */}

            <div className="space-y-3">

                {userData.map(function (elem, idx) {

                    return (

                        <div
                            key={idx}
                            className="
                                border
                                border-blue-100
                                bg-white
                                py-4
                                px-5
                                flex
                                justify-between
                                items-center
                                hover:border-blue-300
                                hover:bg-blue-50/40
                                transition-all
                            "
                        >

                            {/* Employee */}

                            <h2 className="
                                text-sm
                                font-bold
                                text-[#0f172a]
                                w-1/5
                            ">
                                {elem.firstName}
                            </h2>


                            {/* New Task */}

                            <div className="w-1/5 flex justify-center">

                                <span className="
                                    min-w-10
                                    h-8
                                    px-3
                                    flex
                                    items-center
                                    justify-center
                                    bg-blue-50
                                    border
                                    border-blue-200
                                    text-[#2563eb]
                                    font-bold
                                    text-sm
                                ">
                                    {elem.taskCounts?.newTask ?? 0}
                                </span>

                            </div>


                            {/* Active */}

                            <div className="w-1/5 flex justify-center">

                                <span className="
                                    min-w-10
                                    h-8
                                    px-3
                                    flex
                                    items-center
                                    justify-center
                                    bg-amber-50
                                    border
                                    border-amber-200
                                    text-amber-600
                                    font-bold
                                    text-sm
                                ">
                                    {elem.taskCounts?.active ?? 0}
                                </span>

                            </div>


                            {/* Completed */}

                            <div className="w-1/5 flex justify-center">

                                <span className="
                                    min-w-10
                                    h-8
                                    px-3
                                    flex
                                    items-center
                                    justify-center
                                    bg-emerald-50
                                    border
                                    border-emerald-200
                                    text-emerald-600
                                    font-bold
                                    text-sm
                                ">
                                    {elem.taskCounts?.completed ?? 0}
                                </span>

                            </div>


                            {/* Failed */}

                            <div className="w-1/5 flex justify-center">

                                <span className="
                                    min-w-10
                                    h-8
                                    px-3
                                    flex
                                    items-center
                                    justify-center
                                    bg-red-50
                                    border
                                    border-red-200
                                    text-red-600
                                    font-bold
                                    text-sm
                                ">
                                    {elem.taskCounts?.failed ?? 0}
                                </span>

                            </div>

                        </div>

                    )
                })}

            </div>

        </div>
    )
}

export default AllTask