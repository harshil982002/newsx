


import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
export const Science = () => {
  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div><h1>Science and Technology in India</h1>
      India is aggressively working towards establishing itself as a leader in industrialisation and technological development. Significant developments in the nuclear energy sector are likely as India looks to expand its nuclear capacity. Moreover, nanotechnology is expected to transform India's pharmaceutical industry. The agriculture sector is also likely to undergo a major revamp with the government investing heavily for a technology-driven Green Revolution. Government of India, through the Science, Technology and Innovation (STI) Policy-2013, among other things, aspires to position India among the world's top five scientific powers. Indian Space Research Organisation (ISRO) will launch its first Indian human mission by 2022.

India initiated a landmark policy called Science, Technology and Innovation Policy 2020 with core vision of being decentralized, evidence informed, bottom-up, experts-driven, and inclusive. The policy aims to be bring-in the concept of 'dynamic policy' with a robust policy governance mechanism incorporating features such as periodic review, policy evaluation, feedback, and adaptation, and a timely exit strategy for various policy instruments... <br/><br/><p style={{color:`gray`}}>Click here to get 20 latest News</p>
  <Button variant="dark" onClick={fetchNews} size="sm">Get news</Button></div>
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


