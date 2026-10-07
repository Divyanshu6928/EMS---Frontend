import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, userData, setUserData }) => {

    return (
        <div
            id="tasklist"
            className="
                w-full
                mt-8
                flex
                items-stretch
                justify-start
                gap-5
                overflow-x-auto
                flex-nowrap
                py-3
                px-1
            "
        >

            {data.tasks.map((elem, idx) => {

                if (elem.active) {
                    return (
                        <AcceptTask
                            key={idx}
                            data={elem}
                            userData={userData}
                            setUserData={setUserData}
                        />
                    )
                }

                if (elem.newTask) {
                    return (
                        <NewTask
                            key={idx}
                            data={elem}
                            userData={userData}
                            setUserData={setUserData}
                        />
                    )
                }

                if (elem.completed) {
                    return (
                        <CompleteTask
                            key={idx}
                            data={elem}
                        />
                    )
                }

                if (elem.failed) {
                    return (
                        <FailedTask
                            key={idx}
                            data={elem}
                        />
                    )
                }

                return null
            })}

        </div>
    )
}

export default TaskList