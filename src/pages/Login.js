import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../components/Logo_Horizontal_educpay 1.png';


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
      <div className="loginContainer">
        <form onSubmit={handleSubmit} className="formularioLogin">
          <img id='LogoEducpay' src={logo} alt='Logo Educpay' />
          <h2>Bem-vindo(a) de volta!</h2>
          <p>Ainda não tem uma conta? <a href='www.google.com' target="_blank" rel="noopener noreferrer">Cadastrar-se</a></p>
          <div className="formularioComponentes">
            <label>Email ou Telefone</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formularioComponentes">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="botaoLogin"><strong>Entrar</strong></button>
          <p id="esqueciSenha"><a href='www.google.com'>Esqueci a senha</a></p>
          <p id="entreComOpcoes">
            <span className="linha"></span>
            Ou entre com
            <span className="linha"></span>
          </p>
          <div className="botoesContainer">
                <button className="botao">google</button>
                <button className="botao">facebook</button>
            </div>
        </form>
      </div>
      <div className='LoginImage'>
        {/* Aqui você pode adicionar outra imagem, se necessário */}
      </div>  
    </div>
  );
};

export default Login;
