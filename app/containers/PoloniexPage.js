import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Poloniex from '../components/Poloniex';
import * as PoloniexActions from '../actions/poloniex';

function mapStateToProps(state) {
    return {
      state: state.poloniex
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PoloniexActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Poloniex);
