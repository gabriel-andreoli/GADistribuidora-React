import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import AppButton from '../../components/AppButton';
import { ApiRoutes } from '../../../utils/routes/ApiRoutes';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/routes/AppRoutes';
import { Utils } from '../../../utils/Utils';
import BackGroundLogin from '../../components/BackGroundLogin';
import { RestService } from '../../Services/RestService';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [ payloadCreateAccount, setPayloadCreateAccount ] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [ inputErrors, setInputErrors ] = useState({
    nameError: '',
    surnameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });

  async function handleCreateAccount(){
    const nameToBody = `${payloadCreateAccount.name.trim()} ${payloadCreateAccount.surname.trim()}`;
    const body = {
      name: nameToBody,
      confirmPassword: payloadCreateAccount.confirmPassword,
      email: payloadCreateAccount.email,
      password: payloadCreateAccount.password
    }
    await RestService.POST(ApiRoutes.CREATE_ACCOUNT, body);
    clearFields();
  }

  function clearFields(){
    setPayloadCreateAccount({
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    setInputErrors({
      nameError: '',
      surnameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    });
  }

  const validateField = (event: React.FocusEvent<HTMLInputElement>) : void => {
    const { name, value } = event.target;

    if(value === ''){
      setInputErrorWithNameOfInputAndErrorMessage(name, 'Preencha um valor');
      return;
    }
    
    if (name === 'email' && !Utils.IsValidEmail(value)) {        
      setInputErrorWithNameOfInputAndErrorMessage(name, 'Email inválido');
      return;
    }else if (name === 'password'){
      setInputErrorWithNameOfInputAndErrorMessage(name, Utils.ValidatePasswordAndReturnErrorMessage(value));
      return;
    }else if (name === 'confirmPassword'){
      if(!Utils.AreEquals(value, payloadCreateAccount.password)){
        setInputErrorWithNameOfInputAndErrorMessage(name, 'As senhas não conferem');
        return;
      }
    }
    setInputErrorWithNameOfInputAndErrorMessage(name, '');
  }

  const setInputErrorWithNameOfInputAndErrorMessage = (name: string, msgError: string) : void => {
    setInputErrors(prevState => ({
      ...prevState,
      [`${name}Error`]: msgError
    }));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) : void{
    const { name, value } = event.target;
    setPayloadCreateAccount((prevPayloadCreateAccount) => ({
      ...prevPayloadCreateAccount, 
      [name]: value
    }));
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
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <TextField
                          label="Nome"
                          variant="standard"
                          error={!!inputErrors.nameError}
                          helperText={inputErrors.nameError}
                          name='name'
                          value={payloadCreateAccount.name}
                          onBlur={(event: React.FocusEvent<HTMLInputElement>) => validateField(event)}
                          fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <TextField
                          label="Sobrenome"
                          variant="standard"
                          error={!!inputErrors.surnameError}
                          helperText={inputErrors.surnameError}
                          name='surname'
                          value={payloadCreateAccount.surname}
                          onBlur={(event: React.FocusEvent<HTMLInputElement>) => validateField(event)}
                          fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <TextField
                        label="Email"
                        variant="standard"
                        error={!!inputErrors.emailError}
                        helperText={inputErrors.emailError}
                        name='email'
                        value={payloadCreateAccount.email}
                        onBlur={(event: React.FocusEvent<HTMLInputElement>) => validateField(event)}
                        fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <TextField
                        label="Senha"
                        variant="standard"
                        error={!!inputErrors.passwordError}
                        helperText={inputErrors.passwordError}
                        type="password"
                        name='password'
                        value={payloadCreateAccount.password}
                        onBlur={(event: React.FocusEvent<HTMLInputElement>) => validateField(event)}
                        fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <TextField
                        label="Confirme sua senha"
                        variant="standard"
                        error={!!inputErrors.confirmPasswordError}
                        helperText={inputErrors.confirmPasswordError}
                        type="password"
                        name='confirmPassword'
                        value={payloadCreateAccount.confirmPassword}
                        onBlur={(event: React.FocusEvent<HTMLInputElement>) => validateField(event)}
                        fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="Receber novidades por email"
                      labelPlacement="end"
                      />
                    </div>
                    
                    <Button variant='contained' size='medium' fullWidth className='mb-4' onClick={handleCreateAccount}>Criar conta</Button>
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

export default CreateAccount;
