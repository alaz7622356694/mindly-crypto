import React, { Component } from "react";

class InfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

  render() {
    return (
      <div className="container-fluid bg-primary p-5">
        <div class="card-deck text-light">
          <div class="card bg-dark">
            <div class="card-header">
              <img
                class="img-fluid mx-auto d-block"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bsv-icon-small.png/150px-Bsv-icon-small.png"
                alt="Cinque Terre"
              ></img>
            </div>
            <div class="card-body text-justify">
              <p class="card-text align-left">
                Bitcoin is a cryptocurrency invented in 2008 by an unknown
                person or group of people using the name Satoshi Nakamoto and
                started in 2009 when its implementation was released as
                open-source software.
              </p>
            </div>
          </div>

          <div class="card bg-dark">
            <div class="card-header">
              <img
                class="img-fluid mx-auto d-block"
                src="http://www.userlogos.org/files/ethereum1.png"
                alt="Cinque Terre"
              ></img>
            </div>
            <div class="card-body text-justify">
              <p class="card-text">
                Ethereum is a technology that lets you send cryptocurrency to
                anyone for a small fee. It also powers applications that
                everyone can use and no one can take down. It's the world's
                programmable blockchain.
              </p>
            </div>
          </div>

          <div class="card bg-dark">
            <div class="card-header">
              <img
                class="img-fluid mx-auto d-block"
                src="http://coinhubdesk.com/my_content/uploads/2018/04/ripple_logo_small.png"
                alt="Cinque Terre"
              ></img>
            </div>
            <div class="card-body text-justify">
              <p class="card-text">
                Ripple is a technology that acts as both a cryptocurrency and a
                digital payment network for financial transactions. It was first
                released in 2012 and was co-founded by Chris Larsen and Jed
                McCaleb.
              </p>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

export default InfoComponent;
