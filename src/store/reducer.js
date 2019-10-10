const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMTN":
      return {
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
    case "ADD":
      return {
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        counter: state.counter - action.value
      };
  }
  return state;
  //IMPORTANT: return state has to be defined, bc if there is no 'right case', it would fall. But now it will return prev state
};

export default reducer;
