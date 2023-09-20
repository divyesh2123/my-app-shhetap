const initialState = {

    isLoading: false,
    data :[],
    error:null,
    addNewsSuc: false

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'NewsRequest':
    return { ...state, isLoading: true }

  case 'NewsSUC':
    return {...state,isLoading: false, data:payload};

  case 'AddNewsRequest':
    return { ...state, isLoading: true,addNewsSuc: false }



case 'NewsFail':

return {...state,isLoading: false, error: payload}

case 'AddNewsSUC':
  return {...state,isLoading: false, error: '',addNewsSuc: true}

case 'AddNewsFail':
  return {...state,isLoading: false, error: payload,addNewsSuc: false}

  default:
    return state
  }
}
