import React from 'react';
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import {RightNav} from "./Components/RightNav/RightNav";
import {Footer} from "./Components/Footer/Footer";
import "./Styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Content/>
        <RightNav/>
        <Footer/>
      </div>
    );
  }
}

export default App;
