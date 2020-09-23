import React, { Component } from "react";
import CryptoService from "../services/CryptoService";

class ListCryptoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: [],
      message: null,
    };

    this.addCrypto = this.addCrypto.bind(this);
    this.reloadCryptoList = this.reloadCryptoList.bind(this);
    this.deleteCrypto = this.deleteCrypto.bind(this);
  }

  componentDidMount() {
    this.reloadCryptoList();
  }

  reloadCryptoList() {
    CryptoService.getCrypto()
    .then((res) => {
     this.setState({ crypto: res.data });
    });
    
  }

  addCrypto() {
    window.localStorage.removeItem("cryptoId");
  }

  deleteCrypto(id) {
    CryptoService.deleteCrypto(id).then(_ => {
      this.setState({
        crypto: this.state.crypto.filter((crypto) => crypto.id !== id),
      });
    });
  }

  render() {
    return (
      <div className=" container-sm card  bg-dark">
        <div className="container-sm card-header bg-primary text-light text-center py-2 ">
          <h2>Your portfolio items</h2>
        </div>
        <div className="container-sm card-body bg-light text-dark ">
          <div className="table-responsive">
            <table className="table table-striped table-bordered   ">
              <thead>
                <tr>
                  <th>Cryptocurrency</th>
                  <th>Amount</th>
                  <th>Date of purchase</th>
                  <th>Wallet location</th>
                  <th>Current market value(EUR)</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {this.state.crypto.map((crypto) => (
                  <tr key={crypto.id}>
                    <td>{crypto.cryptocurrency}</td>
                    <td>{crypto.amount}</td>
                    <td>{crypto.dateOfPurchase}</td>
                    <td>{crypto.walletLocation}</td>
                    <td>{crypto.currentMarketValue}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          if (
                            window.confirm(
                              "Are you sure you wish to delete this item?"
                            )
                          ) {
                            this.deleteCrypto(crypto.id);
                          }
                        }}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCryptoComponent;
