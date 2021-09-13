import logo from './logo.svg';
import './App.css';
import { Breadcrumb } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home, Data}  from './pages'


function App() {
  return (
    <Router>
    <div className="app-container bg-light">  
      <div className="container pt-4 pb-4">   
      <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">
        Data
      </Breadcrumb.Item> 
    </Breadcrumb>
      </div>
      <div className="container pt-4 pb-4">   
      <Switch> 
        <Route path="/data">
          <Data />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
      
    </div>
  </Router>
  );
}

export default App;
