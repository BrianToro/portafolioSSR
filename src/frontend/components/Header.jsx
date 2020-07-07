import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <nav className=" flex flex-row w-full h-14 bg-white">
                <h1 className="font-mono text-3xl text-rojo_oscuro h-full w-1/4 pl-3 pt-1 cursor-pointer"> BRIAN TORO </h1>
                <ul className="flex flex-row-reverse h-full w-3/4">
                    <li className="mr-5 h-full p-2 cursor-pointer">
                        <Link to="#" className="text-2xl mx-4 my-4 text-black hover:text-rojo_claro">Experiencia</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer">
                        <Link to="/"  className="text-2xl mx-4 my-4 text-black hover:text-rojo_claro">Blog</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer">
                        <Link to="/"  className="text-2xl mx-4 my-4 text-black hover:text-rojo_claro">Proyectos</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer">
                        <Link to="/"  className="text-2xl mx-4 my-4 text-black hover:text-rojo_claro">Inicio</Link>
                    </li>

                </ul>
            </nav>
            <hr/>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchtoProps = {};

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
