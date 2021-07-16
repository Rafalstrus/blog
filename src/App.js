import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/login/login'
import Main from './components/main/main'
import AddPost from './components/add-Post/add-Post';


//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path = "/">
    <Login />
    </Route>
    <Route path = "/d">
    <Login />
    </Route>
      </Routes>
    </Router>
  );
}

export default App;
