import { images } from '~/constants';
import "~/pages/home/Home.css";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();
  return (
    
    <div className="AppIntroduction">
      <img src={images.logo} alt="Logo" className="image" />
      <header className="headerapp">
        <h1 className="logo_button">VolunCenter</h1>
        <h1>Nunca foi tão fácil ajudar!</h1>
        <h1>Encontra voluntariados aqui!</h1>
        <div className="buttons_voluncenter">
          <button className="volunteer-button-2" onClick={() => navigate('/voluncenter_react_vite_deploy/login')}>Voluntariar</button>
          <button className="christmas-card-button_new" onClick={() => (window.location.href = "https://forms.gle/zKZc5iGwDKFRgBfg6")}>Postal Natal</button>
        </div>
      </header>
      <section className="mission">
        <h2>Unimos Voluntários e Associações!</h2>
        <p>Centralizamos campanhas de voluntariado para facilitar a inscrição de voluntários e a divulgação pelas associações. Descobre projetos, inscreve-te facilmente e aproveita benefícios exclusivos. Simplificamos o impacto!</p>
      </section>

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
