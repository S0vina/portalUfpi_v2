import { useState } from 'react'
import './App.css'

function App() {

  const mudaModulo = (modulo: string) => {
    console.log(modulo);
  };

  return (
    <>
       <div id="view-inicio" className="modulo-content">
          <div className="boas-vindas">
            <h1>Olá, Aluno! 👋</h1>
            <p>Bem-vindo ao seu portal</p>
          </div>

          {/* DIV CONTAINER DAS FEATURES */}
          <div className="grid-dashboard">
            {/* ICON PARA FEATURE DE CRONOGRAMA */}
            <div className="card-dashboard" onClick={() => mudaModulo('cronograma')}>
              <div className="icon">📅</div>
              <h3>Minha Grade</h3>
              <p>Organize seus horários de aula para 2026</p>
            </div>
            {/* LINK PARA IR DIRETO PARA O SIGAA*/}
            <a
              href="https://sigaa.ufpi.br"
              target="_blank"
              className="card-dashboard"
            >
              {/* ICON DA FEATURE SIGAA */}
              <div className="icon">🎓</div>
              <h3>SIGAA</h3>
              <p>Notas e frequências</p>
            </a>

            {/* ICON PARA CALENDARIO ACADEMICO */}
            <div className="card-dashboard" onClick={() => mudaModulo('ui')}>
              <div className="icon">📌</div>
              <h3>Calendário</h3>
              <p>Prazos e feriados</p>
            </div>

            {/* ICON PARA FEATURES DO RU */}
            <div className="card-dashboard">
              <div className="icon">🍱</div>
              <h3>Restaurante Universitário</h3>
              <p>Cardápio do RU</p>
            </div>
          </div>
    </div>
    
    </>
  )
}

export default App
