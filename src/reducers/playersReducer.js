const initialState = { players: [], selected: false }

function playersReducer(state=initialState, action){
  console.log(state)
  console.log(action)
  let index;
  switch(action.type){
    case "ADD":
      state.players.push(action.payload)
      return state
    case "hi":
      return state.selected
    default:
      return state
  }
}

export default playersReducer;
