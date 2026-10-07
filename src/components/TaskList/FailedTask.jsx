import React from 'react'

const FailedTask = ({ data }) => {

    return (
        <div
            className="
                flex-shrink-0
                w-[320px]
                min-h-[300px]
                p-6
                bg-[#fff5f5]
                border-2
                border-red-200
                shadow-[5px_5px_0px_#fee2e2]
                hover:-translate-y-1
                hover:border-red-400
                transition-all
            "
        >

            {/* Top */}

            <div className="flex justify-between items-center">

                <h3
                    className="
                        bg-red-500
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


            {/* Title */}

            <h2 className="
                mt-7
                text-2xl
                font-extrabold
                text-[#0f172a]
                leading-tight
            ">
                {data.taskTitle}
            </h2>


            {/* Description */}

            <p className="
                text-sm
                mt-3
                text-slate-600
                leading-6
                line-clamp-4
            ">
                {data.taskDescription}
            </p>


            {/* Status */}

            <div className="mt-8">

                <button
                    className="
                        w-full
                        h-10
                        bg-red-500
                        text-white
                        font-bold
                        text-xs
                        cursor-default
                    "
                >
                    ✕ Failed
                </button>

            </div>

        </div>
    )
}

export default FailedTask