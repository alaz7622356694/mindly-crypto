import React, { Component } from "react";

class HeaderComponent extends Component {
  render() {
    return (
      
        <header >
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark  pmd-navbar pmd-z-depth">
            <a className="navbar-brand navbar-fixed-top" href="https://alaz7622356694.github.io/mindly-crypto">
              <h4 className="text-primary">Mindly</h4>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            
          </nav>
        </header>
      
    );
  }
}

export default HeaderComponent;
