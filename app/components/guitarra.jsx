import { Link } from '@remix-run/react'
import React from 'react'

function Guitarra({guitarra}) {

  const  { descripcion, imagen, precio, url, nombre } = guitarra


  // Consulta del Atributo COMENTARIO con la forma Array
  /* const descriptionText = descripcion.map( desc => {
    return desc.children.map( descript => {
      return descript.text
    })
  }) */

  return (
    <div className='guitarra'>
      <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
      <div className='contenido'>
        <h3>{nombre}</h3>
        {/* <p className='descripcion'>{descriptionText}</p><hr /> */}
        <p className='descripcion'>{descripcion[0].children[0].text}</p>
        <p className='precio'>{precio}</p>
        <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link> 
      </div>
    </div>
  )
}

export default Guitarra
