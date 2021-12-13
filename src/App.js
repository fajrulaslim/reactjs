import logo from './logo.svg';
import React, {Component, createContext} from 'react'
import './App.css';
// import Home from './container/Home/Home';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import BlogPost from './pages/BlogPost/BlogPost';
import Product from './pages/Product/Product';
import LifeCycleComp from './pages/LifeCycleComp/LifeCycleComp';
import Youtube from './pages/Youtube/Youtube';
import DetailPost from './pages/BlogPost/DetailPost';
import GlobalProvider from './Context/context';
import Hooks from './pages/Hooks/Hooks';

// class App extends Component {
//   state = {
//     totalOrder: 0
//   }
//   dispatch = (action) => {
//     if(action.type == "PLUS_ORDER"){
//       return this.setState({
//         totalOrder: this.state.totalOrder+1
//       })
//     }
//     if(action.type == "MINUS_ORDER"){
//       if(this.state.totalOrder > 0)
//         return this.setState({
//           totalOrder: this.state.totalOrder-1
//         })
//     }
//   }

//   render() {
//     return (  
//       <>
//         <p>Welcome to React!</p>
//         <hr />
//         {/* CONTEXT */}
//         <BrowserRouter>
//             <Provider value={
//               {
//                 state: this.state,
//                 dispatch: this.dispatch
//               }
//             }>
//               <div className="navigation">
//                 <Link to="/">Blog Post</Link>
//                 <Link to="/product">Product</Link>
//                 <Link to="/lifecycle">Lifecycle</Link>
//                 <Link to="/youtube">Youtube</Link>
//               </div>
//               <Route path="/" exact component={BlogPost} />
//               <Route path="/detail-post/:postID" component={DetailPost} />
//               <Route path="/product" component={Product} />
//               <Route path="/lifecycle" component={LifeCycleComp} />
//               <Route path="/youtube" component={Youtube} />
//             </Provider>
//         </BrowserRouter>
//       </>
//     )
//   }
// }

function App() {
  return (
   <div>
     <p>Welcome to React!</p>
     <hr />
     <BrowserRouter>
         <div className="navigation">
           <Link to="/">Blog Post</Link>
           <Link to="/product">Product</Link>
           <Link to="/lifecycle">Lifecycle</Link>
           <Link to="/youtube">Youtube</Link>
           <Link to="/hooks">Hooks</Link>
         </div>
         <Route path="/" exact component={BlogPost} />
         <Route path="/detail-post/:postID" component={DetailPost} />
         <Route path="/product" component={Product} />
         <Route path="/lifecycle" component={LifeCycleComp} />
         <Route path="/youtube" component={Youtube} />
         <Route path="/hooks" component={Hooks} />
     </BrowserRouter>
   </div>
 );
}

// export default App;
export default GlobalProvider(App)
 