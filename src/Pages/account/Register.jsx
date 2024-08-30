import {useState} from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import Input from '../../Components/form/Input';
import Button from '../../Components/button/Button';
import MessageBox from '../../Components/message_box/message_box';
import { useForm, useWatch as UseWatch} from 'react-hook-form';
import axios from "axios";

function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage]  = useState('');

  async function handleFormSubmit(data) {
    setMessage('Aan het registreren, een ogenblik a.u.b.');
    try{
      const noviURL = "https://frontend-educational-backend.herokuapp.com"
      await axios.post(`${noviURL}/api/auth/signup`,
      {
          username: data.username,
          email: data.email,
          password: data.password,
          role: ['user']
      });
      setMessage('Succesvol geregistreerd. Je kunt nu inloggen via de onderstaande link.');
    }
    catch(e)
    {
      console.log(e)
      if(e.response.data.message === 'This username is already in use')
      {
        setMessage(" Deze gebruikersnaam is al in gebruik. Log via de onderstaande link in." );
      }
      else
      {
        setMessage('Er ging iets fout. Probeer het later opnieuw.');
      }
    }
  }

  return (
    <div class="login-container">
      <section className='text-align-center'>
        <h1>Registreren</h1>
        <MessageBox message={message} />
        <form className='display-flex flex-direction-column-center margin-auto p-20' onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
            type='text'
            name='username'
            id='username-field'
            label='Gebruikersnaam'
            validationRules={{
              required: {
                value: true,
                message: 'Gebruikersnaam is verplicht',
              }
            }}
            register={register}
            errors={errors}
            labelStyle='hide'
          /> <Input
            type='email'
            name='email'
            id='email-field'
            label='E-mailadres'
            validationRules={{
              required: {
                value: true,
                message: 'E-mailadres is verplicht',
              }
            }}
            register={register}
            errors={errors}
            labelStyle='hide'
          />
          <Input
            type='password'
            name='password'
            id='password-field'
            label='Wachtwoord'
            validationRules={{
              required: {
                value: true,
                message: 'Wachtwoord is verplicht',
              }
            }}
            register={register}
            errors={errors}
            labelStyle='hide'
          /> <Input
          type='password'
          name='password-confirmation'
          id='password-confirmation-field'
          label='Bevestig Wachtwoord'
          validationRules={{
            required: {
              value: true,
              message:  (val) => {
                  if (UseWatch('password') != val) {
                    return 'Uw wachtwoorden komen niet overeen.';
                  }
                  else
                  return 'Bevestig Wachtwoord is verplicht';
            }}
          }}
          register={register}
          errors={errors}
          labelStyle='hide'
        />
          <Button
            label='Aanmaken'
            type='submit'
            onClickCallBack={() => undefined}
          />
            <Link className='link text-align-center' to='/login'>Al een account? Inloggen</Link>
        </form>
      </section>
    </div>
  );
}
export default Register;