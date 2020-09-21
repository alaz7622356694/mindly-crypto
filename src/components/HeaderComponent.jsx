import React, { Component } from "react";

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a class="navbar-brand" href="#">
              Mindly
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-between sticky-top"
              id="navbarCollapse"
            >
              <div class="navbar-nav"></div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
