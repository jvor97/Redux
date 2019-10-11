import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        console.log(this.props.storeResults);
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/> 
            <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
            <ul>
                {this.props.storeResults.map(result => (<li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.value}</li>))}
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
     ctr: state.count.counter,
     storeResults : state.rslt.results
     //in the middle its world as u define it at index in combineReducer
    };
};

//toto vlastne znemena, ze state c menom counter v redux(v store) sa tuto vola ctr

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter : () => dispatch({type: actionTypes.ADD, value:5}),
        onSubtractCounter : () => dispatch({type: actionTypes.SUBTRACT, value:10}),
        onStoreResult : (result) => dispatch({type: actionTypes.STORE_RES, result: result}),
        onDeleteResult : (id) => dispatch({type: actionTypes.DELETE_RES, id: id })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);