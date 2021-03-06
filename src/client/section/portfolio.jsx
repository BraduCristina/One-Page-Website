// @flow

import React from 'react'

import PortfolioItem from './portfolioItem'

const Portfolio = ({ portfolio }: Object) => (
  portfolio ? <div className="portfolio" id="portfolio">
    <div className="container">

      <h2 className="wow fadeInUp">{portfolio.title}</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">{portfolio.description}</p>

      <div className="row">
        {portfolio.items.map(item => <PortfolioItem data={item} key={item.title} />)}
      </div>
    </div>
  </div> : <div>Loading...</div>
)

export default Portfolio
