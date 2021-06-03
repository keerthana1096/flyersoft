/* eslint-disable no-use-before-define */
import React from 'react'

import MailIcon from '@material-ui/icons/Mail'

import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import SearchIcon from '@material-ui/icons/Search'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
class Header extends React.Component {
  render () {
    return (<div>
            <div className="row" style={{ backgroundColor: 'black' }}>
                <div className="col-md-1"/>
                <div className="col-md-2">
                   <p style={{ color: 'green', fontSize: '20px' }}><span style={{ color: 'white', fontSize: '20px' }}>envato</span>market</p>
                </div>
                <div className="col-md-7"/>
                <div className="col-md-2">
                    <button style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px', marginTop: '10px', marginLeft: '20%' }}>Buy Now</button>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-1"/>
                <div className="col-md-3">
                 <p style={{ color: 'grey', marginTop: '10%' }}><MailIcon/>needhelp@agrikol.com<PhoneInTalkIcon style={{ marginLeft: '10%' }} />66704345</p>
                </div>
                <div className="col-md-4">
                  <center><h3 style={{ marginTop: '5%' }}>Agrikol</h3></center>
                </div>
                <div className="col-md-3">
                <h6 style={{ marginTop: '10%' }}><FacebookIcon style={{ marginRight: '20px' }}/><TwitterIcon style={{ marginRight: '20px' }}/><InstagramIcon style={{ marginRight: '20px' }}/></h6>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: '#f5edf5', paddingTop: '10px', paddingBottom: '10px' }}>

                <div className="col-md-2"/>
                <div className="col-md-1">
                    <SearchIcon/>
                </div>
                <div className="col-md-1">
                    Home
                </div>
                <div className="col-md-1">
                   Services
                </div>
                <div className="col-md-2">
                   Our Products
                </div>
                <div className="col-md-1">
                    Shop
                </div>
                <div className="col-md-1">
                   Pages
                </div>
                <div className="col-md-1">
                    News
                </div>
                <div className="col-md-1">
                   Contact
                </div>
                <div className="col-md-1">
                    <ShoppingCartIcon/>
                </div>

                </div>
        </div>)
  }
}
export default Header
