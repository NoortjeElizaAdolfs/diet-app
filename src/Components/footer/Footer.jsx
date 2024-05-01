import { UilFacebook, UilInstagramAlt, UilTwitter, UilLinkedin } from '@iconscout/react-unicons'
import '../footer/Footer.css';
import Logo from '../../images/Logo.png';

function Footer() {
    return (
        <>
            <footer>
                <div className="f-col f-col-1">
                <img src={Logo} className='logo' alt='Diet Chef' />
                </div>

                <div className="f-col">

                        <strong>Over ons</strong> <br/>

                    <div>
                        {/* <a href='/recepten'>Recepten</a> <br />
                        <a href='/inpiratie'>Inspiratie</a><br />
                        <a href='/cocktails'>Cocktails</a>
                        <a href='/logout'>Logout</a> */}
                    </div>

                </div>

                <div className="f-col">
                        <strong>Contacteer ons</strong> <br/> 
                        <p>Geniet lekker van alle recepten. <br/>
                        en we hopen u snel te zien
                        <br/>+315789675878</p>
                </div>

                 <div className="footer-sm-icons f-col">
                    <a  className="icon color-black" href="#"><UilFacebook/></a>
                    <a  className="icon color-black" href="#"><UilInstagramAlt/></a>
                    <a  className="icon color-black" href="#"><UilTwitter/></a>
                    <a  className="icon color-black" href="#"><UilLinkedin/></a>
                </div>
                <div className='copyright'><span>Copyright© 2024 Noortje Eliza Adolfs Alle rechten voorbehouden</span></div>
            </footer>
        </>
    );
}
export default Footer;