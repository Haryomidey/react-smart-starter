import { Link } from "react-router-dom";

const ResetPassword = () => {
    return (
        <div className="flex items-center justify-center bg-background px-6 py-10">
            <div className="w-full max-w-md bg-secondary text-secondary-foreground p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-primary">Reset Password</h1>

                <form className="space-y-4">
                    <input 
                        type="password" 
                        placeholder="New Password" 
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="w-full px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-muted transition"
                    >
                        Reset Password
                    </button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                    Remembered your password? <Link to="/login" className="text-primary hover:underline">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default ResetPassword;