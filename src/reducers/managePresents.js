  export function managePresents(state = {
    numberOfPresents: 0, // Set an default value for the state argument - an object with a key, numberOfPresents, assigned to 0
  }, action) {
    switch(action.type) {
  
      case "INCREASE": // If the reducer receives a type set to "INCREASE", 
        return Object.assign({}, state, { //// return a new state
          numberOfPresents: state.numberOfPresents + 1  // where the value of numberOfPresents is increased by one. 
        });
  
      default:
        return state;
    }
  };


