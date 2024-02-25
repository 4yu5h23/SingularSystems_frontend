import React from 'react'
import './PreBuilt.css'

function PreBuilt() {
  return (
    <div className='container-fluid' id='pre-built'>

      <div className='container-fluid preBuilt-element' id='preBuilt-img'>
        <img src="/images/pre-built1.png" alt="not found" />
      </div>

      <div className="container-fluid preBuilt-element" id="clutch-series">
        <div className='head-text clutch-element'>
          <h1>CLUTCH Series</h1>
          <p>For the gamer in YOU</p>
        </div>
        <div className='container-fluid series-holder'>
          <div className="card clutch-element">
            <a href="/forge">
              <img src="/images/forge.png" className="card-img-top" alt="not found" />
            </a>
            <div className="card-body">
              <p className="card-text">FORGE</p>
            </div>
          </div>
          <div className="card clutch-element">
            <a href="/veteran">
              <img src="/images/veteran.png" className="card-img-top" alt="not found" /></a>
            <div className="card-body">
              <p className="card-text">VETERAN</p>
            </div>
          </div>
          <div className="card clutch-element">
            <a href="/elite">
              <img src="/images/elite.png" className="card-img-top" alt="not found" /></a>
            <div className="card-body">
              <p className="card-text">ELITE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="rendero">
        <a href="/rendero">
          <div className="head-text rendero-element">
            <h1>Rendero</h1>
            <p>For the artist in you</p>
          </div>
          <div className="container-fluid rendero-element text-center my-2">
            <img src="/images/rendero-pc.png" alt="rendero pc" />
          </div>
          <div className='d-flex flex-wrap' id="renderoSpec">
            <div className="rendero-specs">
              <h2>i9 13900KS</h2>
              <p>CPU</p>
            </div>
            <div className="rendero-specs m-1">
              <h2>128 GB</h2>
              <p>OF RAM</p>
            </div>
            <div className="rendero-specs">
              <h2>RTX 4090</h2>
              <p>GRAPHICS CARD</p>
            </div>
          </div>
        </a>
      </div>

      <div className='container-fluid'>
      <img src="/images/whygetprebuilt.png" alt="not" />
      </div>

      
    </div>
  )
}

export default PreBuilt
