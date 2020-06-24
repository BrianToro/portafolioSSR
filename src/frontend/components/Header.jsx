import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <nav className=" flex flex-row w-full h-14 bg-morado">
                <h1 className="font-mono text-3xl text-white h-full w-1/4 pl-3 pt-1"> BRIAN TORO </h1>
                <ul className="flex flex-row-reverse h-full w-3/4">
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="#" className="text-2xl mx-4 my-4 text-white">Experiencia</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="/"  className="text-2xl mx-4 my-4 text-white">Blog</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="/"  className="text-2xl mx-4 my-4 text-white">Proyectos</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="/"  className="text-2xl mx-4 my-4 text-white">Inicio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchtoProps = {};

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
