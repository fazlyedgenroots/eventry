import { handleSubmitLogin } from "../../actions";

export const LoginForm = () => {
    return (
        <form className="login-form" action={handleSubmitLogin}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>

            <button
                type="submit"
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Login
            </button>
        </form>
    );
}