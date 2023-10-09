import React from 'react'
import { Link } from 'react-router-dom'
function Landingscreen() {
  return (
    <div className='pic'>
      
      
    <div className='row'>
      <div className='col-md-12 text-center'>

        <h3>Welcome to The Plan Your Trip </h3>
        <Link to="/home">
          <button className='btn btn-primary flightbt' > Book Hotels </button>
        </Link>
        <Link to="/flight">
          <button className='btn btn-primary flightbt' > Book flights </button>
        </Link>
        <Link to="/train">
          <button className='btn btn-primary flightbt' > Book Train </button>
        </Link>
      </div>


    </div></div>
  )
}

export default Landingscreen