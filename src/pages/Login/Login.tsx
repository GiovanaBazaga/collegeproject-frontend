import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import mainilu  from '../../assets/svg/main-illustration.svg';
import logo from '../../assets/svg/logo.svg';
import icoEmail from '../../assets/svg/email-icon.svg'
import icoPassword from '../../assets/svg/password-icon.svg'

import './login.css'


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  async function login(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message === "Email not exits") {
          alert("Email not exits");
        }
        else if (res.data.message === "Login Success") {

          navigate('/home');
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }


    catch (err) {
      alert(err);
    }

  }

  return (
    <>
    <main>
      <section className="form-section">
        <img src={logo} alt="imagem logo" />
        <h2>Faça login na sua conta</h2>

        <form>
          <div className="input-wrapper">
            <label>Email</label>
            <div className="input-content">
              <input type="email" className="form-control" id="email" placeholder="maria@gmail.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <div className="icon">
                <img src={icoEmail} alt="icon" />
              </div>
            </div>

          </div>
          
          <div className="input-wrapper">
            <label>Senha</label>
            <div className="input-content">
              <input type="password" className="form-control" id="password" 
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <div className="icon">
                <img src={icoPassword} alt="icon" />
              </div>
            </div>
          </div>
                
          <span>Esqueceu a senha?</span>
        </form>

        <div className="btn-wrapper">
          <button type="submit" className="primary-btn" onClick={login} >Login</button>
          <div className="divider">
            <div></div>
            <span>ou</span>
            <div></div>
          </div>
          <button className="secondary-btn">Registre-se</button>
        </div>
      </section>
      <section className="main-section">
          <h1>You Should, MoveIt!</h1>
          <img src={mainilu} alt="Imagem"/>
        </section>
    </main>
      </>
  );
}

export default Login;