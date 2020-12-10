import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Logo from './../assets/images/logo.png';
import LoggedInList from './navLists/LoggedInList';
import LoggedOutList from './navLists/LoggedOutList';


const Navbar = props => {

    const { auth } = props;

    const list = auth.uid ? <LoggedInList /> : <LoggedOutList />

    return (
        <header className="header_area sticky-header">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light main_box">
                    <div className="container">
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <Link className="navbar-brand logo_h" to="/"><img src={Logo} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item"><Link className="nav-link" to="/buy">Buy</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

                                {/* after login is made list variable would be used */}
                                {list}

                            </ul>
                            {/* <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item">
                                    <button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
            </div>
            {/* <div className="search_input" id="search_input_box">
                <div className="container">
                    <form className="d-flex justify-content-between">
                        <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                        <button type="submit" className="btn"></button>
                        <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                    </form>
                </div>
            </div> */}
        </header>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(Navbar);