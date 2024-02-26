import React, { useState } from 'react';
import './Login.scss'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";
import Input from '../../components/Input';

const Login = () => {
  const [ name, setName ] = useState("");
  const [ surname, setSurname ] = useState("");

  return (
    <div className='container-login'>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                A melhor ferramenta <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>para o seu negócio</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                Gerenciar um negócio de bebidas nunca foi tão simples.
              </p>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                Com nossa plataforma, você tem controle total sobre suas vendas, estoque e logística de entrega, tudo em um só lugar.
              </p>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                Com funcionalidades robustas e uma interface intuitiva, facilitamos a gestão do seu negócio para que você possa se concentrar no que realmente importa: atender seus clientes.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <Input type={"text"} name={name} id={name} label="Nome" setValue={setName} />
                      </div>
                      <div className="col-md-6 mb-4">
                        <Input type={"text"} name={surname} id={surname} label="Sobrenome" setValue={setSurname} />
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">Email</label>
                      <input type="email" id="form3Example3" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Senha</label>
                      <input type="password" id="form3Example4" className="form-control" />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Receber novidades por email
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                      Logar
                    </button>
                    <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                      Criar conta
                    </button>

                    <div className="text-center">
                      <p>Ou faça login com:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaInstagram/>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaFacebook/>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGoogle/>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaTwitter />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
