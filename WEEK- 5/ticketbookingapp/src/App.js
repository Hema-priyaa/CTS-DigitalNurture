import React, { Component } from "react";
import "./App.css";

import Greeting from "./Components/Greeting";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

class App extends Component {

    constructor() {

        super();

        this.state = {

            isLoggedIn: false

        };

    }

    handleLogin = () => {

        this.setState({

            isLoggedIn: true

        });

    };

    handleLogout = () => {

        this.setState({

            isLoggedIn: false

        });

    };

    render() {

        const isLoggedIn = this.state.isLoggedIn;

        let button;

        if (isLoggedIn) {

            button = <LogoutButton onClick={this.handleLogout} />;

        }

        else {

            button = <LoginButton onClick={this.handleLogin} />;

        }

        return (

            <div className="App">

                <Greeting isLoggedIn={isLoggedIn} />

                <br />

                {button}

            </div>

        );

    }

}

export default App;