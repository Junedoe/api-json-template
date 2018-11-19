import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div id="nav-brand">
                        <Link to="/">API JSON TEMPLATE</Link>
                    </div>
                    <div className="nav-links-row">
                        <ul className="navbar navbar-navb">
                            <li className="navbar-navb-li">
                                <Link to="/exampleOne">FirstAPI</Link>
                            </li>
                            <li className="navbar-navb-li">
                                <Link to="/two">SecondAPI</Link>
                            </li>
                            <li className="navbar-navb-li">
                                <Link to="/three">ThirdAPI</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
