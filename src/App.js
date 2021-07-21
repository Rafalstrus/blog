import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from './components/nav/nav.component'
import Login from './components/login/login'
import Main from './components/main/main'
import AddPost from './components/add-Post/add-Post';
import Register from './components/register/register';


//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router

function App() {
  return (
    <Router>
      <Navigation /> {
      // Navigation component is here, because i want to get data inside only one time
      }
      <Routes>
    <Route exact path = "/login">
    <Login />
    </Route>
    <Route exact path = "/register">
    <Register />
    </Route>
    <Route exact path = "/add-post">
    <AddPost />
    </Route>
    <Route path = "/">
    <Main />
    </Route>
      </Routes>
    </Router>
  );
}

export default App;
