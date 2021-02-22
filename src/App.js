import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div id="column_left" class="position-fixed col-md-3 col-lg-2 h-100 px-0">
            <nav class="navbar navbar-expand-md navbar-dark">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#sidebar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="sidebar">
                <ul class="nav nav-list">
                  <li class="nav-item w-100 mt-5">
                    <a
                      class="nav-link d-flex align-items-center justify-content-start my-2"
                      routerLink="../dashboard"
                    ><img
                        class="img-sm mr-3"
                        src="assets/images/icons/dashboard.svg"
                      />Dashboard</a
                    >
                  </li>
                  <li class="nav-item w-100">
                    <a
                      class="nav-link d-flex align-items-center justify-content-start my-2"
                      routerLink="../profile"
                    ><img
                        class="img-sm mr-3"
                        src="assets/images/icons/user.svg"
                      />Profile</a
                    >
                  </li>

                  <li class="nav-item w-100">
                    <a
                      class="nav-link d-flex align-items-center justify-content-start my-2"
                      routerLink="#"
                    ><img
                        class="img-sm mr-3"
                        src="assets/images/icons/fav.png"
                      />Favourites</a
                    >
                  </li>
                  <li class="nav-item w-100">
                    <a
                      class="nav-link d-flex align-items-center justify-content-start my-2"
                      routerLink="../change-password"
                    ><img
                        class="img-sm mr-3"
                        src="assets/images/icons/membership.svg"
                      />Billing</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>

        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
