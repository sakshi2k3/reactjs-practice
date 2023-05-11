
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    newsUrl: PropTypes.string.isRequired
  }

  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
   
    src={imageUrl}
          alt="Cardimagecap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">
           Read More
          </a>
        </div>
      </div>
      </div>
    )
  }

}

export default NewsItem
