import React from 'react'

class Main extends React.Component {
    render(){

    return(
        <div>
<body>
    
    <div className="overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="fakhru/mp4/bg.mp4" type="video/mp4"/>
    </video>
  
    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-8 my-auto">
            <div className="masthead-content text-black py-5 py-md-50">
              <h1 className="mb-3">Coming Soon!</h1>
              <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
                <strong> January 2019</strong>! Sign up for updates using the form below!</p>
              <div className="input-group input-group-newsletter">
                <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon"/>
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">Notify Me!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href="/#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="/#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="/#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  

    <script src="fakhru/vendor/jquery/jquery.min.js"></script>
    <script src="fakhru/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  
    
    <script src="fakhru/js/coming-soon.min.js"></script>
  
  </body>
  
  </div>
    )}
}
export default Main