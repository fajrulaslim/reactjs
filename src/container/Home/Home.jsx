 import React, {Component} from 'react'
import BlogPost from '../BlogPost/BlogPost';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
 
 class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 2000)   
    }
    render() {
        return (
                <>
                    <YoutubeComp 
                        time="7.12" 
                        title="One Piece Eps 1" 
                        desc="200x ditonton, 5 hari yang lalu"
                    />
                    <YoutubeComp 
                        time="5.00" 
                        title="One Piece Eps 2" 
                        desc="350x ditonton, 3 hari yang lalu"
                    />
                    <YoutubeComp 
                        time="9.34" 
                        title="One Piece Eps 3" 
                        desc="248x ditonton, 2 hari yang lalu"
                    />
                    <YoutubeComp />
                    <p>Counter</p>
                    <hr />
                    <Product/> 
                    <p>LifeCycle Component</p>
                    <hr />
                    {
                        this.state.showComponent ? <LifeCycleComp/> : null
                    }
                    <BlogPost/>
                </>
        );
     }
 }

 export default Home