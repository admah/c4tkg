import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNavi extends React.Component {
    render() {
        const {location} = this.props
        const {title} = this.props
        return (
              <div className="navbar navbar-dark bg-danger navbar-fixed-top">
                <div className="container">
                  <h1 className="navbar-brand mb-0">{ title }</h1>
                  <ul className="nav navbar-nav">
                    <li className={ location.pathname === prefixLink('/') ? "nav-item active" : "nav-item" }>
                      <Link to={ prefixLink("/") } className="nav-link">Home</Link>
                    </li>
                    <li className={ location.pathname === prefixLink('/#home-register') ? "nav-item active" : "nav-item" }>
                      <Link to={ prefixLink("/#home-register") } className="nav-link">Register</Link>
                    </li>
                    <li className={ location.pathname === prefixLink('/#home-about') ? "nav-item active" : "nav-item" }>
                      <Link to={ prefixLink("/#home-about") } className="nav-link">About</Link>
                    </li>
                    <li className={ location.pathname === prefixLink('/#home-schedule') ? "nav-item active" : "nav-item" }>
                      <Link to={ prefixLink("/#home-schedule") } className="nav-link">Schedule</Link>
                    </li>
                    <li className={ location.pathname === prefixLink('/api/') ? "nav-item active" : "nav-item" }>
                      <Link to={ prefixLink("/api/") } className="nav-link">APIs</Link>
                    </li>
                    <li className={ location.pathname === prefixLink('/#home-sponsors') ? "nav-item active" : "nav-item" }>
                      <Link to={ prefixLink("/#home-sponsors") } className="nav-link">Sponsors</Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
    }
}

SiteNavi.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNavi
