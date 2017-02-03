import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteFooter extends React.Component {
  render() {
    return (
      <section id="block-mailchimp-signup-c4tk-nashville-news" className="block block-mailchimp-signup">
        <h2 className="block-title">Sign-up to Receive Updates by Email</h2>
        <div id="mc_embed_signup">
          <form className="mailchimp-signup-subscribe-form" action="//codeforthekingdomnashville.us12.list-manage.com/subscribe/post?u=5aebbda601e66382a2fdb1866&amp;id=f1f5d2c02c" method="post" id="mailchimp-signup-subscribe-block-c4tk-nashville-news-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div className="mailchimp-signup-subscribe-form-description" />
            <div id="mailchimp-newsletter-42997-mergefields" className="mailchimp-newsletter-mergefields">
              <div className="form-item form-item-mergevars-email form-type-textfield form-group">
                <label className="control-label" htmlFor="edit-mergevars-email">Email Address <span className="form-required" title="This field is required.">*</span></label>
                <input className="form-control form-text required" type="email" id="mce-EMAIL" name="EMAIL" value="" size="25" maxLength="128" />
              </div>
            </div>
            <div className="form-actions form-wrapper form-group" id="edit-actions">
              <button type="submit" id="mc-embedded-subscribe" name="subscribe" value="Sign Up" className="btn btn-default form-submit">Sign Up</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default SiteFooter
