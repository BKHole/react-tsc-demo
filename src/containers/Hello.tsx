import Hello from '../components/Hello';
import * as actions from '../actions';
import {StoreState} from '../types';
import {Dispatch} from "redux";
import {connect} from 'react-redux';

const mapStateToProps = (state: StoreState): { enthusiasmLevel: number } => ({
    enthusiasmLevel: state
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);