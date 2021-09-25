import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/contains/home/home';
import Service from './components/contains/service/service';
import Layout from './layout/layout';
import './App.css';

const Logout = React.lazy(()=> {
  return import('./components/auth/logout');
});

function App(){
 /* useEffect( ()=>{
    props.authAttempt();
  }, [])*/

  let routes = (
     <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/service/:id"  component={Service}/>
    </Switch>
  );



  return (
    
    <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
       // <Layout/>
  );
}
export default withRouter(App);
//export default App;
