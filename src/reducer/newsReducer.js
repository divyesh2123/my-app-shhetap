const initialState = {

    isLoading: false,
    data :[],
    error:null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'NewsRequest':
    return { ...state, isLoading: true }

  case 'NewsSUC':

  return {...state,isLoading: false, data:payload};

case 'NewsFail':

return {...state,isLoading: false, error: payload}

  default:
    return state
  }
}
