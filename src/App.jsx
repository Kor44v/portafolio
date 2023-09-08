import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import Titulo from "./components/title";

function App() {
  return (
    <>
      <header className="flex gap-x-40">
        <section className="flex flex-col justify-center">
          <h1 className=" w-64text-7xl front-bold mb-2 ">Marcelo Gutiérrez</h1>
          <Titulo />
          <p className="mt-12 w-96 justify-center ">
            Desarrollador front-end de Chile e ingeniero que busca seguir su
            sueño de ser developer
          </p>
          <div>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-5 mt-4 mr-4 hover:cursor-pointer hover:text-yellow-500 hover:scale-120 transition scale"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="h-5 mt-4 mr-4 hover:cursor-pointer hover:text-yellow-500 hover:scale-120 transition scale"
            />
          </div>
          <section className="flex flex-row mt-20">
            <div className=" mx-2 align-center">Tecnologías</div>
            <div>
              <ul className="flex flex-row">
                <li>
                  <img
                    src="src\assets\img\bootstrap.png"
                    alt=""
                    className="mx-1 h-10 w-10 rounded-full p-1 bg-white object-cover"
                  />
                </li>
                <li>
                  <img
                    src="src\assets\img\css.png"
                    alt=""
                    className="mx-1 h-10 w-10 rounded-full p-1 bg-white object-cover"
                  />
                </li>
                <li>
                  <img
                    src="src\assets\img\html.png"
                    alt=""
                    className="mx-1 h-10 w-10 rounded-full p-1 bg-white object-cover"
                  />
                </li>
                <li>
                  <img
                    src="src\assets\img\js.png"
                    alt=""
                    className="mx-1 h-10 w-10 rounded-full p-1 bg-white object-cover"
                  />
                </li>
                <li>
                  <img
                    src="src\assets\img\vue.png"
                    alt=""
                    className="mx-1 h-10 w-10 rounded-full p-1 bg-white object-cover"
                  />
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className=" flex align-center">
          <img
            src="src\assets\foto.jpg"
            alt=""
            className="w-64 h-64 rounded-full"
          />
        </section>
      </header>

      <main>
        <h2>Proyectos</h2>

        <div></div>
      </main>
      <footer className="">
        Contactame!{" "}
        <a href="mailto:m.gutierrezzamorano1@gmail.com">
          m.gutierrezzamorano1@gmail.com
        </a>
      </footer>
    </>
  );
}

export default App;
