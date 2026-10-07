import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    // const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        // Check all fields
        if (
            !taskTitle ||
            !taskDescription ||
            !taskDate ||
            !asignTo ||
            !category
        ) {
            alert('Please fill all the fields!')
            return
        }

        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const updatedData = userData.map((elem) => {

            if (asignTo === elem.firstName) {
                return {
                    ...elem,

                    tasks: [
                        ...elem.tasks,
                        task
                    ],

                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                }
            }

            return elem
        })

        setUserData(updatedData)

        // Save updated employees
        localStorage.setItem(
            'employees',
            JSON.stringify(updatedData)
        )

        // Success alert
        alert(`Task successfully assigned to ${asignTo}!`)

        // Clear form
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div
            className="
                mt-7
                bg-white
                border-2
                border-blue-200
                p-8
                shadow-[6px_6px_0px_#dbeafe]
            "
        >

            {/* Heading */}

            <div className="mb-7">

                <div className="flex items-center gap-4">

                    <div className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        bg-blue-50
                        border-2
                        border-blue-200
                        text-[#2563eb]
                        text-3xl
                        font-light
                    ">
                        +
                    </div>

                    <div>

                        <h2 className="
                            text-3xl
                            font-extrabold
                            tracking-tight
                            text-[#0f172a]
                        ">
                            Create <span className="text-[#2563eb]">Task</span>
                        </h2>

                        <p className="
                            text-sm
                            text-slate-500
                            mt-1
                        ">
                            Add a new task and assign it to an employee.
                        </p>

                    </div>

                </div>

            </div>


            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                "
            >

                {/* LEFT SIDE */}

                <div className="space-y-5">

                    {/* Task Title */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-bold
                            text-[#0f172a]
                            mb-2
                        ">
                            Task Title
                        </label>

                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type="text"
                            placeholder="Make a UI design"
                            className="
                                w-full
                                h-14
                                px-4
                                border-2
                                border-blue-100
                                bg-white
                                outline-none
                                text-sm
                                font-medium
                                text-[#0f172a]
                                placeholder:text-slate-400
                                focus:border-[#2563eb]
                                focus:bg-blue-50/20
                                transition-all
                            "
                        />

                    </div>


                    {/* Date */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-bold
                            text-[#0f172a]
                            mb-2
                        ">
                            Date
                        </label>

                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            type="date"
                            className="
                                w-full
                                h-14
                                px-4
                                border-2
                                border-blue-100
                                bg-white
                                outline-none
                                text-sm
                                font-medium
                                text-[#0f172a]
                                focus:border-[#2563eb]
                                transition-all
                            "
                        />

                    </div>


                    {/* Assign To */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-bold
                            text-[#0f172a]
                            mb-2
                        ">
                            Assign To
                        </label>

                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            type="text"
                            placeholder="Employee name"
                            className="
                                w-full
                                h-14
                                px-4
                                border-2
                                border-blue-100
                                bg-white
                                outline-none
                                text-sm
                                font-medium
                                text-[#0f172a]
                                placeholder:text-slate-400
                                focus:border-[#2563eb]
                                focus:bg-blue-50/20
                                transition-all
                            "
                        />

                    </div>


                    {/* Category */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-bold
                            text-[#0f172a]
                            mb-2
                        ">
                            Category
                        </label>

                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type="text"
                            placeholder="Design, development, etc."
                            className="
                                w-full
                                h-14
                                px-4
                                border-2
                                border-blue-100
                                bg-white
                                outline-none
                                text-sm
                                font-medium
                                text-[#0f172a]
                                placeholder:text-slate-400
                                focus:border-[#2563eb]
                                focus:bg-blue-50/20
                                transition-all
                            "
                        />

                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="flex flex-col">

                    <label className="
                        block
                        text-sm
                        font-bold
                        text-[#0f172a]
                        mb-2
                    ">
                        Description
                    </label>

                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        placeholder="Enter description of the task..."
                        className="
                            w-full
                            h-[250px]
                            resize-none
                            px-4
                            py-4
                            border-2
                            border-blue-100
                            bg-white
                            outline-none
                            text-sm
                            font-medium
                            text-[#0f172a]
                            placeholder:text-slate-400
                            focus:border-[#2563eb]
                            focus:bg-blue-50/20
                            transition-all
                        "
                    />

                    <div className="
                        text-right
                        text-xs
                        text-slate-400
                        mt-2
                    ">
                        {taskDescription.length}/500
                    </div>


                    <button
                        type="submit"
                        className="
                            mt-auto
                            h-14
                            w-full
                            bg-[#2563eb]
                            border-2
                            border-[#2563eb]
                            text-white
                            text-base
                            font-bold
                            hover:bg-[#1d4ed8]
                            hover:shadow-[4px_4px_0px_#bfdbfe]
                            transition-all
                        "
                    >
                        Create Task
                        <span className="ml-3 text-xl">
                            →
                        </span>
                    </button>

                </div>

            </form>

        </div>
    )
}

export default CreateTask