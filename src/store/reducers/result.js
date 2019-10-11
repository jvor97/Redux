import * as actionTypes from './../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RES:
      return {
        ...state,
        results : state.results.concat({value: action.result, id: new Date()})
      };
    case actionTypes.DELETE_RES:
        // let updatedArray = [...state.results];
        // updatedArray.splice(1,action.index);
        // in return set state to results : updatedArray;
      return {
        ...state,
        // results : state.results.splice(1,action.index)     NOT 
        //doing it like above its not inmutable therefore you can do -> above let updatedArray
        //BEST SOLUTION (with filter and id):
        results : state.results.filter(result => action.id !== result.id)
        
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
