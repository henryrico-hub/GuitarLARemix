
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({params}) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra( guitarraUrl )
  console.log(guitarra);

  if(guitarra.data.length === 0) {
    //console.log("No data");
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra No Encontrada 2',
      data: {},
      
    })
  }

  return guitarra
}

export function meta({data}) {
  if (!data || !data.data || data.data.length === 0){
    
    return [
      //console.log("No hay data"),
      {title: 'Guitarra No Encontrada'},
      {
        name: 'description',
        content: 'Guitarras, venta de guitarras, guitarra no encontrada '
      },
    ]
  }
  
  return [
      //console.log("Si hay data"),
      {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
      {
        name: 'description',
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
      },
  ]
}

function Guitarra() {

  const { agregarCarrito } = useOutletContext()
  const [ cantidad, setCantidad ] = useState(0)

  const guitarra = useLoaderData()
  const { nombre, precio, imagen, descripcion } = guitarra.data[0].attributes


  const handleSubmit = e => {
    e.preventDefault();

    if (cantidad < 1 ) {
      alert('Debes seleccionar una cantidad')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen : imagen.data.attributes.url,
      cantidad,
      nombre,
      precio, 

    }

    agregarCarrito(guitarraSeleccionada)

  }

  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion[0].children[0].text}</p>
        <p className="precio">{precio}</p>

        <form onSubmit={ handleSubmit } className="formulario">
          <label htmlFor="cantidad">Cantidad</label>

          <select 
            onChange={ e => setCantidad(parseInt(e.target.value))}          
            id="cantidad"
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit"
            value="Agreagar al carrito"
          />

        </form>
      </div>      
    </div>
  )
}

export default Guitarra
