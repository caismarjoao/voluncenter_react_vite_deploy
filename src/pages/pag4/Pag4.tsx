import "~/pages/pag4/Pag4.css";
import { images } from '~/constants'; 
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="button-container"> 
            <div className="screen" style={{padding: 0}}>
                <img src={images.caritas} alt="Cáritas Portuguesa" className="organization" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px", height: "14rem"}}/>
                <h2>13-14 Novembro</h2>
                <p className="description">
                    Aqui fica uma breve descrição do que o voluntariado se trata. Aqui fica uma breve descrição do que o voluntariado se trata.
                </p>
                <div className="info">
                    <p style={{marginLeft: "3rem"}}><strong>Local:</strong> Nome do local</p>
                    <p style={{marginLeft: "3rem"}}><strong>Hora/Turnos:</strong> Detalhes dos turnos</p>
                </div>
                <button className="volunteer-button" onClick={() => navigate('/voluncenter_react_vite_deploy/inscrever')}>Voluntariar</button>
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
