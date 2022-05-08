/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
   <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-expand-md bg-green-600 navbar-inverse" role="navigation">
        <div className="navbar-header text-center">
            <div className="mw-100" data-toggle="gridmenu" aria-expanded="true">
                <img className="navbar-brand-logo" src="assets/assets/images/logo.png" alt='' title="Remark"/>
            </div>
            <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-search" data-toggle="collapse">
                <span className="sr-only">Toggle Search</span>
                <i className="icon wb-search" aria-hidden="true"></i>
            </button>
        </div>

        <div className="navbar-container container-fluid">
          
        </div>
    </nav>

    )
  }
}
