import React from 'react';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';
import image from './img/otracosa.jpg'


const Dashboard = () => {
    return(
        <div className="barra">
            <>
         <img src={image} alt="Imagen" style = {{width: "100%",  height: "auto"}} />
        </>
       
            <ul>
                <li>
                    <Link to="/" className='text-dark'><FaIcons.FaHome className="me-2"/>Inicio</Link>
                </li>
                <li>
                    <Link to="/ingreso" className='text-dark'><FaIcons.FaUserAlt className="me-2"/>Ingresa</Link>
                </li>
                <li>
                    <Link to="/registro" className='text-dark'><FaIcons.FaUserEdit className="me-2"/>Regístrate</Link>
                </li>
            </ul>

        </div>


    )
}

export default Dashboard

