import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Calendario() {

  const [bloques, setBloques] = useState([
    {
      dia: "Lunes",
      hora: "8:30-9:10",
      evento: "Bases de datos"
    },
    {
      dia: "Lunes",
      hora: "9:11-9:50",
      evento: "Bases de datos"
    },
    {
      dia: "Martes",
      hora: "8:30-9:10",
      evento: "Programacion de algoritmos"
    }
  ])
  return (
    <div className='row row-cols-1'>



      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-bs-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Funciona
        </div>
      </div>



      <table className="table">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Dia</th>
            {/* <th scope="col" className='text-center'>Bloque</th> */}
            <th scope="col" className='text-center'>Horario</th>
            <th scope="col" className='text-center'>Evento</th>
          </tr>
        </thead>
        <tbody>
          {
            bloques.map(i => {
              return (
                <tr key={i}>
                  <td className='text-center'>{i.dia}</td>
                  {/*<td className='text-center'>{i.dia}</td>*/}
                  <td className='text-center'>{i.hora}</td>
                  <td className='text-center'>{i.evento}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
export default Calendario