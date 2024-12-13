import { images } from '~/constants'; 
import './Pag7.css';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <button className="large-green-button"></button>
            <img src={images.profile} alt="Logo do site" className="imagem-exemplo" />
            <div className="person-name">Cristina Oliveira</div>
            <div className="person-age">26 anos</div>
            <div className="user-since">Utilizador desde 7 Novembro de 2024</div>
            <div className="stat-container">
                <div className="stat-item">
                    <div className="stat-text">Voluntariados feitos</div>
                    <div className="stat-number">4</div>
                </div>
                <div className="stat-item">
                    <div className="stat-text">Cupões ganhos</div>
                    <div className="stat-number">1</div>
                </div>
                <div className="stat-item">
                    <div className="stat-text">Instituições ajudadas</div>
                    <div className="stat-number">2</div>
                </div>
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
};