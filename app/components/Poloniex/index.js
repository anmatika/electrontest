import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import ShowBalances from './ShowBalances';
import Ticker from './Ticker';
import OpenOrders from './OpenOrders';
import Buy from './Buy';
import Message from '../Message';

class Poloniex extends React.Component {
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
                        </TabList>
                        <TabPanel>
                              <ShowBalances {...this.props} />
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
                  </Tabs>
            </div>);
      }
 }

export default Poloniex;
