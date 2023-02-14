import React, { useEffect, useState } from "react";
import NewsProfile from "./NewsProfile";
import axios from "axios";

function News(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=aeb83b8d39ac408980786c4bf1ad40bc`
      )
      .then((res) => {
        // console.log(res);
        setNews(res.data.articles);
        // console.log('below is res')
        // console.log(res)
        // console.log('below is news')
        // console.log(news);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.category]);

  return (
    <div className="mx-[5vw] md:my-14 my-5 flex justify-center flex-col">
     <h1 className="text-gray-600 text-center font-bold md:text-[3rem] text-2xl font-designer">Top Headlines - <span className="text-orange-400 capitalize font-kanit">{props.category}</span></h1>
      {/* <div className="flex flex-wrap justify-evenly mt-10"> */}
      <div className="md:grid grid grid-cols-2 md:grid-cols-4 mt-10">

    {news.map((posts) => (
      // posts==null? <h1>'not found loading'</h1>:
                <NewsProfile
                title={posts.title}
                description={posts.description}
                image={posts.urlToImage}
                url={posts.url}
                key={posts.url}
                content={posts.content}
                author={posts.author}
              />
    ))}
      </div>
      {/* {news.map((items) => {
                return(
                    <div key={items.url} className='flex flex-wrap' >
                <NewsProfile title={items.title} description={items.description} image={items.urlToImage} url= {items.url}/>
                </div>
                )
            } )} */}
    </div>
  );
}
export default News;
