


import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
export const Sports = () => {
  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  
  return (
    <>
      <div><h1>Sports in India</h1>
India has a great tradition of sports, and is greatly influenced by the British presence in India in the 18th and 19th century. Cricket is undoubtedly the most popular sport, but in such a large and populous country there are many other sports that are played by a lot of people.<br/
><br/>India is one of the largest country in the world in both area and population. India is also one of the few countries that have retained the popularity of their indigenous games among its people. Games like gilli-danda, kabaddi, pehlwani and kho kho. India is also where some of the oldest forms of martial arts originated like musti yuddha, kalerippayattu, silambam as well as marma adi... <br/><br/><p style={{color:`gray`}}>Click here to get 20 latest News</p>
  <Button variant="dark" onClick={fetchNews} size="sm" >Get news</Button></div>
      {/* <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
          </div>
        </div>
      </div> */}
       
      <div className="container" >
        <div className="row">
          {
            
            news.map((value,index) => {
              return (
                
                <div key={index} className="col">
                  
                  <div className="card" style={{ width: "18rem", margin:"30px" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-dark" >More</a>
                    </div>
                  </div>
                  
                </div>
                
              );
            })
          }
        </div>
      </div>
    </>
  )
}


