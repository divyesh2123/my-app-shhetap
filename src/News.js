import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsList } from './asyncActions/newsasycaction';

export default function News() {

   const news = useSelector(y=>y.news);

   console.log(news);
   const dis = useDispatch();
    useEffect(()=> {


        dis(getNewsList());
    },[])
  return (
    <div>

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
