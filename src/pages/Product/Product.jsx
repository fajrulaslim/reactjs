import React, { Component } from 'react'
import CardProduct from '../../container/CardProduct/CardProduct'
import './Product.css'
import {connect} from 'react-redux'
import { RootContext } from '../../App'
import { GlobalConsumer } from '../../Context/context'

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    // CONTEXT
    // render() {
    //     return (
    //         <RootContext.Consumer>
    //             {
    //                 value => {
    //                     return (
    //                         <>
    //                             <div className="header ">
    //                                 <div className="logo">
    //                                     <img src="" alt="logo" />
    //                                 </div>
    //                                 <div className="troley">
    //                                     <img src="" alt="troley" />
    //                                     {/* <div className="count">{this.props.order}</div> */}
    //                                     <div className="count">{value.state.totalOrder}</div>
    //                                 </div>
    //                             </div>
    //                             {/* <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} /> */}
    //                             <CardProduct />
    //                         </>
    //                     )
    //                 }
    //             }
    //         </RootContext.Consumer>
    //     )
    // }

    render() {
        return (
            <>
                <div className="header ">
                    <div className="logo">
                        <img src="" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="" alt="troley" />
                        {/* <div className="count">{this.props.order}</div> */}
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                {/* <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} /> */}
                <CardProduct />
            </>
        )
    }

    // render() {
    //     return (
    //     <>
    //         <div className="header ">
    //             <div className="logo">
    //                 <img src="" alt="logo" />
    //             </div>
    //             <div className="troley">
    //                 <img src="" alt="troley" />
    //                 {/* <div className="count">{this.props.order}</div> */}
    //                 <div className="count">{0}</div>
    //             </div>
    //         </div>
    //         {/* <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} /> */}
    //         <CardProduct />
    //     </>
    //     )
    // }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product)
export default GlobalConsumer(Product)
