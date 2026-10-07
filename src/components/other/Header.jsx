import React from 'react'

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return (
        <div className="flex items-end justify-between mb-8">

            <div>
                <p className="text-sm font-medium text-blue-600">
                    Hello
                </p>

                <h1 className="text-3xl font-extrabold text-[#0f172a]">
                    {props.data?.firstName || 'User'} 👋
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Employee Management System
                </p>
            </div>

            <button
                onClick={logOutUser}
                className="
                    bg-red-500
                    text-white
                    text-sm
                    font-bold
                    px-5
                    py-2.5
                    border-2
                    border-red-500
                    hover:bg-red-600
                    hover:shadow-[3px_3px_0px_#fecaca]
                    transition-all
                "
            >
                Log Out
            </button>

        </div>
    )
}

export default Header