import React, { useState } from 'react';
import '../styles/Login.css';
import '../components/Logo_Horizontal_educpay 1.jpg'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div id='TelaInteira'>
        <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">

            <h2>Bem vindo(a) de volta!</h2>
            <p>Ainda não tem uma conta? Cadastre-se</p>
            <div className="form-group">
            <label>Email ou Telefone:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
        </div>
        <div className='LoginImage'>

        </div>  
    </div>
  );
};

export default Login;
