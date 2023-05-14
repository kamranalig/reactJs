import React from 'react';

const Login = () => {
    return (
        <div>
            <h4>Login</h4>
            <form>
                <input placeholder={'User Name'}/>
                <input placeholder={'Password'} />
                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;