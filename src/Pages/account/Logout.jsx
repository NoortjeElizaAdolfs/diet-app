import {useEffect, useContext} from 'react';
import './Account.css';
import {AuthContext} from '../../context/Auth';

function Logout() {

  const { logout: logoutUser } = useContext(AuthContext);
  useEffect(() => {
    logoutUser();
}, []);

  return (
    <section className='text-align-center'>
      <h1>...Aan het uitloggen</h1>
    </section>
  );
}
export default Logout;