import * as actionTypes from './../actions';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
          ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
          ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
          ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT:
      return {
          ...state,
        counter: state.counter - action.value
      };
      
  }
  return state;
  //IMPORTANT: return state has to be defined, bc if there is no 'right case', it would fall. 
  //But now it will return prev state
  //IMPORTANT1: ...state has to be there because- here it doesnt work as in setState(that u set a state and the rest would be copied) 
  //! -here u are settig completly new style so writting just counter and not result !we would lost results state!
  //                -also we are working inmutably with state
  //IMPORTANT2: dont use .push but .concat- again not to mutate the state (concat return new array)
};

export default reducer;
