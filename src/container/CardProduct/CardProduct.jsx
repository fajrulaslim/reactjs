import React, { Component } from 'react'
import Counter from '../../pages/Product/Counter'
import './CardProduct.css'

class CardProduct extends Component {
    // state = {
    //     order: 0
    // }
    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }
    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })
       
    // }
    // handleMinus = () =>  {
    //     if(this.state.order > 0) 
    //     this.setState({
    //         order: this.state.order - 1
    //     }, () => {
    //         this.props.onCounterChange(this.state.order)
    //     })
    // }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://cdn.motor1.com/images/mgl/6mGYN/s3/2021-honda-city-hatchback.jpg" alt="" />
                </div>
                <p className="product-title">Honda City Terbaru 2021</p>
                <p className="product-price">350.000.000</p>
                {/* <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div> */}
                {/* <Counter onCounterChange={(value) => this.props.onCounterChange(value)} /> */}
                <Counter />
            </div>
        )
    }
}

export default CardProduct
