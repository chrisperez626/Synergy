import React, {Component} from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Whiteboard from "./components/Whiteboard";
import ProjectPage from "./components/ProjectPage";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Content1 from "./components/Content1";
import API from './utils/API';
import Footer from "./components/Footer";
import MainMastDetails from "./components/MainMastDetails";
import "./App.css";




class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    email: "",
    password: "",
  }

  setUser = (user) => {
    console.log("USER", user);
    this.setState({
      user,
      loggedIn: true
    })
  }

  handleLogout = () => {
    API.logout()
    .then(() => {
      console.log("LOGOUT SUCCESS!");
      this.setState({
        user: null,
        loggedIn: false
      });
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    API.getCurrentUser()
    .then(res => {
      this.setState({
        user: res.data,
        loggedIn: res.data || false
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

 

  render() {
    console.log("in app js", this.state.user)
    return (
      <Router>
        <div>

          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout} />

    {/* <Route exact path="/" render={() => <Masthead loggedIn={this.state.loggedIn} logout={this.handleLogout} user={this.state.user} text="main page"><MainMastDetails /> </Masthead>}/> */}

     <Route exact path="/" render={() => <Main  loggedIn={this.state.loggedIn}
                                                logout={this.handleLogout}
                                                user={this.state.user} 
                                                mastHeadContent={<MainMastDetails />} 
                                                mainContent={<SignupForm />}/>} />


    <Route exact path="/signup" render={() => <Main
                                                mastHeadContent={<MainMastDetails />} 
                                                mainContent={<SignupForm />}/>} />

    <Route exact path="/login" render={() => <Main
                                                mastHeadContent={<MainMastDetails />} 
                                                mainContent={<Login setUser={this.setUser} />} />}/>


    <Route exact path="/whiteboard" render={() => <Main
                                                mastHeadContent={<MainMastDetails />} 
                                                mainContent={<Whiteboard />}/>} />


<Route exact path="/projectpage" render={() => <Main
                                                mastHeadContent={<MainMastDetails />} 
                                                mainContent={<ProjectPage loggedIn={this.state.loggedIn} />} />}/>


          <Footer loggedIn={this.state.loggedIn} logout={this.handleLogout} />

        </div>
      </Router>
    );
  }
}


const Main = props => {
    return (
        <div>
            
            <Masthead>{props.mastHeadContent}</Masthead>
          
            <Content1>
                {props.mainContent}
            </Content1>
        </div>
    );
};

export default App;
