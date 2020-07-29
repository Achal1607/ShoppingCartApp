import React, { Component } from 'react'
import firebase from './firebase'
import { auth, provider } from './firebase.js';

class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: this.props.location.state.selected,
            user: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const itemsRef = firebase.database().ref('items')
        const item = {
            Ordered: this.state.selected
        }
        itemsRef.push(item);
        return window.location.href = "locathost:3000/order";
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }

    render() {
        const total = this.props.location.state.total
        return (
            <>
                <h1 className='heading'>Checkout</h1>
                <div className='row' style={{textAlign:'center'}}>
                    {this.state.user ?
                        <div>
                            <div>
                                <img src={this.state.user.photoURL} style={{width:'100px',height:'100px'}} alt='Profile Pic'/>
                                <span className='item'>{this.state.user.displayName}</span>
                            </div>
                        </div>
                        :
                        <div>
                            <p className='item'>You must be logged in to complete your order.</p>
                        </div>
                    }
                </div>
                <a href='/'><button className='button' style={{marginTop:'5px'}}>Back To Menu</button></a>

                {this.state.user ?
                        <button onClick={this.logout} className='button'>Log Out</button>
                        :
                        <button onClick={this.login} className='button'>Log In With Google</button>
                    }
                <div className='item'>
                    <h2>Order Summary</h2>
                    <table style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.selected.map(item =>
                                <tr className='item' key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>&#8377;{item.price * item.quantity}</td>
                                </tr>)}
                        </tbody>
                    </table>
                    <span className='sub'>Total:&#8377;{total}</span>
                    {this.state.user?<form method='get' onSubmit={this.handleSubmit}><button type='submit' className='button'>Place Order</button></form>:null}
                </div>
            </>
        )
    }
}

export default Checkout
