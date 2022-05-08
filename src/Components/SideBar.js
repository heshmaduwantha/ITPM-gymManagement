/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
  render() {
    return (
    <div className="site-menubar">
        <div className="site-menubar text-left">
          <div className='divhover mw-100 p-20 mt-10'>
           <a className='h4 p-20 mw-100'>Dashboard</a>
          </div>
          <Link to = "/StaffMembers/View" >
            <div className='divhover mw-100  p-20 '>
            <a className='h4 p-20 mw-100'>Member Management</a>
            </div>
          </Link>
          <div className='divhover mw-100  p-20 '>
           <a className='h4 p-20 mw-100'>Class And Nutrition</a>
          </div>
          <Link to = "/Workout/View" >
          <div className='divhover mw-100 p-20'>
           <a className='h4 p-20 mw-100'>Workout</a>
          </div>
          </Link>
          <Link to = "/Items/View" >
          <div className='divhover mw-100  p-20'>
           <a className='h4 p-20 mw-100'>Shop</a>
          </div>
          </Link>
        </div>
    </div>
    )
  }
}
