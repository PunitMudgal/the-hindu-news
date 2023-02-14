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
  }, []);

  return (
    <div className="mx-[5vw] md:my-14 my-5">
     <h1 className="text-cyan-400 text-center font-bold md:text-[3rem] text-2xl">Top Headlines</h1>
      {/* <div className="flex flex-wrap justify-evenly mt-10"> */}
      <div className="grid grid-cols-3 mt-10">

    {news.map((posts) => (
                <NewsProfile
                title={posts.title}
                description={posts.description}
                image={posts.urlToImage}
                url={posts.url}
                key={posts.url}
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
