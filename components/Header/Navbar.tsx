import React from 'react'

function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center app-navbar justify-content-center justify-content-md-between py-3 mb-4">
      <a href="#" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
        <img src='/logo.png' height={32} />
      </a>

      <ul className="nav app-navbar-menu col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className='active'><a href="#" className="nav-link px-2">Home</a></li>
        <li><a href="#" className="nav-link px-2">Features</a></li>
        <li><a href="#" className="nav-link px-2 ">Pricing</a></li>
        <li><a href="#" className="nav-link px-2">FAQs</a></li>
        <li><a href="#" className="nav-link px-2">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn butt-primary-out me-2">Login</button>
        <button type="button" className="btn butt-primary butt-sm">Sign-up</button>
      </div>
    </header>
  )
}

export default Navbar