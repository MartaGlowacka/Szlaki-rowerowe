import React from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {

    toggleSideNav = () => {
        const nav = document.querySelector('nav');
        console.log(nav.classList.toggle('active'))
    }

    render() {
        return (
            <nav onClick={this.toggleSideNav}>
                <div className="wrapper">
                    <NavLink exact to='/'>
                        <div className={'logo'}>
                            <img src="/src/images/Kaczka_01.png" alt=""/>
                            <h1><strong>K</strong>acze <strong>t</strong>rasy</h1>
                        </div>
                    </NavLink>

                    <div className="hamburger">
                        <i></i>
                    </div>
                    <ul className="navList">
                        <li>
                            <NavLink exact to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/search'>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}



export default Nav;
