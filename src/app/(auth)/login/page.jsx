
import Link from "next/link";
const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                <h1 className="text-4xl font-bold text-center text-slate-800">
                    Welcome Back
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Login to continue
                </p>

                <form className="space-y-5">

                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">

                        <label className="flex items-center gap-2 text-gray-600">
                            <input
                                type="checkbox"
                                className="w-4 h-4 accent-blue-600"
                            />
                            Remember me
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-8 text-gray-600">
                    Don&apos;t have an account?
                    <Link
                        href="/register"
                        className="ml-2 text-blue-600 font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default LoginPage;