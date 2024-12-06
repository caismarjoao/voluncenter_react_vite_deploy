import { images } from '~/constants';
import "~/pages/home/Home.css";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();
  return (
    
    <div className="App">
      <img src={images.logo} alt="Logo" className="image" />
      <header className="header">
        <h1 className="logo">VolunCenter</h1>
        <p className="subtitle">"Proposta de Valor"</p>
        <div className="buttons">
          <button className="volunteer-button" onClick={() => navigate('/login')}>Voluntariar</button>
          <button className="christmas-card-button">Postal Natal</button>
        </div>
      </header>
      
      <section className="about">
        <h2>Quem Somos</h2>
        <p>
          Grupo de alunos da Licenciatura em Engenharia Informática dedicados a
          aumentar a acessibilidade a voluntariados e recolhas de bens para estudantes
          do Departamento de Engenharia Informática.
        </p>
      </section>

      <section className="legal-notice">
        <h2>Aviso Legal</h2>
        <p>
          Os conteúdos constantes desta página foram realizados por alunos no âmbito de uma disciplina —
          Processos de Gestão e Inovação — do 3° ano da licenciatura em Engenharia Informática da Faculdade
          de Ciências e Tecnologia da Universidade de Coimbra (FCTUC), pelo que a FCTUC não se responsabiliza
          pelo seu uso e conteúdos.
        </p>
      </section>

      <section className="christmas-card">
        <h2>Postal de Natal</h2>
        <p>
          Iniciativa que visa distribuir postais de natal por idosos que vivem sozinhos, levando alegria e esperança às suas casas.
        </p>
        <p>
          O postal é anónimo e distribuído posteriormente pelas casas selecionadas nestas condições.
        </p>
        <p>
          Por questões de segurança, os dados destes idosos não são divulgados em etapa nenhuma.
        </p>
      </section>

    </div>
  );
}
