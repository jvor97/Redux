import { stat } from "fs";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
          ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
          ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
          ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
          ...state,
        counter: state.counter - action.value
      };
    case "STORE_RES":
      return {
        ...state,
        results : state.results.concat({value: state.counter, id: new Date()})
      };
    case "DELETE_RES":
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
