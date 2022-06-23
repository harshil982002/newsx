


import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
export const Business = () => {
  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div><h1>Business in India</h1>
      The Government has had a huge role in the transformation of the Indian Business scenario. To better the possibilities and take exhaustive advantage of the business opportunities, the Government has introduced major changes. This was in terms of macroeconomic reforms, tax reforms, finance reforms and relaxing the capital market.

It was till a certain point of time that the overseas businesses were restricted by a lot of means to get entry in India, in terms of money transfer, legal formalities and investment options. But then, to act as a defense of globalization, India went ahead in relaxing many of its reforms, regulations. It all revamped the Indian private sector, exchange control rules were easened, convertibility and trade reforms got relaxed and most importantly, the foreign direct investment (FDI) policies got revamped.

After all these relaxations, overseas companies started expressing more interest in the Indian Businesses. With a more liberalized process of Indian business, the number of businesses in India has grown manifold. It is at present that more MNCs are entering the Indian business scenario and as a result improving the scenario of Indian businesses by leaps and bounds... <br/><br/><p style={{color:`gray`}}>Click here to get 20 latest News</p>
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
                <div key={index} className="col" >
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


