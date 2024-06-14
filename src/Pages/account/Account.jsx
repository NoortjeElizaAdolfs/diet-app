import { useContext } from 'react';
import './Account.css';
import ButtonLink from '../../Components/button/ButtonLink';
import { AuthContext } from '../../context/Auth';

function Account() {
  const { user } = useContext(AuthContext);

  return (<section className='text-align-center'>
    <h1>Account</h1>
    <p>Welkom {user?.username}</p>
    <div className='size'>
      <ButtonLink to='/recepten'>Recepten</ButtonLink>
      <br />
      <ButtonLink to='/logout'>Uitloggen</ButtonLink>
    </div>
  </section>);
}
export default Account;