import React from 'react'

export default function NewsProfile(props) {
  return (

    <div className='md:w-80 w-64 bg-slate-50 flex flex-col md:m-4 m-2 border-gray-300 rounded-lg border p-2 shadow-md'>
      
      <div className=''>
      <img src={!props.image? 'https://picsum.photos/320/200': props.image} className='object-contain rounded-md' alt="not found" />
      </div>

      <div className='my-2 mb-4'>
      <h3 className='text-lg font-bold text-gray-900'>{props.title}</h3>
      <p className='font-semibold text-gray-700'>{props.content}</p>
      <p className='font-light '>Author: {!props.author? 'Unknown': props.author}</p>
      </div>
      <a className='place-self-center bg-blue-500 font-semibold text-white rounded-md p-1' href={props.url}>Read More</a>
    </div>
    
    
    )
  }

  // {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-3 font-dosis">
      
  //         <img className= "https://i.ytimg.com/vi/71RLoHXnBg4/maxresdefault.jpg" alt="not found" />
  
  //     <div className="md:p-5 p-3 ">
  //             <h3 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">{props.title}</h3>
        
  //         <p className="md:mb-3 mb-2 font-normal text-gray-700 ">{props.description}</p>
  //         <a href={props.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
  //             Read More
  //             <svg aria-hidden="true" className="w-4 md:h-4 h-2 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  //         </a>
  //     </div>
  // </div> */}