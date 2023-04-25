import './App.css';
function App() {
  return (
    <div>
      <header className="d-flex justify-content-between p-4 border-bottom">
        <h5 className="mr-md-auto font-weight-normal">Company name</h5>
        <div className="d-flex align-items-center gap-3">
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2" href="#">Features</a>
            <a className="p-2" href="#">Enterprise</a>
            <a className="p-2" href="#">Support</a>
            <a className="p-2" href="#">Pricing</a>
          </nav>
          <button className="btn btn-outline-primary">Sign Up</button>
        </div>
      </header>
      <main className='p-3'>
        <div className="d-flex flex-column mt-5 mb-4 align-items-center justify-content-center text-center">
          <div className="display-4">Pricing</div>
          <div className="lead w-50">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</div>
        </div>
        <div className="container">
        <div className="d-flex justify-content-center align-items-center gap-5">
          <div className="card w-25 text-center mb-4 ">
              <div className="card-header">
              <h4 className="card-title">Free</h4>
              </div>
            <div className="card-body">
              <h1 className="card-title">$0<span className="span text-muted"> / mo</span></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button className='btn btn-lg btn-block w-100 btn-outline-primary'>Sign up for free</button>
            </div>
          </div>
          <div className="card w-25 text-center mb-4 ">
              <div className="card-header">
              <h4 className="card-title">Pro</h4>
              </div>
            <div className="card-body">
              <h1 className="card-title">$15<span className="span text-muted"> / mo</span></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button className='btn btn-lg btn-block  w-100 btn-primary'>Get started</button>
            </div>
          </div>
          <div className="card w-25 text-center mb-4 ">
              <div className="card-header">
              <h4 className="card-title">Enterprise</h4>
              </div>
            <div className="card-body">
              <h1 className="card-title">$29<span className="span text-muted"> / mo</span></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone email support</li>
                <li>Help center access</li>
              </ul>
              <button className='btn btn-lg btn-block  w-100 btn-primary'>Contact us</button>
            </div>
          </div>
        </div>
        </div>
      </main>
      <div className="container">
      <footer class="pt-4 my-md-5 pt-md-5 mx-5 border-top">
        <div class="row">
          <div class="col2 col-md">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" className='logo-img img-fluid mb-3 ' alt="" />
            <small class="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
