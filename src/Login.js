import React from "react";
import './Login.css';

function Login() {
    return <React.Fragment>
        <div className="Header">
            <div className="LoginContainer">
                <div class="mb-3 logoContainer">
                    <div>
                        <p>Welcome to <section class="font-weight-bold color_purple bold " >Equipmentals.pk</section> </p>
                    </div>
                    <div>
                        <div class="logo_image_container">
                                <img  src="./images/logo.png" alt="Logo"/>
                        </div>
                        <h6>Equipmentals</h6>
                        <p class="grey_color">Rent your dreams</p>
                    </div>
                </div>
                <div>
                    <h2>Sign Up</h2>
                </div>
                <form>
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter your Email Address</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" required />
                </div>
                <div class="handle_Input">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number" required/>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter your Password</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Password" required/>
                </div>
                <div class="col-auto loginbuttonContainer">
                    <button type="submit" class="btn btn-primary mb-3 form-control">Sign Up</button>
                </div>
                </form>
                <div class="col-auto text-center sign_in">
                    <p>Have an account? <a href="/">sign in</a></p>
                </div>
            </div>
        </div>
    </React.Fragment>;
}


export default Login;