import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


    const user = JSON.parse(localStorage.getItem('currentuser'))

    function logout(){
        localStorage.removeItem('currentuser')
        window.location.href = "/"
    }
    
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg">
                
                
               <b> <a className="navbar-brand" href="/">
                    Plan Your Trip
                </a></b>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        {user ? (<>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.data.name}
                                </button>
                                <ul class="dropdown-menu">
                                    
                                    <li><a class="dropdown-item " href="/admin">admin?</a></li>
                                    <li><a class="dropdown-item" href="#" onClick= {logout}>log out</a></li>
                                    <li><a class="dropdown-item " href='/usersbookings'>Your Bookings</a></li>
                                </ul>
                            </div>





                        </>) : (<>
                            <a className="nav-link" href="/register">Register</a>


                            <a className="nav-link" href="/login">Login</a>

                        </>)}










                    </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar