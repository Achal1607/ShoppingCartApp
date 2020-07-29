import React from 'react'
import './main.css'
import { Link, withRouter } from 'react-router-dom'

function Cart(props) {
    let sum = 0
    const display = props.selected.filter(item => item.quantity > 0)
    display.map(item => sum += item.price * item.quantity)
    /*    const handleSubmit = () => {
            console.log(display)
            return <Checkout selected={display} />
        }*/
    return (
        <div className='cart'>
            <span className='subheading'>Cart</span>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {display.map(item =>
                        <tr className='item' key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>&#8377;{item.price * item.quantity}</td>
                        </tr>)}
                </tbody>
            </table>
            <span className='sub'>Subtotal:&#8377;{sum}</span>
            <br />
            {display.length!== 0 ?
                <Link to={{
                    pathname: '/checkout',
                    state: {
                        selected: display,
                        total: sum
                    }
                }} >
                    <button type='submit' className='checkout'>Checkout &#8658;</button>
                </Link> : <button type='submit' className='checkout' disabled='true'>Checkout &#8658;</button>
            }
        </div >
    )
}

export default withRouter(Cart)