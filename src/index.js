// write your createStore function here
const createStore = (reducer) => {
  let state;

  const getState = () => {
    return state;
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  }

  return { getState, dispatch };
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

let store = createStore(candyReducer);
store.dispatch({type: '@@INIT'});

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch