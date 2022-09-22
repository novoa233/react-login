import React from 'react';
import Alert from 'react-bootstrap/Alert';


function Landing() {
    return (
        <Alert variant="danger">
          <Alert.Heading>Es hora de actuar</Alert.Heading>
          <p> NECESIDAD</p>
          <p>
         Proteger tus sistemas frente a incidentes que pueden causar
         importantes pérdidas a tu organización.
          </p>
          <p>SOLUCION</p>
          <p>
          Formación y concienciación de tus empleados que sumado a una 
          monitorización continua y proactiva de alertas de seguridad 24/7 
          permite hacer frente a las amenazas más avanzadas y tener tus 
          sistemas actualizados, parcheados y protegidos.
          </p>
          <p>RESULTADO</p>
          <p>
          Máxima ciberseguridad para pymes para evitar y prevenir incidentes 
          de seguridad sin necesidad de conocimientos previos y de forma fácil y sencilla.
          </p>
          <hr />
          <p className="mb-0">
            Regístrate y Descarga nuestra guía "10 Consejos de Ciberseguridad para Pymes"
          </p>
        </Alert>
        
      );
    }
  


export default Landing