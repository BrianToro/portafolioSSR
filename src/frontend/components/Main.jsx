import React, { Fragment } from 'react';
import { connect } from "react-redux";

const Main = (props) => {
    return (
        <Fragment>
            <section className="w-full h-auto px-8 py-6 bg-white">
                <div className="mx-32 h-full">
                    <h1 className="font-mono text-rojo_oscuro text-4xl text-center">Desarrollador de Software Web</h1>
                    <p className="text-black text-center text-xl px-16 m-8">
                        Desarrollador de software con 2 años de experiencia en el desarrollo de Software basado en web, autodidacta por convicción y estudiante activo de Platzi, actualmente mis principales habilidades es el desarrollo de sistemas web con Node.js y React.js tengo interés en formarme para crear sistemas escalables en la nube y crear soluciones que impacten la vida de muchas personas. <br />
                        Me gusta la programación competitiva, la algoritmia, la ciencia y la tecnología, soy un apasionado de la solución de problemas con tech y la construcción de sistemas.
                    </p>
                </div>
            </section>
            <section className="w-full h-auto px-8 py-6 bg-white">
                <h2 className="font-mono text-rojo_oscuro text-3xl text-center">¿Como esta hecha esta pagina?</h2>
                <p className="text-black text-center text-xl px-16 m-8">
                    Entrare a explicarte como esta hecha esta pagina web para que ves que tipo de tecnologias manejo y de las cuales tengo conocimiento a fondo <br/>
                    como desarrollador
                </p>
            </section>
        </Fragment>
    )
};

export default connect(null, null)(Main);