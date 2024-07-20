import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../components/Logo_Horizontal_educpay 1.png';
import iconFacebook from '../components/icons8-facebook-48.png';
import { FcGoogle } from "react-icons/fc";
import { MdVisibilityOff } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='TelaInteira'>
      <div className="loginContainer">
        <form onSubmit={handleSubmit} className="formularioLogin">
          <img id='LogoEducpay' src={logo} alt='Logo Educpay' width={130}/>
          <h2>Bem-vindo(a) de volta!</h2>
          <p id='subtitulo'>Ainda não tem uma conta? <a id='subtituloLink' href='' target="_blank" rel="noopener noreferrer">Cadastrar-se</a></p>
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
            <div className="inputIconContainer">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <MdVisibilityOff className='iconSenha' id='iconSenha'/>
            </div>
          </div>
          <button type="submit" className="botaoLogin"><strong>Entrar</strong></button>
          <p id="esqueciSenha"><a href=''>Esqueci a senha</a></p>
          <p id="entreComOpcoes">
            <span className="linha"></span>
            Ou entre com
            <span className="linha"></span>
          </p>
          <div className="botoesContainer">
            <button className="botaoGoogle">
              <FcGoogle className='icon'/>Google
            </button>
            <button className="botaoFacebook">
              <img className='icon' src={iconFacebook} alt='Icon Facebook' width={20}/>Facebook
            </button>
          </div>
          <p id="Termos">Confira nossos <a id="TermosLink" href=''>Termos e Condições</a></p>
        </form>
        <div className='LoginImage'>
          {/* Aqui você pode adicionar outra imagem, se necessário */}
        </div>
      </div>
    </div>
  );
};

export default Login;
