import React, { Component } from 'react'
import {connect} from 'react-redux'

class LifeCycleComp extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
    }
    componentDidMount(){ 
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 1000)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps: ', nextProps)
        console.log('thisState: ', this.state)
        console.log('nextState: ', nextState)
        console.groupEnd()

        if(nextState.count > 4) {
            return false
        }
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render')
        return (
            <>
                <p>Halaman LifeCycle</p>
                <button onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr />
                {/* <p>Total Order: {this.props.order}</p> */}
                <p>Total Order: {0}</p>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

// export default connect(mapStateToProps)(LifeCycleComp)
export default LifeCycleComp
