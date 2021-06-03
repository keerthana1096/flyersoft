import React from 'react'
import Paper from '@material-ui/core/Paper'
import '../styles/services.css'
import fruit1 from '../assets/fruit1.jpg' 
import fruit2 from '../assets/fruit2.jpg'
class Services extends React.Component {
  render () {
    return (<div style={{ backgroundColor: '#f8f4f8' }}>
             
                <center><p>What we offer</p>
                <h3>Services we offer</h3></center>
               
           <div className="row">
               <div className="col-md-2"/>
               <div className="col-md-2">
                   <Paper>
                     
                <h3 className="sertitle">Fruits and Vegetables</h3>
                <p className="serdes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <img src={fruit2} height="100px" width="200px" />
                   </Paper>
               </div>
               <div className="col-md-2">
                   <Paper>
                      
                <h3 className="sertitle">Fruits and Vegetables</h3>
                <p className="serdes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  
                <img src={fruit1} height="100px" width="200px" /> </Paper>
               </div>
               <div className="col-md-2">
                   <Paper>
                       
                <h3 className="sertitle">Fruits and Vegetables</h3>
                <p className="serdes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <img src={fruit2} height="100px" width="200px" />   </Paper>
               </div>
               <div className="col-md-2">
                   <Paper>
                      
                <h3 className="sertitle">Fruits and Vegetables</h3>
                <p className="serdes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <img src={fruit1} height="100px" width="200px" />   </Paper>
               </div>
           </div>
           <br/>
           <br/>
        </div>)
  }
}
export default Services
