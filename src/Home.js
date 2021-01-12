import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import facebook from './image/facebook.png'
import {Button} from 'react-bootstrap'

function Home() {
    return (
        <div>
           <header className="container d-flex justify-content-between px-3 mx-3 mb-5">
               <div className="headerLeft row">
                   <div className="col-lg-6 text-left px-5 p-3 mt-2">
                       <img src={facebook} alt=""/>
                   

                   
                       <p className="text-dark text-left px-2">
                       Facebook helps you connect and share with the people in your life.
                       </p>
                    </div>   

                    <div className="headerRight col-lg-4 mx-5 px-1">
                        <div className="bg-white p-3">
                        <form action="" className="form-group">
                            <div className="formGo">
                            <input type="text" className="form-control mt-2" placeholder="Email address or phone number"/>
                            </div>

                           <div>
                           <input type="password" className="form-control mt-2" placeholder="Password"/>
                           </div>

                            <input type="submit" className="form-control bg-primary text-white mt-2" value="Log In"/>

                            <div className="forgot">
                            <p className="text-primary mt-2">
                            Forgotten password?
                            </p>
                            </div>
                            <hr/>

                           <Button className="btn btn-success">
                             Create New Account
                           </Button>
                        </form>
                        </div>

                        <div className="business mt-4">
                            <p class="text-dark">
                                <span className="page"><a href="#">Create a page</a> </span> for a celebrity, band or business.
                            </p>
                        </div>
 
                    </div>
                   

                </div>

                <div className="headerRight">

                </div>
           </header>
            
        </div>
    )
}

export default Home
