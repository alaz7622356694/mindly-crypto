import React, { Component } from "react";
import CryptoService from "../services/CryptoService";
import ListCryptoComponent from "./ListCryptoComponent";

class FormComponent extends Component {
  markets = new Map([]);
  constructor(props) {
    super(props);
    this.state = {
      value: "bitcoin",
      amount: "",
      dateOfPurchase: "",
      walletLocation: "",
      currentMarketValue: "",
      message: null,
    };
    this.changeCryptoHandler = this.changeCryptoHandler.bind(this);
    this.changeAmountHandler = this.changeAmountHandler.bind(this);
    this.changeWalletLocationHandler = this.changeWalletLocationHandler.bind(
      this
    );
    this.changeDateOfPurchaseHandler = this.changeDateOfPurchaseHandler.bind(
      this
    );
    this.changecurrentMarketValueHandler = this.changecurrentMarketValueHandler.bind(
      this
    );
    this.addCrypto = this.addCrypto.bind(this);
    this.ShowCurrentDate = this.ShowCurrentDate.bind(this);
   

    CryptoService.getMarketsData().then((data) => {
      data.data.map((item) => {
        if (["bitcoin", "ethereum", "ripple"].includes(item.id)) {
          this.markets.set(item.id, item.current_price);
        }
      });
    });
  }
  ShowCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return date + "/" + month + "/" + year;
  };
 

  addCrypto()  {
      
    let Crypto = {
      cryptocurrency: this.state.value,
      amount: this.state.amount,
      walletLocation: this.state.walletLocation,
      dateOfPurchase: this.ShowCurrentDate(this.state.value),
      currentMarketValue: this.markets.get(this.state.value),
    };

    CryptoService.addCrypto(Crypto).then(() => {
      this.setState({ message: "Crypto added successfuly." } );
      

      
    });
    
  };

  changeCryptoHandler = (event) => {
    this.setState({ value: event.target.value });
  };
  changeAmountHandler = (event) => {
    this.setState({ amount: event.target.value });
  };
  changeWalletLocationHandler = (event) => {
    this.setState({ walletLocation: event.target.value });
  };
  changeDateOfPurchaseHandler = (event) => {
    this.setState({ dateOfPurchase: event.target.value });
  };
  changecurrentMarketValueHandler = (event) => {
    this.setState({ currentMarketValue: event.target.value });
  };


  render() {
    return (
      <div className="container">
        <div className=" container-sm card-header bg-primary info-color text-left py-2">
          <h2>Please enter an item to your portfolio</h2>
        </div>
        <div className=" container-sm card-body bg-light text-dark">
          <form onSubmit={ () =>{this.addCrypto()}} className="form" role="form">
            
              <div className="form-group ">
                {" "}
                <label>Cryptocurrency type</label>
                <select
                  className="form-control w-25"
                  value={this.state.value}
                  onChange={this.changeCryptoHandler}
                >
                  <option value="bitcoin" className="form-control" id="sel1">
                    Bitcoin
                  </option>
                  <option
                    value="ethereum"
                    placeholder="Cryptocurrency type"
                    name="CryptocurrencyType"
                    className="form-control"
                    id="sel1"
                  >
                    Ethereum
                  </option>
                  <option
                    value="ripple"
                    placeholder="Cryptocurrency type"
                    name="CryptocurrencyType"
                    className="form-control"
                    id="sel1"
                  >
                    Ripple
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label >Amount</label>
                <input 
                  type="number"
                  min="1" max="1000000.0" step="0.1"
                  placeholder="Amount"
                  name="amount"
                  className="form-control w-25 "
                  required
                  value={this.state.amount}
                  onChange={this.changeAmountHandler}
                />
              </div>
              <div className="form-group">
                <label>
                  Wallet Location
                  <textarea
                    className="form-control"
                    placeholer="Wallet Location"
                    required
                    value={this.state.walletLocation}
                    onChange={this.changeWalletLocationHandler}
                  />
                </label>
              </div>
              <br></br>
            
              <input type="submit" className="btn btn-outline-primary waves-effect" value="Add" />
          </form>
        </div>
      </div>
    );
  }
}

export default FormComponent;
