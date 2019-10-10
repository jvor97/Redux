import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
            <button onClick={this.props.onStoreResult}>Store result</button>
            <ul>
                {this.props.storeResults.map(result => (<li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.value}</li>))}
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
     ctr: state.counter,
     storeResults : state.results
    };
};

//toto vlastne znemena, ze state c menom counter v redux(v store) sa tuto vola ctr

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter : () => dispatch({type: 'DECREMENT'}),
        onAddCounter : () => dispatch({type: 'ADD', value:5}),
        onSubtractCounter : () => dispatch({type: 'SUBTRACT', value:10}),
        onStoreResult : () => dispatch({type: 'STORE_RES'}),
        onDeleteResult : (id) => dispatch({type: 'DELETE_RES', id: id })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);