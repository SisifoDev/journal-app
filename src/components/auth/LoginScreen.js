import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();


    const [formValues, handleInputChange] = useForm({
        email: 'manuelperdomo1710@icloud.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(123456, 'Manuel Perdomo'));
    }

    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" value={email} onChange={handleInputChange} />
                <input type="password" placeholder="Password" name="password" className="auth__input" value={password} onChange={handleInputChange} />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"

                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    className="link"
                    to="/auth/register"
                >
                    Create New Account
                </Link>
            </form>
        </>
    )
}
