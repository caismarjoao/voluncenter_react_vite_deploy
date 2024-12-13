import { images } from '~/constants'; 
import "~/pages/page_2/page_2.css";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="container">
            {/* Header */}
            <div className="header">
                <img src={images.profile} alt="Profile Picture" className="profile-pic" />
                <div className="welcome-text">
                    <h1>Olá, Cristina!</h1>
                    <p className = 'paragraph_page_2'>Pronta para fazer uma boa ação?</p>
                </div>
            </div>

            {/* Organizations Section */}
            <div className="organizations">
                <img src={images.caritas} alt="Cáritas Portuguesa" className="organization" onClick={() => navigate('/voluncenter_react_vite_deploy/campanhas')} />
                <img src={images.ba} alt="Banco Alimentar" className="organization" />
                <img src={images.adav} alt="ADAV" className="organization" />
                <img src={images.irmas} alt="Irmãs Hospitaleiras" className="organization" />
            </div>

            {/* Footer Navigation */}
            <div className="footer">
                <a onClick={() => navigate('/voluncenter_react_vite_deploy/voluncenter')}>
                    <img src={images.cazinha} alt="Voluncenter" />
                </a>
                <a onClick={() => navigate('/voluncenter_react_vite_deploy')}>
                    <img src={images.maozinha} alt="Voluntariados" />
                </a>
                <a onClick={() => navigate('/voluncenter_react_vite_deploy/perfil')}>
                    <img src={images.person} alt="Perfil" />
                </a>
            </div>
        </div>
    );
}
