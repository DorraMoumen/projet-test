import React from 'react';
import './App.css';
import NavPage from './components/NavPage';
import Description from './components/Description';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2'; 
import Sidebar from './components/Sidebar';
import Navbar1 from './components/Navbar1';
//import Home from './components/Home';
import Accueil from './components/Accueil';
import UploadFile from './components/UploadFile';

import Profil from './components/Profil';

import Login from './components/Login'

import UploadFiles from './components/uploadfiles';


import SignUp from './components/Signup';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    

    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path='/' element={<Home/>} />
        <Route path="/about" component={<About/>} />
        <Route path='/users' render={(props)=> <Users {...props}/>} />  
        
        </Switch> 
  
        
      </div>
  
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return<div> 
  <h2>About</h2>
  <button> Go Back </button>
  </div>
  ;
}

function Users() {
  return <h2>Users</h2>;
}


    

export default App;

// <Profil utilisateur={'Dorra Mn '} email={'dmoumen011@gmail.com'} />
    

//     <UploadFiles/>
//     <SignUp/>
//     <Accueil/>
 

//     <Navbar1/>
//     <Sidebar/>
//     <Footer1/>
//     <Footer2/>
//     <section className="container">
//            <section className="col1">
//            <img src={logo} alt="logo" />
           
//            </section>
//     <section className="col2">
//     <NavPage/>
//     <Description/>
//     <Footer/> 
    
//     </section>
// </section>

    
     

