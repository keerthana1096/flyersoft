/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import '../styles/news.css'
import image1 from '../assets/image6.jpg'
import image2 from '../assets/image2.jpg'
class News extends React.Component {
  render () {
    return (<div>
        <div className="row growing">
            <div className="col-md-2"/>
            <div className="col-md-4 img">

           <button className="exp">40 YEARS<br/>of EXPERIENCE</button>

            </div>
            <div className="col-md-3">

            <Paper className="pap">
                <br/>

                <h3 className="gro">Growing products</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
         <br/>
           </Paper>
               </div>

        </div>
        <br/>
        <br/>

            <div className="row">
                <div className="col-md-4"/>
                <div className="col-md-4">
                    <center>
                        <h5 style={{ color: 'grey' }}>From the Blog</h5>
                        <h3 className='news'>NEWS & ARTICLES</h3>
                    </center>

                </div>
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-2"/>
                <div className="col-md-3">
                    <Paper>
                        <img src={image1} height="200px" width="318px" />
                        <h4 style={{ marginLeft: '10%', marginRight: '10%', color: 'black', fontSize: '20px', marginTop: '10%' }}> Agriculture Miracle</h4>

                            <p style={{ marginLeft: '10%', marginRight: '10%', color: 'grey', fontSize: '15px', marginTop: '10%' }}>Developed by three female entrepreneurs, the collaboration network enables farmers to offer their services to farmers in need or to seek services from other farmers.</p>
                            <br/> <button className="learnmore">Read More</button><br/><br/>
                    </Paper>
                </div>
                <div className="col-md-3">
                    <Paper>
                    <img src={image1} height="200px" width="318px" />
                    <h4 style={{ marginLeft: '10%', marginRight: '10%', color: 'black', fontSize: '20px', marginTop: '10%' }}> Amount of freak bread</h4>
<p style={{ marginLeft: '10%', marginRight: '10%', color: 'grey', fontSize: '15px', marginTop: '10%' }}>Developed by three female entrepreneurs, the collaboration network enables farmers to offer their services to farmers in need or to seek services from other farmers.</p>
<br/> <button className="learnmore">Read More</button><br/><br/>
                    </Paper>
                </div>
                <div className="col-md-3">
                    <Paper>
                    <img src={image1} height="200px" width="318px" />
                    <h4 style={{ marginLeft: '10%', marginRight: '10%', color: 'black', fontSize: '20px', marginTop: '10%' }}> Winter heap harvest</h4>
<p style={{ marginLeft: '10%', marginRight: '10%', color: 'grey', fontSize: '15px', marginTop: '10%' }}>Developed by three female entrepreneurs, the collaboration network enables farmers to offer their services to farmers in need or to seek services from other farmers.</p>
                   <br/> <button className="learnmore">Read More</button><br/><br/>
                    </Paper>
                </div>
            </div>
            <br/>
            <div className="row testclass" >
          <div className="col-md-2"/>
          <div className="col-md-8">
              <p className="overText">PROVIDE YOU THE HIGHEST QUALITY PRODUCT THAT MEETS THE EXPECTATION</p>
             <center> <p className="oversub">enim ad minim veniam, quis nostrud</p></center>
            <center>  <button className="discoverbutton">Discover More</button></center>
          </div>
            </div>
        </div>)
  }
}
export default News
