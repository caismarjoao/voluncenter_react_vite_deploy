import { images } from '~/constants'; // Certifique-se de que está correto
import "~/pages/page_2/page_2.css";

export default function HomePage() {
    return (
        <div className="container">
            {/* Header */}
            <div className="header">
                <img src={images.profile} alt="Profile Picture" className="profile-pic" />
                <div className="welcome-text">
                    <h1>Olá, Cristina!</h1>
                    <p>Pronta para fazer uma boa ação?</p>
                </div>
            </div>

            {/* Organizations Section */}
            <div className="organizations">
                <img src={images.caritas} alt="Cáritas Portuguesa" className="organization" />
                <img src={images.ba} alt="Banco Alimentar" className="organization" />
                <img src={images.adav} alt="ADAV" className="organization" />
                <img src={images.irmas} alt="Irmãs Hospitaleiras" className="organization" />
            </div>

            {/* Footer Navigation */}
            <div className="footer">
                <img src={images.cazinha} alt="Home page" width = "40"/>
                <img src={images.maozinha} alt="Voluntariados" />
                <img src={images.person} alt="Perfil" />
            </div>
        </div>
    );
}
