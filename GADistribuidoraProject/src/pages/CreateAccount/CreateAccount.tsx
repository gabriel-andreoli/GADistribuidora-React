import React, { useState } from 'react';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import AppButton from '../../components/AppButton';
import { ApiRoutes } from '../../../utils/routes/ApiRoutes';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/routes/AppRoutes';
import { Utils } from '../../../utils/Utils';
import BackGroundLogin from '../../components/BackGroundLogin';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [ name, setName ] = useState("");
  const [ surname, setSurname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const [ nameError, setNameError ] = useState("");
  const [ surnameError, setSurnameError ] = useState("");
  const [ emailError, setEmailError ] = useState("");
  const [ passwordError, setPasswordError ] = useState("");
  const [ confirmPasswordError, setConfirmPasswordError ] = useState("");

  async function handleCreateAccount(){
    const nameToBody = `${name.trim()} ${surname.trim()}`;
    const body = {
      name: nameToBody,
      confirmPassword: confirmPassword,
      email: email,
      password: password
    }
    try{
      const response = await axios.post(ApiRoutes.CREATE_ACCOUNT, body);
      clearFields();
    }catch(error){
      console.error('Erro ao enviar dados:', error);
    }
  }

  function clearFields(){
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setSurname("");

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setNameError("");
    setSurnameError("");
  }

  enum FieldsCreateAccount{
    Name = "name",
    Surname = "surname",
    Email = "email",
    Password = "password",
    ConfirmPassword = "confirmPassword"
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) : void{
    const { id, value } = event.target;
    let inputValue = "";
    switch(id){
      case FieldsCreateAccount.Name:{
        inputValue = Utils.validadeBasicAndSetValues(value, setName, setNameError);
        break;
      }
      case FieldsCreateAccount.Surname:{
        inputValue = Utils.validadeBasicAndSetValues(value, setSurname, setSurnameError);
        break;
      }
      case FieldsCreateAccount.Email:{
        inputValue = Utils.validadeBasicAndSetValues(value, setEmail, setEmailError);
        break;
      }
      case FieldsCreateAccount.Password:{
        inputValue = Utils.validadeBasicAndSetValues(value, setPassword, setPasswordError);
        break;
      }
      case FieldsCreateAccount.ConfirmPassword:{
        inputValue = Utils.validadeBasicAndSetValues(value, setConfirmPassword, setConfirmPassword);
        break;
      }
      default:
        break;
    }
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
                          error={!!nameError}
                          helperText={nameError}
                          id={FieldsCreateAccount.Name}
                          fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <TextField
                          label="Sobrenome"
                          variant="standard"
                          id={FieldsCreateAccount.Surname}
                          fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <TextField
                        label="Email"
                        variant="standard"
                        id={FieldsCreateAccount.Email}
                        fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <TextField
                        label="Senha"
                        variant="standard"
                        type="password"
                        id={FieldsCreateAccount.Password}
                        fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <TextField
                        label="Confirme sua senha"
                        variant="standard"
                        type="password"
                        id={FieldsCreateAccount.ConfirmPassword}
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
                    
                    <AppButton text="Criar conta" width="100" action={CreateAccount}/>
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
