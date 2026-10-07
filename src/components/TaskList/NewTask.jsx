import React from 'react'

const NewTask = ({ data, userData, setUserData }) => {

    const acceptTask = () => {

        const updatedData = userData.map((employee) => {

            if (employee.id === userData.find(emp =>
                emp.tasks.includes(data)
            )?.id) {

                return {
                    ...employee,

                    tasks: employee.tasks.map((task) => {

                        if (task === data) {
                            return {
                                ...task,
                                active: true,
                                newTask: false
                            }
                        }

                        return task
                    }),

                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask - 1,
                        active: employee.taskCounts.active + 1
                    }
                }
            }

            return employee
        })

        setUserData(updatedData)

        localStorage.setItem(
            'employees',
            JSON.stringify(updatedData)
        )

        alert('Task accepted successfully!')
    }

    return (
        <div
            className="
                flex-shrink-0
                w-[320px]
                min-h-[300px]
                p-6
                bg-white
                border-2
                border-blue-200
                shadow-[5px_5px_0px_#dbeafe]
                hover:-translate-y-1
                hover:border-blue-400
                transition-all
            "
        >

            <div className="flex justify-between items-center">

                <h3
                    className="
                        bg-blue-600
                        text-white
                        text-xs
                        font-bold
                        px-3
                        py-1.5
                        uppercase
                        tracking-wide
                    "
                >
                    {data.category}
                </h3>

                <h4 className="text-xs font-semibold text-slate-500">
                    {data.taskDate}
                </h4>

            </div>

            <h2 className="
                mt-7
                text-2xl
                font-extrabold
                text-[#0f172a]
                leading-tight
            ">
                {data.taskTitle}
            </h2>

            <p className="
                text-sm
                mt-3
                text-slate-500
                leading-6
                line-clamp-4
            ">
                {data.taskDescription}
            </p>

            <div className="mt-8">

                <button
                    onClick={acceptTask}
                    className="
                        w-full
                        h-11
                        bg-[#2563eb]
                        text-white
                        text-sm
                        font-bold
                        border-2
                        border-[#2563eb]
                        hover:bg-[#1d4ed8]
                        hover:shadow-[3px_3px_0px_#bfdbfe]
                        transition-all
                    "
                >
                    Accept Task →
                </button>

            </div>

        </div>
    )
}

export default NewTask