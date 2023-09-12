const initialState = {
    data:[],
    error:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'USER_SUC':
    return { ...state, data:payload }

  case 'USER_FAIL':
    return {...state,error:payload};

  default:
    return state
  }
}
