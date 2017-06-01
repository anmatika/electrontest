
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoloniexActions from '../actions/poloniex';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import ShowBalances from '../components/Poloniex/ShowBalances';
import Ticker from '../components/Poloniex/Ticker';
import OpenOrders from '../components/Poloniex/OpenOrders';
import Buy from '../components/Poloniex/Buy';
import Sell from '../components/Poloniex/Sell';
import Message from '../components/Message';

let boundActionCreators; 

class PoloniexPage extends React.Component {
      componentDidMount() {
            this.props.setInitialValues();
      }

      render() {
            return (
            <div>
                  <Link to="/">
                        <i className="fa fa-arrow-left fa-3x" />
                  </Link>
                  <Message {...this.props} />
                  <Tabs>
                        <TabList>
                              <Tab>Balances</Tab>
                              <Tab>Ticker</Tab>
                              <Tab>Open orders</Tab>
                              <Tab>Buy</Tab>
                              <Tab>Sell</Tab>
                        </TabList>
                        <TabPanel>
                              <ShowBalances />
                        </TabPanel>
                        <TabPanel>
                              <Ticker {...this.props} />
                        </TabPanel>
                        <TabPanel>
                              <OpenOrders {...this.props} />
                        </TabPanel>
                        <TabPanel>
                              <Buy {...this.props} />
                        </TabPanel>
                        <TabPanel>
                              <Sell {...this.props} />
                        </TabPanel>
                  </Tabs>
            </div>);
      }

}

function mapStateToProps(state) {
    return {
      state: state.poloniex
    };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(PoloniexActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PoloniexPage);
