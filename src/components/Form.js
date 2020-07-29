import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: null,
            lname: null,
            email: null,
            gender: 'Male',
            address: null,
            deliveryOption: 'Cash On Delivery'
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className='row'>
                <form className='form'>
                <span className='subheading'>Fill Your Details</span>
                <br />
                    <label htmlFor='fname'>First Name:</label><input type='text' name='fname' onChange={this.handleChange} placeholder='First Name' />
                    <br />
                    <label htmlFor='lname'>Last Name:</label><input type='text' name='lname' onChange={this.handleChange} placeholder='Last Name' />
                    <br />
                    <label htmlFor='address'>Address:</label><textarea type='text' name='address' onChange={this.handleChange} placeholder='Address...' rows='10' cols='40'></textarea>
                    <label htmlFor='email'>E-mail:</label><input type='email' name='email' placeholder='E-Mail' onChange={this.handleChange} />
                    <br />
                Gender:
                <br />
                    <label>Male<input type='radio' name='gender' value='Male' onChange={this.handleChange} checked/></label>
                    <label>Female<input type='radio' name='gender' value='Female' onChange={this.handleChange} /></label>
                    <label>Other<input type='radio' name='gender' value='Other' onChange={this.handleChange} /></label>
                </form>
                <div  style={{float :'right',margin:'0px'}}>
                    <span className='subheading'>Filled Details</span><br />
                    First Name:{this.state.fname} <br />
                    Last Name:{this.state.lname}<br />
                    Address: {this.state.address}<br />
                    Gender: {this.state.gender}<br />
                    Email: {this.state.email}<br />
                </div>
            </div>
        )
    }
}

export default Form
