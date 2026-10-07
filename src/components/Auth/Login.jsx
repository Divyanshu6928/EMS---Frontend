import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="min-h-screen w-full bg-[#f8fbff] flex items-center justify-center p-6">

            <div
                className="absolute inset-0 opacity-70"
                style={{
                    backgroundImage: `
                        linear-gradient(#dbeafe 1px, transparent 1px),
                        linear-gradient(90deg, #dbeafe 1px, transparent 1px)
                    `,
                    backgroundSize: '18px 18px'
                }}
            />

            <div className="relative w-full max-w-md">

                <div className="bg-white border-2 border-blue-100 shadow-[7px_7px_0px_#dbeafe] p-8">

                    {/* Logo / Heading */}
                    <div className="mb-8">
                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                            EMS
                        </p>

                        <h1 className="text-4xl font-extrabold text-[#0f172a] mt-2">
                            Welcome Back
                        </h1>

                        <p className="text-slate-500 text-sm mt-2">
                            Employee Management System
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={submitHandler}>

                        <div className="mb-5">
                            <label className="block text-sm font-bold text-[#0f172a] mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    h-12
                                    px-4
                                    border-2
                                    text-black
                                    border-slate-200
                                    outline-none
                                    focus:border-blue-500
                                    text-sm
                                "
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-[#0f172a] mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="
                                    w-full
                                    h-12
                                    px-4
                                    border-2
                                    text-black
                                    border-slate-200
                                    outline-none
                                    focus:border-blue-500
                                    text-sm
                                "
                            />
                        </div>

                        <button
                            type="submit"
                            className="
                                w-full
                                h-12
                                bg-[#2563eb]
                                text-white
                                font-bold
                                border-2
                                border-[#2563eb]
                                hover:bg-[#1d4ed8]
                                hover:shadow-[4px_4px_0px_#bfdbfe]
                                transition-all
                            "
                        >
                            Login →
                        </button>

                    </form>

                    {/* Default Credentials */}
                    <div className="mt-7 p-4 bg-blue-50 border border-blue-100">

                        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                            Default Credentials
                        </p>

                        <div className="text-sm text-slate-600 space-y-2">

                            <p>
                                <span className="font-semibold text-[#0f172a]">
                                    Admin:
                                </span>{' '}
                                <span className='text-black'>
                                    admin@example.com / 123
                                </span>
                            </p>

                            <p>
                                <span className="font-semibold text-[#0f172a]">
                                    Employee:
                                </span>{' '}
                                <span className='text-black'>
                                    e@e.com / 123
                                </span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login