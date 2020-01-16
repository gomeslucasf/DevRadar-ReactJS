import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'
function App() {
  return (
    <div id="app">
      <aside>
        <strong>
          Cadastrar
        </strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49655656?s=400&v=4" alt="Lucas Gomes"/>
              <div className="user-info">
                <strong>  
                  Lucas Gomes
                </strong>
                <span>
                  Java, C++, C, JavaScript
                </span>
              </div>
            </header>
            <p>
              Aluno de Bacharelado em Sistemas de Informação pela FIPP/Unoeste. Estudando a stack ReactJS, React Native e NodeJS, pelo Bootcamp da @Rocketseat.
            </p>
            <a href="https://github.com/gomeslucasf">
              Acessar Perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49655656?s=400&v=4" alt="Lucas Gomes"/>
              <div className="user-info">
                <strong>  
                  Lucas Gomes
                </strong>
                <span>
                  Java, C++, C, JavaScript
                </span>
              </div>
            </header>
            <p>
              Aluno de Bacharelado em Sistemas de Informação pela FIPP/Unoeste. Estudando a stack ReactJS, React Native e NodeJS, pelo Bootcamp da @Rocketseat.
            </p>
            <a href="https://github.com/gomeslucasf">
              Acessar Perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49655656?s=400&v=4" alt="Lucas Gomes"/>
              <div className="user-info">
                <strong>  
                  Lucas Gomes
                </strong>
                <span>
                  Java, C++, C, JavaScript
                </span>
              </div>
            </header>
            <p>
              Aluno de Bacharelado em Sistemas de Informação pela FIPP/Unoeste. Estudando a stack ReactJS, React Native e NodeJS, pelo Bootcamp da @Rocketseat.
            </p>
            <a href="https://github.com/gomeslucasf">
              Acessar Perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49655656?s=400&v=4" alt="Lucas Gomes"/>
              <div className="user-info">
                <strong>  
                  Lucas Gomes
                </strong>
                <span>
                  Java, C++, C, JavaScript
                </span>
              </div>
            </header>
            <p>
              Aluno de Bacharelado em Sistemas de Informação pela FIPP/Unoeste. Estudando a stack ReactJS, React Native e NodeJS, pelo Bootcamp da @Rocketseat.
            </p>
            <a href="https://github.com/gomeslucasf">
              Acessar Perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49655656?s=400&v=4" alt="Lucas Gomes"/>
              <div className="user-info">
                <strong>  
                  Lucas Gomes
                </strong>
                <span>
                  Java, C++, C, JavaScript
                </span>
              </div>
            </header>
            <p>
              Aluno de Bacharelado em Sistemas de Informação pela FIPP/Unoeste. Estudando a stack ReactJS, React Native e NodeJS, pelo Bootcamp da @Rocketseat.
            </p>
            <a href="https://github.com/gomeslucasf">
              Acessar Perfil no GitHub
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;

/***
 * Componente : Bloco isolado de Html+css+Js, que não afeta outros componentes
 * 
 * Estado: A forma como as informaçoes mantem em um componente ja que o react n observa as variaveis
 * 
 * Propriedade: Atributos html - Informações do componente pai passa aos filhos 
 * 
 */