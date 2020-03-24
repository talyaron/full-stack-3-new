import React from 'react';
import './Login';

//controls
import { sendLogin,sendRegister } from '../../../controls/sendToDB';

export default function () {
    return (
        <div className='page'>
            <form className="pure-form" onSubmit={sendRegister}>
                <input name='email' type="email" placeholder="email" required />
                <input name='username' type="text" placeholder="user name" required />
                <input name='password' type="password" placeholder="Password" required />
                <button type="submit" className="pure-button pure-button-primary">Register</button>
            </form>
            <form className="pure-form" onSubmit={sendLogin}>
                <input name='username' type="text" placeholder="user name" required />
                <input name='password' type="password" placeholder="Password" required />
                <button type="submit" className="pure-button pure-button-primary">Login</button>
            </form>
        </div>
    )
}

