import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/nav/nav.component'
import Login from './components/login/login'
import Main from './components/main/main'
import AddPost from './components/add-Post/add-Post';
import Register from './components/register/register';


//in redux-store add action to get cookie value from outside (login)
/*
  TODO: update material ui to mui
*/
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
