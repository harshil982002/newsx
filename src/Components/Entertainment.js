import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
export const Entertainment = () => {
  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div><h1>Indian Entertainment</h1>
      Entertainment Industry in India has registered an explosive growth in last two decades making it one of the fastest emerging industries in India. Television itself witnessed its transformation from a single government owned channels to a medium telecasting more than 300 national and regional channels. At present Indian film industry or Bollywood is a perfect combination of entertainment and commercial sector, producing close to thousand movies in a year in various Indian languages. Indian film industry supersedes Hollywood in terms of movie production quantity by more than three times.

As per the recent report by PricewaterhouseCooopers (PwC), Indians are likely to spend more on entertainment in the coming years with a steady growth in their disposable income. And as per the combined survey report by KMPG and FICCI, the entertainment industry in India is expected to expand by 12.5% every year and is likely to reach US$ 20.09 billion by the year 2013... <br/><br/><p style={{color:`gray`}}>Click here to get 20 latest News</p>
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


