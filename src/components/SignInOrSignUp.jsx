import React, { useState } from 'react';

function SignInOrSignUp() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div>
            {isSignIn ? <SignInForm /> : <LoginForm />}
            <button onClick={toggleForm}>
                {isSignIn ? 'Switch to Login' : 'Switch to Sign In'}
            </button>
        </div>
    );
}

function SignInForm() {
    return (
        <form>
            <h2>Sign In</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
    );
}

function LoginForm() {
    return (
        <form>
            <h2>Login</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
}

export default SignInOrSignUp;