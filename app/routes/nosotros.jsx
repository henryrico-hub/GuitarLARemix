import { useOutletContext } from '@remix-run/react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'



export function meta(){
  return [
    {title : 'GuitarLA - Sobre Nosotros'},
    {description: 'Ventea de guitarras, blog de musica'}
  ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'imagen'
    }
  ]
}

function Nosotros() {
  const data = useOutletContext()

  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis aliquam augue. Maecenas rhoncus enim magna, et sodales elit vestibulum eget. Mauris ultricies mi ut metus dignissim placerat. In arcu augue, finibus vitae nisi ut, accumsan ornare ex. Nulla in ante sed tellus euismod egestas. Suspendisse feugiat semper est, at imperdiet velit auctor et. Phasellus mollis eros ut enim vehicula sagittis. Nam auctor feugiat dapibus. Nullam risus ligula, fermentum eu lectus quis, rhoncus feugiat odio</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis aliquam augue. Maecenas rhoncus enim magna, et sodales elit vestibulum eget. Mauris ultricies mi ut metus dignissim placerat. In arcu augue, finibus vitae nisi ut, accumsan ornare ex. Nulla in ante sed tellus euismod egestas. Suspendisse feugiat semper est, at imperdiet velit auctor et. Phasellus mollis eros ut enim vehicula sagittis. Nam auctor feugiat dapibus. Nullam risus ligula, fermentum eu lectus quis, rhoncus feugiat odio</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
