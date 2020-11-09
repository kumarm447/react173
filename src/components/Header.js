import React from 'react'
import { NavLink, Link }  from 'react-router-dom';

const Header=()=> {

    const styles={
        backgroundColor:'#475562',
        borderBottom:'0.5px white solid', 
        borderTop:'0.5px white solid'
    }

    return (<>

        <nav className="navbar navbar-expand-lg" style={styles}>

        <a className="navbar-brand text-white" href="#">Logo</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

            <ul className="navbar-nav">
            
            <li className="nav-item active">
                    <NavLink className="nav-link text-white" activeClassName="text-white bg-dark" to="/home">Home</NavLink>
            </li>

            <li className="nav-item">
                   <NavLink className="nav-link text-white" activeClassName="text-danger bg-white" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="text-success bg-white" to="/services">Services</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="text-success bg-white" to="/portfolios">Portfolios</NavLink>
            </li>
           
            <li className="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="text-success bg-white" to="/blog">Blog</NavLink>
            </li>

                {/* Drowdown Menu */}
            <li className="nav-item dropdown">
                    <NavLink 
                    className="nav-link  dropdown-toggle text-white"  
                    to="/trainings"
                    id="navbarDropdown" 
                    data-toggle="dropdown">
                            Trainings
                    </NavLink>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/trainings/mernstack">Mernstack</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/trainings/angularjs">Angular</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/trainings/reactjs">React</Link>
                  </div>

            </li>
        {/* Drowdown Menu */}

           
            <li className="nav-item">
                    <NavLink className="nav-link" activeStyle={{ backgroundColor:'white', color:'purple' }} to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/props">Props</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/courses">Courses</NavLink>
            </li>


                {/*
            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/conditionals">Condi_Renderings</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/states">States</NavLink>
            </li>
            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/lifecycle">Lifecycle</NavLink>
            </li>
            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/restapi">RestAPI </NavLink>
            </li>
            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/signup">Signup</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/search">Search</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/reactredux">ReactRedux</NavLink>
            </li>
                */}

     
            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/hooks1">Hooks1</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/hooksApi">HooksApi</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/hooksApi/create">HooksSignup</NavLink>
            </li>

            <li className="nav-item">
                    <NavLink className="nav-link text-white"  to="/pagination">HooksPagination</NavLink>
            </li>
           
            </ul>
        </div>
        </nav>

            </>)
}


export default Header