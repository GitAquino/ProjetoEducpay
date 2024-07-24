import React, { useState } from 'react';
import logoEducpay from '../assets/Logo_Horizontal_educpay 1.png';
import imagemEsqueciSenha from '../assets/ImagemTelaEsqueciSenha (1).png';
import '../styles/EsqueciSenha1.css';

const EsqueciSenha1 = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <div className='container'>
      <div id='logo'>
        <img src={logoEducpay} alt='LogoEducpay' width={130} />
      </div>
      <div className='mensagem'>
        <p id='titulo'><strong>É uma pena que tenha esquecido sua senha T-T</strong></p>
        <p id='subtitulo'>Informe o email cadastrado em sua conta</p>
      </div>
      <form onSubmit={handleSubmit} id='form'>
        <label>Email:</label>
        <input  
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Digite seu email'
          id='email'
          required
        />
        <button id='botaoEnviar'><strong>Enviar</strong></button>
      </form>
      <div id='imagem'>
        <img src={imagemEsqueciSenha} alt='ImagemEsqueciSenha' width={700}/>
      </div>
    </div>
  );
};

export default EsqueciSenha1;
