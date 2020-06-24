import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <nav className="w-full h-12 bg-morado">
                <ul className="flex flex-row-reverse h-full">
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="/" className="text-2x1 mx-4 my-4 text-white">Acerca de mi</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="/"  className="text-2x1 mx-4 my-4 text-white">Blog</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="/"  className="text-2x1 mx-4 my-4 text-white">Proyectos</Link>
                    </li>
                    <li className="mr-5 h-full p-2 cursor-pointer hover:bg-rojo_oscuro">
                        <Link to="/"  className="text-2x1 mx-4 my-4 text-white">Inicio</Link>
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
