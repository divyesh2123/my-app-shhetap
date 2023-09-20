import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsList } from './asyncActions/newsasycaction';
import AddNews from './AddNews';

export default function News() {

   const news = useSelector(y=>y.news);

   const newsd = useSelector(y=>y.news.addNewsSuc);

   alert(newsd);

   console.log(news);
   const dis = useDispatch();
    useEffect(()=> {


        dis(getNewsList());
    },[newsd])
  return (
    <div>

      <AddNews/>

        <table>
        
        {
            news.data.map((element)=> {

                return (<tr><td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.description}</td>
                </tr>)

            })

        }
        </table>
    </div>
  )
}
