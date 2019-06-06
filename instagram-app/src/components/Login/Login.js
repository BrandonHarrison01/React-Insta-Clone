import React from 'react';

class Login extends React.Components {
    state={
        username:'',
        password:''
    }



    return(
        <form>
            <input placeHolder='username' />
            <input placeHolder='password' />
            <button>Login</button>
        </form>
    )
}

export default Login;