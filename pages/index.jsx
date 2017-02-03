import React from 'react'
import {Link} from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import access from 'safe-access'
import {config} from 'config'
import ReactDriveIn from 'react-drive-in'
import SitePost from '../components/SitePost'

class SiteIndex extends React.Component {
  description (body) {
    let test = body.replace(/<blockquote>/g, "<blockquote className='blockquote'>")
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  render () {
    const pageLinks = []

    const videoWithFallbacks = [
      'assets/vid/Meeting-Room.mp4',
      'assets/vid/Meeting-Room.webm',
      'assets/img/Meeting-Room.jpg',
    ]

    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
        const title = access(page, 'data.title') || page.path
        const description = access(page, 'data.description') || access(page, 'data.body')
        const datePublished = access(page, 'data.date')
        const categories = access(page, 'data.categories')

        const category = []
        for (const i in categories) {
          const c = categories[i]
          category.push(
            <span className="tag tag-danger" key={i}>{c}</span>
          )
        }

        const data = {}

        pageLinks.push(
          <div className="article-wrap" key={page.path}>
            <div className="page-header">
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to={prefixLink(page.path)}
              >
                <h1>{title}</h1>
                <time dateTime={moment(datePublished).format("MMMM D, YYYY")}>
                  {moment(datePublished).format("YYYY/MM/DD")}
                </time>
              </Link>
              {category}
            </div>
            <div
              className="page-content"
              dangerouslySetInnerHTML={{
                __html: this.description(description),
              }}
            />
            <p>
              <Link className="readmore" to={prefixLink(page.path)}>
                <span className="btn btn-outline-danger btn-block">Read More</span>
              </Link>
            </p>
          </div>
        )
      }
    })

    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="container-fluid main-content">
          <header role="banner" id="page-header">
            <div className="container">
              <section id="intro_text" className="jumboimage">

                <h1 className="block-title">Join Us March 10-12, 2017 at #C4TKNashville</h1>
                <div style={{ display: 'none' }} itemScope="" itemType="http://schema.org/Event">
                  <meta itemProp="name" content="Code for the Kingdom Nashville" /><br />
                  <meta itemProp="startDate" content="2017-03-10T18:00" /><br />
                  <meta itemProp="endDate" content="2017-03-12T17:30" /><br />
                  <meta itemProp="url" content="https://2017c4tknashville.eventbrite.com" />
                  <div style={{ display: 'none' }} itemProp="location" itemScope="" itemType="http://schema.org/Place">
                    <meta itemProp="name" content="Lipscomb University" />
                    <div style={{ display: 'none' }} itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">
                      <meta itemProp="streetAddress" content="1 University Park Dr." /><br />
                      <meta itemProp="addressLocality" content="Nashville" /><br />
                      <meta itemProp="addressRegion" content="TN" /><br />
                      <meta itemProp="postalCode" content="37215" />
                    </div>
                  </div>
                </div>
                <p className="hidden-xs">Join developers, designers, entrepreneurs, and innovators from around Nashville at Lipscomb University for a weekend hackathon dedicated to creating technology for good using the talents and passions that God has given us.</p>

                <p className="visible-xs">We are a weekend hackathon dedicated to addressing issues in our city by creating technology for good.</p>

                <p><br /></p>

                <p>It is an amazing weekend of community, code, and innovation. Tickets are only $25 and include: 6 meals, snacks, coffee, tea, and a t-shirt.</p>

                <p><br /></p>
                <p><a className="btn home-cta" href="#home-registration" role="button">Register</a></p>
                <p><br /></p>
                <ul className="list-inline">
                  <li>
                    <a className="btn home-cta" href="https://twitter.com/c4tknashville" role="button" style={{ fontSize:
                      '14px' }}
                    >
                      <i className="fa fa-twitter fa-1x" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a className="btn home-cta" href="https://www.facebook.com/Code-for-the-Kingdom-Nashville-1665845673685902" role="button" style={{ fontSize: '14px' }}>
                      <i className="fa fa-facebook fa-1x" /> Facebook
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </header>
          <div className="row">
            <h1>Schedule</h1>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Friday, March 10th</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5:45 PM : Doors Open</td>
                    </tr>
                    <tr>
                    <td>6 - 7 PM  : Dinner and Networking</td>
                    </tr>
                    <tr>
                    <td>7:00 - 7:25 PM : Welcome &amp; Review Format</td>
                    </tr>
                    <tr>
                    <td>7:25 - 7:35 PM : API Presentations</td>
                    </tr>
                    <tr>
                    <td>7:35 - 7:50 PM : Review Official Challenges</td>
                    </tr>
                    <tr>
                    <td>7:50 - 8:25 PM : Open Floor - Pitch Your Own Project</td>
                    </tr>
                    <tr>
                    <td>8:25 - 11:59 PM : Team Formation / Start Creating</td>
                    </tr>
                </tbody>
              </table>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Saturday, March 11th</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>12:00 AM - 11:59 PM : Creating</td>
                    </tr>
                    <tr>
                    <td>8:00 - 9:00 AM  : Breakfast</td>
                    </tr>
                    <tr>
                    <td>9:15 - 9:45 AM : Presentation</td>
                    </tr>
                    <tr>
                    <td>12:00 - 1:00 PM : Lunch</td>
                    </tr>
                    <tr>
                    <td>5:00 - 5:45 PM : Presentation</td>
                    </tr>
                    <tr>
                    <td>6:00 - 7:00 PM : Dinner</td>
                    </tr>
                </tbody>
                </table>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Sunday, March 12th</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>12:00 AM - 2:00 PM : Creating</td>
                    </tr>
                    <tr>
                    <td>8:00 - 9:00 AM  : Breakfast</td>
                    </tr>
                    <tr>
                    <td>10:00 - 11:00 AM : <br/> Sunday Service and Worship</td>
                    </tr>
                    <tr>
                    <td>12:00 - 1:00 PM : Lunch</td>
                    </tr>
                    <tr>
                    <td>2:00 PM : Pencils Down / Stop Creating</td>
                    </tr>
                    <tr>
                    <td>2:00 - 2:30 PM : Final Presentation Prep</td>
                    </tr>
                    <tr>
                    <td>2:30 - 3:15 PM : Finished Project Presentations</td>
                    </tr>
                    <tr>
                    <td>3:30 - 4:15 PM : Judging Projects</td>
                    </tr>
                    <tr>
                    <td>4:15 - 5 PM : Awards Presentation / Closing Remarks</td>
                    </tr>
                </tbody>
              </table>
            </div>
            <h6 className="small">* Schedule Subject to Change.</h6>
            <h6 className="small">For our complete menu, <a href="menu.html">click here</a></h6>
          </div>
          <div className="row">
            <h2 className="block-title">Proudly Sponsored By</h2>
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="sponsor text-center">
                    <a href="http://t.co/jwjBZZgYSX"><img alt="LifeWay Tech" src="img/LifeWayITLogoColor.png" /></a>
                  </div>
                </div>

                <div className="col-md-3 col-sm-4 col-md-offset-2">
                  <div className="sponsor text-center">
                    <a href="http://developwithpurpose.com/"><img alt="Ramsey Solutions" src="img/ramsey_logo.png" /></a>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4">
                  <div className="sponsor text-center">
                    <a href="http://www.lipscomb.edu/"><img alt="Lipscomb CCT" src="img/lipscomb_cct.png" /></a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="sponsor text-center">
                    <a href="http://www.codeforthekingdom.org/"><img alt="Code for the Kingdom" src="img/c4tk_black.jpg" /></a>
                  </div>
                </div>
                <br />
                <div className="col-md-4 col-sm-6 col-md-offset-4">
                  <h5 className="text-center">Catering by:</h5>
                  <div className="sponsor-food text-center">
                    <a href="http://sifted.co"><img alt="Sifted" src="img/siftedblacklogo.png" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h2 className="block-title">About Code for the Kingdom</h2>

            <div className="content">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-md-offset-1">
                  <h4 className="about-header">Code for the Kingdom is a weekend Hackathon series and ongoing ecosystem where the challenges confronting our communities, our society, our families, and our spiritual lives are tackled from a Christian perspective.</h4>

                  <p>The movement hosts weekend gatherings in different cities where developers, designers, ideators and others collaborate to advance common good and serve God’s Kingdom.  C4TK hackathons, have gathered thousands of technologists to create hundreds of projects for good.</p>

                  <p>Our goal is that the weekend would leverage the skills and insights of our city’s entrepreneurs, designers, and technologists to foster an entrepreneurial culture with Christian values that extends far beyond the weekend itself.  We hope lasting community and change are a result of our coming together.</p>
                </div>
                <div className="col-md-3 col-sm-8 col-md-offset-1 col-sm-offset-2">
                  <a className="btn btn-default btn-xl center-block" href="challenges.html" role="button">Challenge Info</a>
                  <br />
                  <a className="btn btn-default btn-xl center-block" href="rules.html" role="button">Rules</a>
                  <br />
                  <a className="btn btn-default btn-xl center-block" href="awards.html" role="button">Award Info</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 how-hackathons-work">
              <h1>How a Hackathon Works</h1>
              <br />
              <div className="col-md-2 col-sm-12 col-md-offset-2">
                <span className="fa-stack fa-3x">
                    <i className="fa fa-circle-thin fa-stack-2x"></i>
                    <i className="fa fa-user fa-stack-1x"></i>
                </span>
                <h4>Come</h4>
                <p>Come with an idea or a desire to work on a project.</p>
              </div>
              <div className="col-md-2 col-sm-12">
                <span className="fa-stack fa-3x">
                    <i className="fa fa-circle-thin fa-stack-2x"></i>
                    <i className="fa fa-users fa-stack-1x"></i>
                </span>
                <h4>Join</h4>
                <p>After you hear project pitches, you join a team.</p>
              </div>
              <div className="col-md-2 col-sm-12">
                <span className="fa-stack fa-3x">
                    <i className="fa fa-circle-thin fa-stack-2x"></i>
                    <i className="fa fa-magic fa-stack-1x"></i>
                </span>
                <h4>Create</h4>
                <p>Over the next two days, work together to create something awesome.</p>
              </div>
              <div className="col-md-2 col-sm-12">
                <span className="fa-stack fa-3x">
                    <i className="fa fa-circle-thin fa-stack-2x"></i>
                    <i className="fa fa-trophy fa-stack-1x"></i>
                </span>
                <h4>Win</h4>
                <p>On Sunday afternoon, present your project for a chance to win!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <h2 className="block-title">Frequently Asked Questions</h2>

            <div className="content">
              <div className="row">
                <div className="col-md-4">
                  <h4>Where is the event?</h4>
                  <p>Code for the Kingdom Nashville will be located at Lipscomb University in the Swang Business Building.  The actual address is 102 University Park Dr, Nashville, TN 37215.</p>
                </div>
                <div className="col-md-4">
                  <h4>Is the event free?</h4>
                  <p>No, but tickets are only $25.  That covers 6 meals, coffee and tea, and an event t-shirt. They can be purchased <a href="https://2017c4tknashville.eventbrite.com">here</a>.</p>
                </div>
                <div className="col-md-4">
                  <h4>Is food provided?</h4>
                  <p>Yes!  6 meals (dinner on the 10th through lunch on the 12th) are included with your ticket purchase.  Coffee, tea and light snacks will also be available for the duration of the event.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h4>Do I have to be a programmer?</h4>
                  <p>Absolutely not! We want anyone interested in making a difference in Nashville to show up.  Any talents, skills, or interests are welcome!  You never know what may happen over the weekend!</p>
                </div>
                <div className="col-md-4">
                  <h4>Is there room to sleep if I want to stay overnight?</h4>
                  <p>Yes. We encourage people to stay as long as they want throughout the event, but you must bring your own sleeping bag, pillow, or whatever else you need to sleep comfortably. However, there are no shower facilities at our venue. For a list of airbnb rentals nearby, visit <a href="https://goo.gl/2D9j5m">https://goo.gl/2D9j5m</a></p>
                </div>
                <div className="col-md-4">
                  <h4>What if I need more info?</h4>
                  <p>That's easy.  Write <span className="spamspan"><span className="u">info</span> [at] <span className="d">codeforthekingdomnashville.org</span></span> with your question or comments, and we'll get right back to you.</p>
                </div>
              </div>
              <p><br /></p>
              <h6 className="text-center">Everyone is welcome to attend! For our Code of Conduct, <a href="code-of-conduct.html">click here</a>.</h6>
            </div>
          </div>
          <div className="row">
            <h2 className="block-title">Register</h2>
            <div className="col-md-8 col-md-offset-2 col-xs-12">
              <iframe src="//eventbrite.com/tickets-external?eid=28837281084&ref=etckt" frameBorder="0" height="648" width="100%" vspace="0" hspace="0" marginHeight="5" marginWidth="5" scrolling="auto" allowTransparency="true" />
            </div>
          </div>
          <div className="row">
            <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?hl=en&amp;q=102+University+Park+Drive%2C+Nashville%2C+TN%2C+37204&amp;iwloc=A&amp;z=14&amp;t=m&amp;output=embed" />
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
SiteIndex.propTypes = {
  route: React.PropTypes.object,
}

export default SiteIndex
