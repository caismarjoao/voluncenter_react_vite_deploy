import React, { useState } from 'react';
import './page6.css';
import { useNavigate } from "react-router-dom";
import { images } from '~/constants'; 

const SimulacaoTelefone: React.FC = () => {
    const [selectedCircle, setSelectedCircle] = useState<number | null>(null);

    const handleCircleClick = (circleId: number) => {
        setSelectedCircle(selectedCircle === circleId ? null : circleId);
    };
    const navigate = useNavigate();

    return (
        <div className="phone">
            <div className="screen">
                <h1 className="title_header">Banco Alimentar</h1>
                <p>31 Maio - 1 Junho</p>
                <p className="text_subscribe">Inscrever Turno:</p>
                <div className="schedules">
                    <div className="date">31 Maio</div>
                    <div className="date_options">
                        {[1, 2, 3, 4].map((id) => (
                            <div className="schedules_position" key={id}>
                                <div>{`${9 + id - 1}:00 - ${10 + id - 1}:00`}</div>
                                <button
                                    className="circle"
                                    onClick={() => handleCircleClick(id)}
                                >
                                    <img
                                        src={
                                            selectedCircle === id
                                                ? images.circle_fill
                                                : images.empty_circle
                                        }
                                        alt="Ícone de círculo"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="date">1 Junho</div>
                    <div className="date_options">
                        {[5, 6, 7, 8].map((id) => (
                            <div className="schedules_position" key={id}>
                                <div>{`${9 + id - 5}:00 - ${10 + id - 5}:00`}</div>
                                <button
                                    className="circle"
                                    onClick={() => handleCircleClick(id)}
                                >
                                    <img
                                        src={
                                            selectedCircle === id
                                                ? images.circle_fill
                                                : images.empty_circle
                                        }
                                        alt="Ícone de círculo"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
        
                    <button
                        className="final"
                        id="inscreverBtn"
                        style={{
                            opacity: selectedCircle ? 1 : 0.5,
                            pointerEvents: selectedCircle ? 'auto' : 'none',
                        }}
                    >
                        Inscrever-se
                    </button>
                  
                </div>
                
            </div>
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

export default SimulacaoTelefone;
