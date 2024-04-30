import React from "react";
//import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <header className="banner">
                <div className="banner-info">
                <h1>WELKOM BIJ DIET CHEF</h1>
                </div>
            </header>
            <main>
                <h2 class="subtitle">Wat is Diet chef?</h2><br/>
                <p class="landingtext">
                "Stap binnen in een culinaire wereld van smaakvolle ontdekkingen!
                Welkom op onze eten pagina, waar elke hap een avontuur is en elk gerecht een verhaal vertelt. 
                Laat je inspireren door een overvloed aan heerlijke recepten, boordevol smaak en creativiteit.
                Of je nu een doorgewinterde chef-kok bent of gewoon op zoek bent naar nieuwe culinaire ervaringen, 
                hier vind je alles wat je nodig hebt om je smaakpapillen te prikkelen en je keuken tot leven te brengen.
                Dus trek een schort aan, pak je koksmes en laat je meevoeren op een onvergetelijke reis door de wereld van eten en genot. 
                Eet smakelijk!"
                </p>

            </main>
            {<Footer /> }
        </>
    );
}

export default Home;