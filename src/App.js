import React, { Suspense, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/contains/home'
import Services from './components/contains/services'
import Layout from './layout/layout';


const Logout = React.lazy(()=> {
  return import('./components/auth/logout');
});

function App(){
 /* useEffect( ()=>{
    props.authAttempt();
  }, [])*/

  let routes = (
    <Router>
     <Switch>
          <Route path="/" exact component={Home}/>
          <Redirect to="/"/>
          <Route path="/services" component={Services}/>
    </Switch>
  </Router>
  );



  return (
    
    <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
       // <Layout/>
  );
}
//export default withRouter(App);
export default App;
