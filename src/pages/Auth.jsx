import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export const Auth = () => {

    const [mode, setMode] = useState('signup')
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <div>
            <h1>Authentication Page</h1>

            <div className="page">
                <div className="container">
                    <div className="auth-container">
                        <div className="page-title">
                            <h2>{mode === 'login' ? 'Login' : 'Signup'}</h2>

                            <form>
                                <div className="auth-form">
                                    <div className="form-group">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" id="username" className="form-input" />
                                    </div>
                                    {mode === 'signup' && (
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" id="email" className="form-input" />
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" id="password" className="form-input" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        {mode === 'login' ? 'Login' : 'Signup'}
                                    </button>
                                </div>
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
