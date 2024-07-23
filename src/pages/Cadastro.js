import React, { useState } from 'react';
import '../styles/Cadastro.css';
import logo from '../components/Logo_Horizontal_educpay 1.png';
import ImgCadastro from '../components/image_6.png'
import { MdVisibilityOff } from "react-icons/md";

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [numeroCPF, setNumeroCPF] = useState('');
  const [telefone, setTelefone] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState ('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className='TelaInteira'>
      <div className="cadastroContainer">
        <form onSubmit={handleSubmit} className="formularioCadastro">
          <img id='LogoEducpay' src={logo} alt='Logo Educpay' width={130}/>
          <h2>Crie sua conta conosco ;)</h2>
          <p id='subtitulo'>Já possui uma conta? <a id='subtituloLink' href='TESTE' target="_blank" rel="noopener noreferrer">Entre aqui!</a></p>
          
          <div className="formularioComponentes">
  <label>Nome Completo</label>
  <input
    type="text"
    value={nomeCompleto}
    onChange={(e) => setNomeCompleto(e.target.value)}
    required
  />
</div>

    <div className="formularioComponentes formularioComponentesDuplo">
        <div id='inputData'>
            <label>Data de Nascimento</label>
            <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
            />
        </div>
        <div id='inputCPF'>
            <label>CPF</label>
            <input
            placeholder='___.___.___-__'
            type="number"
            value={numeroCPF}
            onChange={(e) => setNumeroCPF(e.target.value)}
            required
            />
        </div>
    </div>

    <div className="formularioComponentes formularioComponentesDuplo">
        <div id='inputEmail'>
            <label>Email</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div id='inputTelefone'>
            <label>Telefone</label>
            <input
            placeholder='(__)_____-____'
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            />
        </div>
    </div>

    <div className="formularioComponentes formularioComponentesDuplo" id='senhaContainer'>
        <div id='inputSenha'>
            <label>Senha</label>
            <div className="inputIconContainer">
            <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />
            <MdVisibilityOff className='iconSenha' id='iconSenha'/>
            </div>
        </div>
        <div id='inputConfirmarSenha'>
            <label>Confirmar Senha</label>
            <div className="inputIconContainer">
                <input
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                />
                <MdVisibilityOff className='iconSenha' id='iconSenha'/>
            </div>
        </div>
    </div>


          <p className='requisitosSenha' id='requisitoMargem'>* A senha deve conter letras maíusculas</p>
          <p className='requisitosSenha'>* A senha deve conter letras minúsculas</p>
          <p className='requisitosSenha'>* A senha deve conter números</p>
          <p className='requisitosSenha'>* A senha deve conter caractere especial(!,@,#,$)</p>

          <button type="submit" className="botaoCadastrar"><strong>Cadastrar-se</strong></button>

          <p id="Termos">Ao se cadastrar você concorda com nossos <a id="TermosLink" href='TESTE'>Termos e Condições</a></p>
        </form>
        <div className='CadastroImage'>
        <img src={ImgCadastro} alt='Img Cadastro'/>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
