import React, { Component } from 'react'


class Navbar extends Component {
  render() {
    return (
      <div className = "container">
      <div className="navbar">
        <div className="nav-item">
          <div className="title">
            <a href="https://localhost:3000">
              <img className="bottom-image" src="/images/bulut.png" alt=""></img>
              <img className="top-image" src="/images/gunes.png" alt=""></img>
              <span>Hava Ne Olur?</span>
            </a>
          </div>
          <div className="links">
            <ul>
              <li><a href="#">Biz Kimiz?</a></li>
              <li><a href="#">Bu Site Tam Olarak Ne?</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}




export default Navbar;