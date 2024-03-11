import { useOutletContext } from '@remix-run/react'
import styles from '../styles/carrito.css'
import { useEffect, useState } from 'react'
import { useTransition } from 'react'


export function links() {
    return [
        {
            rel : "stylesheet",
            href : styles
        }
    ]
}

export function meta() {
    return [
        {title: 'GuitaLA - Carrito de Compras'},
        {descripction : 'Venta de guitarras, música. blog, carrito de compras, tienda'}
    ]
}

function Carrito() {

    const transition = useTransition()

    const [total, setTotal] = useState(0)
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

    useEffect(() => {
        const stotal = carrito.reduce( (total, guitarra) => 
            total + (guitarra.precio * guitarra.cantidad), 0)
            setTotal(stotal)
    }, [carrito])

    return (
        <>
            {transition.state === 'loading' ? (
                <div>Loading...</div>
            ) : (
            <main className="contenedor">
                <h1 className="heading"> Carrito de compras </h1>

                <div className="contenido">
                    <div className='carrito'>
                        <h2>Articulos</h2>

                        {carrito?.length === 0 ? 'Carrito Vacio' : (
                            carrito?.map ( producto => (
                                <div key={producto.id} className='producto'>
                                    <div>
                                        <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                                    </div>
                                    <div>
                                        <p className='nombre'>{producto.nombre}</p>
                                        <p> Cantidad: </p>
                                        <select 
                                            value={producto.cantidad} 
                                            className="select"
                                            onChange={ e => actualizarCantidad({
                                                cantidad : +e.target.value,
                                                id : producto.id
                                            })}
                                            >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <p className='precio'>$ {producto.precio}</p>
                                        <p className='subtotal'>Subtotal: $ <span>{producto.precio * producto.cantidad} </span></p>
                                    </div>
                                    <button
                                        type='button'
                                        className='btn-eliminar'
                                        onClick={() => eliminarGuitarra(producto.id)}
                                    >X</button>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className="resumen">
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: ${total}</p>

                    </aside>

                </div>

            </main>
            )}
        </>
    )
}

export default Carrito
