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

  export const AddNewsRequest = () => ({
    type: 'AddNewsRequest',
    
  })
  
  export const AddNewsSUC = (payload) => ({
      type: 'AddNewsSUC',
      payload
    })
  
    export const AddNewsFail = (payload) => ({
      type: 'AddNewsFail',
      payload
    })


  
  
  
