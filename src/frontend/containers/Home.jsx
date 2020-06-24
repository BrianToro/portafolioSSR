import React, { useState, useEffect, Fragment } from "react";
import { Link } from 'react-router-dom';

//Componentes
import Header from "../components/Header";


//redux
import { connect } from "react-redux";

//Css
import "../assets/styles/App.scss";

const List = ({  }) => {
    return (
        <Fragment>
            <div className="w-full h-screen">
                <Header />
            </div>
            
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        page: state.currentPage,
    };
};

export default connect(mapStateToProps, null)(List);
