import React, { Component } from 'react'
import Items1 from './Items1'
import MenuData from './MenuData'
import Cart from './Cart'

class Menu1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: MenuData
        }
    }

    items = (items) => {

        this.setState(prevState => {
            const updatedMenu = prevState.menu.map(item => {
                if (item.id === items.id) {
                    item.quantity = items.quantity
                }
                return item
            })
            return { menu: updatedMenu }
        })
    }

    render() {
        const menuList = this.state.menu.map(item => <Items1 key={item.id} item={item} onClick={this.items} />)
        return (
            <>
                <h1 className='heading'>Menu</h1>
                <div className='row'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {menuList}
                    </table>
                    <Cart selected={this.state.menu} />
                </div>
            </>
        )
    }
}

export default Menu1
