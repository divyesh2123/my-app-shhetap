export const NewsRequest = () => ({
  type: 'NewsRequest',
  
})

export const NewsSUC = (payload) => ({
    type: 'NewsSUC',
    payload
  })

  export const NewsFail = (payload) => ({
    type: 'NewsFail',
    payload
  })
  
  
