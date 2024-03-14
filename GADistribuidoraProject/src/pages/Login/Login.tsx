import React, { useEffect, useState } from 'react';
import './Login.scss'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";
import Input from '../../components/Input';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import AppButton from '../../components/AppButton';
import { ApiRoutes } from '../../../utils/routes/ApiRoutes';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/routes/AppRoutes';
import BackGroundLogin from '../../components/BackGroundLogin';
import { toast } from 'react-toastify';
import { useRestService } from '../../Contexts/RestServiceContext';

const Login = () => {
  const navigate = useNavigate();
  const _restService = useRestService<any>();

  const [ loginPayload, setLoginPayload ] = useState({
    email: '',
    password: ''
  });

  const [ formErrorMessage , setFormErrorMessage ] = useState("");
  
  async function handleLogin(event: any){
    event.preventDefault();
    if(!isValidFormDataInputs()){
      clearFields();
      return;
    }

    await _restService.POST(ApiRoutes.LOGIN, loginPayload);
    clearFields();
  }

  const isValidFormDataInputs = (): boolean => {
    if(loginPayload.email === '' || loginPayload.password === ''){      
      setFormErrorMessage("Por favor, preencha todos os campos.");
      return false;
    }

    const regexToValidEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidEmail: boolean = regexToValidEmail.test(loginPayload.email);
    if(!isValidEmail){
      setFormErrorMessage("O email é inválido.");
      return false;
    }
    return true;
  }

  function clearFields(){
    setLoginPayload({ email: '', password: '' });
  }

  useEffect(() => {
    if (formErrorMessage !== '') {
      toast.error(formErrorMessage);
      setFormErrorMessage('');
    }
  }, [formErrorMessage]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginPayload(prevState => ({
      ...prevState,
      [name]: value
    }));
    setFormErrorMessage('');
  }

  return (
    <div className='container-login'>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <BackGroundLogin/>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                      <TextField label="Email" variant="standard" name='email' value={loginPayload.email} fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}/>
                    </div>

                    <div className="form-outline mb-4">
                      <TextField label="Senha" variant="standard" name='password' type="password" value={loginPayload.password} fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}/>
                    </div>

                    <Button variant='contained' size='medium' fullWidth className='mb-4' onClick={(event) => handleLogin(event)}>Logar</Button>
                    
                    <Link to={AppRoutes.CREATE_ACCOUNT}>
                      <Button variant='contained' size='medium' fullWidth className='mb-3'>Criar conta</Button>
                    </Link>

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
