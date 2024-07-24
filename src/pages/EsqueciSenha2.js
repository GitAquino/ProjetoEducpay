import React from 'react';
import logoEducpay from '../assets/Logo_Horizontal_educpay 1.png';
import imagemEsqueciSenha from '../assets/ImagemTelaEsqueciSenha (1).png';
import '../styles/EsqueciSenha2.css'; 

const EsqueciSenha1 = () => {
  return (
    <div className='container'>
        <div className='components'>
            <div id='logo'>
                <img src={logoEducpay} alt='LogoEducpay' width={130} />
            </div>
            <div className='mensagem'>
                <p id='titulo'><strong>Enviamos as instruções para redefinir sua senha</strong></p>
                <p id='titulo'><strong>para o email cadastrado</strong></p>
            </div>
            <div>
            <a href='TelaLogin'>Voltar ao início!</a>
            </div>
        </div>
        <div id='imagem'>
            <img src={imagemEsqueciSenha} alt='ImagemEsqueciSenha' width={700}/>
        </div>  
    </div>
  );
};

export default EsqueciSenha1;
