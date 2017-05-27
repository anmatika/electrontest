import React from 'react';
import { Link } from 'react-router-dom';
import ShowBalances from './ShowBalances';
import Ticker from './Ticker';
import OpenOrders from './OpenOrders';

class Poloniex extends React.Component {
      componentDidMount() {
            console.log('mounted')
            this.props.setInitialValues();
      }

      render() { 
            return (
            <div>
                  <ShowBalances {...this.props} />
                  <Ticker {...this.props} />
                  <OpenOrders {...this.props} />

                  <Link to="/">
                        <i className="fa fa-arrow-left fa-3x" />
                  </Link>
            </div>);
      }
 };

export default Poloniex;
