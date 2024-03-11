import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from "../components/listado-guitarras";


export function meta(){
  return [
    {
      title: 'GuitaLA - Tienda de Guitarras',
      description: 'GuitarLA - Nuestra coleccino de guitarras'
    }
  ]
}

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()
  //console.log(guitarras)

  return (
      <ListadoGuitarras 
        guitarras={guitarras}
      />
  )
}

export default Tienda
