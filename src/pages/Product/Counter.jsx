import React, { Component } from 'react'
import {connect} from 'react-redux'
import ActionType from '../../redux/reducer/globalActionType'
import { RootContext } from '../../App'
import { GlobalConsumer } from '../../Context/context'

export class Counter extends Component {
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
    
    // render() {
    //     return (
    //         <div className="counter">
    //             <button className="minus" onClick={this.props.handleMinus}>-</button>
    //             <input type="text" value={this.props.order} />
    //             <button className="plus" onClick={this.props.handlePlus}>+</button>
    //         </div>
    //     )
    // }
    // render() {
    //     return (
    //         <RootContext.Consumer>
    //             {
    //                 value => {
    //                     return (
    //                         <div className="counter">
    //                             <button className="minus" onClick={() => value.dispatch({type: "MINUS_ORDER"})}>-</button>
    //                             <input type="text" value={value.state.totalOrder} />
    //                             <button className="plus" onClick={() => value.dispatch({type: "PLUS_ORDER"})}>+</button>
    //                         </div>
    //                     )
    //                 }
    //             }
                
    //         </RootContext.Consumer>
    //     )
    // }
    render() {
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({type: "MINUS_ORDER"})}>-</button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({type: "PLUS_ORDER"})}>+</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }
// const mapDispatchtoProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER}),
//         handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER})
//     }
// }

// export default connect(mapStateToProps, mapDispatchtoProps)(Counter)
export default GlobalConsumer(Counter)