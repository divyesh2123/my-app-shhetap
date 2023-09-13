import { NewsRequest, NewsSUC } from "../action/newsaction";

export const getNewsList = () => async dispatch => {
    dispatch(NewsRequest());
    try {
      const res = await fetch(`https://6501c6c2736d26322f5c4513.mockapi.io/mynews`);
      const data = await res.json();
      dispatch(NewsSUC(data));
    } catch (err) {
      dispatch(NewsFail(err.message));
    }
  }