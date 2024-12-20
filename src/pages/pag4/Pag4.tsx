import "~/pages/pag4/Pag4.css";
import { images } from '~/constants'; 
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="button-container"> 
            <div className="screen" style={{padding: 0}}>
                <img src={images.ba} alt="Cáritas Portuguesa" className="organization" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px", height: "14rem"}}/>
                <h2>31 Maio - 1 Junho</h2>
                <p className="description">
                Precisamos de voluntário para ajudar na recolha de bens junto de estabelecimentos e abordar os clientes.

                São também necessários voluntários para ajudar na organização dos alimentos recebido no armazém em Cernache.
                </p>
                <div className="info">
                    <p style={{marginLeft: "3rem"}}><strong>Local:</strong> Coimbra</p>
                    <p style={{marginLeft: "3rem"}}><strong>Hora/Turnos:</strong> Detalhes dos turnos</p>
                </div>
                <div className="button-container">
                    <button className="volunteer-button" onClick={() => navigate('/voluncenter_react_vite_deploy/inscrever')}>Voluntariar</button>
                </div>
                <h2 className="spacing_division"></h2>
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
