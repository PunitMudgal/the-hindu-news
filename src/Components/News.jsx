import React, { useEffect, useState } from "react";
import NewsProfile from "./NewsProfile";
import axios from "axios";

function News(props) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

const nextHandler = () => {
setPage(page+1);
}

const previousHandler = () => {
  page>=1 ? setPage(page-1) : alert('action cannot be performed')
  
}

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=aeb83b8d39ac408980786c4bf1ad40bc&page=${page}&pageSize=${props.pageSize}`
      )
      .then((res) => {
        // console.log(res);
        setNews(res.data.articles);
        // console.log('below is res')
        // console.log(res)
        // console.log('below is news')
        // console.log(news);
        console.log(page)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.category,page]);

  return (
    <>    <div className="mx-[5vw] md:my-14 my-5 flex justify-center flex-col">
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
    </div>

    <button onClick={nextHandler} className="bg-sky-400 px-3 py-1 float-right rounded m-4">Next</button>
    <button onClick={previousHandler} className="bg-sky-400 px-3 py-1 float-left rounded m-4">Previous</button>
    <p className="text-center font-extralight font-dosis text-stone-800 text-xl">Current Page = {page}</p>

    </>

  );
}
export default News;
