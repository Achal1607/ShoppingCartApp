import React, { Component } from 'react'
import './Item.css'

class Items1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSelected: false,
            message: 'Add To Cart',
            quantity: 0,
            id: this.props.item.id
        }
    }

    handleClick = () => {
        if (this.state.isSelected === false) {
            this.setState(prevState => ({
                isSelected: !prevState.isSelected,
                message: 'Remove From Cart',
                quantity: 1
            }),()=>this.props.onClick(this.state))
        }
        else {
            this.setState((prevState) => ({
                isSelected: !prevState.isSelected,
                message: 'Add To Cart',
                quantity: 0
            }),()=>this.props.onClick(this.state))
        }
    }

    incrementQuantity = () => {
        if (this.state.quantity > 0) {
            this.setState((prevState) => ({
                quantity: prevState.quantity++
            }),()=>this.props.onClick(this.state))
        }
        else {
            this.setState({
                message: 'Add To Cart',
                isSelected: false
            },()=>this.props.onClick(this.state))
        }
    }

    decrementQuantity = () => {
        if (this.state.quantity >= 1) {
            this.setState((prevState) => ({
                quantity: prevState.quantity--
            }),()=>this.props.onClick(this.state))
        }
        else {
            this.setState({
                message: 'Add To Cart',
                isSelected: false
            },()=>this.props.onClick(this.state))
        }
    }

    render() {
        return (
            <>
                <tbody>
                    <tr><td className='item'>{this.props.item.name}</td>
                        <td className='item'>&#8377;{this.props.item.price}</td>
                        <td>
                            {this.state.quantity === 0 ? <button className='button' onClick={this.handleClick}>Add To Cart</button> : <button className='button' onClick={this.handleClick}>Remove From Cart</button>}

                            <button className='button' onClick={this.decrementQuantity}>-</button>
                            <span className='quantity'>{this.state.quantity}</span>
                            <button className='button' onClick={this.incrementQuantity}>+</button>
                        </td>
                    </tr>
                </tbody>
            </>
        )
    }
}

export default Items1
