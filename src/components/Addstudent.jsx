import React from 'react'
import Navbar from './Navbar'

const Addstudent = () => {
  return (
    <div>

<Navbar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">Name</label>
<input type="Name" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Admission No</label>
        <input type="Admission NO" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">RollNo</label>
        <input type="RollNo" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">Parent Name</label>
<input type="Parent Name" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">College</label>
       <input type="college" className="form-contol" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-control">Date Of birth</label>
        <input type="date" name="" id="" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Email-ID</label>
        <input type="Email-ID" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Password</label>
        <input type="Password" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Confirm Password</label>
<input type="Confirm Password" className="form-control" />
</div>
    <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary">Register</button>
    </div>
</div>       </div>
    </div>
</div>

    </div>
  )
}

export default Addstudent