import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Crypter from '../components/Crypter';
import * as CrypterActions from '../actions/crypter';

function mapStateToProps(state) {
    return {
      state: state.crypter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CrypterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Crypter);
