import ButtonLink from '../../Components/button/ButtonLink';
import './Not-found.css';

function NotFound() {
  return (
    <section>
      <h1>Sorry deze pagina is niet gevonden</h1>
      <p>Wellicht kun je de recepten bekijken.</p>
      <div className='button-margin size'>
      <ButtonLink to="/recepten">Recepten bekijken</ButtonLink>
      </div>
    </section>
  );
}
export default NotFound;