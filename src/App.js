import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TopNav from "./components/Navbar";
import '../node_modules/video-react/dist/video-react.css';
// import logo from './logo.svg';
import './css/App.css';
import Home from "./pages/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <TopNav/>
        <div className="content">
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
