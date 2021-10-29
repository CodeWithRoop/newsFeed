import React, { Component } from "react";

export default class NewsItem extends Component {
 

  render() {
    let { title, discription, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card my-3" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
   {source}
  </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
      
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <div className="card-text">
        <small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small>
      </div>
          <a href={newsUrl} rel="noreferrer"  target="_blank" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
