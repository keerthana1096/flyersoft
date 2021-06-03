/* eslint-disable no-use-before-define */
import React from 'react'
import '../styles/footer.css'
import News1 from '../assets/images.jpg'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
class Footer extends React.Component {
  render () {
    return (<div>
<div className="footer" ><br/>
<br/>
<br/>
    <div className="row">
    <div className="col-md-2"/>
    <div className="col-md-3">
        <h4 className="title">ABOUT</h4>
        <h6 className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>

    </div>
    <div className="col-md-2">
        <h4 className="title">EXPLORE</h4>
        <h6 className="details">About Us</h6>
        <h6 className="details">Services</h6>
        <h6 className="details">Our Projects</h6>
        <h6 className="details">Meet the Farmers</h6>
        <h6 className="details">Latest News</h6>
        <h6 className="details">Contact</h6>
    </div>
    <div className="col-md-2">
        <h4 className="title">NEWS</h4>
       <h6 className="details"> <img src={News1} height="30px" width="30px"/>Learn 10 best tips for new farmers</h6>
        <h6 className="date">30 Oct,2019</h6>
        <h6 className="details"><img src={News1} height="30px" width="30px"/>Farmer Sentiment darkens hopes fade</h6>
        <h6 className="date">30 Oct,2019</h6>
    </div>
    <div className="col-md-2">
        <h4 className="title">CONTACT</h4>
        <h6 className="details">66 Brooklyn Street,NewTown</h6>
        <h6 className="details">NewYork</h6>
        <h6 className="date">needhelp@agrikol.com</h6>
        <h6 className="date">66704345</h6>
        <h6 className="icons"><FacebookIcon style={{ marginRight: '20px' }}/><TwitterIcon style={{ marginRight: '20px' }}/><InstagramIcon style={{ marginRight: '20px' }}/></h6>
    </div>
    </div>
    <br/>
<br/>
</div>

        </div>)
  }
}
export default Footer
