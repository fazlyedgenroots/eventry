'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

const SignInOut = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logout = () => {
        setAuth(null);
        router.push('/login')
    }

    return (
        <div>
            {
                auth ? (
                    <>
                        <span >Hello, {auth?.name}</span>
                        <span className="mx-2">|</span>
                        <a className="cursor-pointer text-red-500" onClick={logout}>Logout</a>
                    </>
                ) : (<Link href="/login">Login</Link>)
            }
        </div>
    )
}

export default SignInOut