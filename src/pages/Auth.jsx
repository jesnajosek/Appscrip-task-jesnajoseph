import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';        
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext'

export default function Auth() {

    const [mode, setMode] = useState('signup')
    const { signup, login } = useContext(AuthContext)

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        if (mode === 'login') {
            const result = login(data.email, data.password);
            if (result.success) {
                alert("Logged in successfully!");
            } else {
                alert(result.error);
            }
        } else {
            const result = signup(data.email, data.password);
            if (result.success) {
                alert("Signed up successfully! You can now log in.");
                setMode('login');
            } else {
                alert(result.error);
            }
        }
    }
    return (
        <div>
            <h1>Authentication Page</h1>

            <div className="page">
                <div className="container">
                    <div className="auth-container">
                        <div className="page-title">
                            <h2>{mode === 'login' ? 'Login' : 'Signup'}</h2>


                            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text"
                                        id="username"
                                        {...register('username', { required: 'Username is required' })}
                                        className="form-input" />
                                    {errors.username && <p className="error-message">{errors.username.message}</p>}
                                </div>
                                {mode === 'signup' && (
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email"
                                            id="email"
                                            {...register('email', { required: 'Email is required' })}
                                            className="form-input" />
                                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                                    </div>
                                )}
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password"
                                        id="password"
                                        {...register('password', { required: 'Password is required' })}
                                        className="form-input" />
                                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    {mode === 'login' ? 'Login' : 'Signup'}
                                </button>

                            </form>
                            <div className="auth-switch">
                                <p>{mode === 'login' ? "Don't have an account?" : "Already have an account?"}</p>
                                <button
                                    type="button"
                                    className="auth-link"
                                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit', padding: 0 }}
                                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                                >
                                    {mode === 'login' ? 'Register' : 'Login'}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
