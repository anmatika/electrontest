import React from 'react';
import { Link } from 'react-router-dom';
import ShowBalances from './ShowBalances';
import Ticker from './Ticker';
import OpenOrders from './OpenOrders';

class Poloniex extends React.Component {
      componentDidMount() {
            this.props.setInitialValues();
      }

      render() {
            return (
            <div>
                  <Link to="/">
                        <i className="fa fa-arrow-left fa-3x" />
                  </Link> <ShowBalances {...this.props} />
                  <Ticker {...this.props} />
                  <OpenOrders {...this.props} />

            </div>);
      }
 }

export default Poloniex;
