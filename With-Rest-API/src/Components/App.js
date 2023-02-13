import './App.css';
import React from 'react';
import Swal from 'sweetalert2';
import formValidations from './Validation.js';
import axiosPost from "./axiosRequest.js"
class App extends React.Component {
 constructor(){
    super();
    this.state = {
      fname: "",
      lname: "",
      uname: "",
      pnum : "",
      email: "",
      id : 0,
      skills: [],
      experienceFrom : "",
      experienceTo : "",
      description: "",
      endpoint: "http://localhost/Axiosdata/task.php",
      data: [],
    }
    this.handlesChange           = this.handlesChange.bind(this);
    this.handlesSkill            = this.handlesSkill.bind(this);
    this.formValidationHandler   = this.formValidationHandler.bind(this);
    this.deleteData              = this.deleteData.bind(this);
    this.editData                = this.editData.bind(this);
 }
 handlesChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
 }
 handlesSkill(e){
    if(e.target.checked == true){
      this.setState({
        skills : this.state.skills.concat(e.target.value),
      })
    } else{
      this.state.skills.splice(this.state.skills.indexOf(e.target.value), 1);
      this.setState({
        skills : this.state.skills
      })
    }
 }
 async deleteData(userid){
    let formData = new FormData();
    formData.append("id", userid);
    formData.append("action", "delete");
    let res = await axiosPost(this.state.endpoint, formData);
    Swal.fire({
      title : "Success",
      text : res.message,
      icon : res.status,
    })
    window.location.reload(); 
 }
 editData(userid){
    let formData = new FormData();
    formData.append("eid",userid);
    formData.append("action", "edit");
    axiosPost(this.state.endpoint, formData).then((res)=> {
      let skills = res.data[0].skills.split(",");
      this.setState({
        skills: [...skills]
      })
      // this.setState({
      //   skills: [...skills]
      // })
      this.setState({
        fname : res.data[0].fname,
        lname : res.data[0].lname,
        uname : res.data[0].uname,
        pnum  : res.data[0].pnum,
        email : res.data[0].email,
        experienceFrom : res.data[0].experienceFrom,
        experienceTo   : res.data[0].experienceTo,
        description    : res.data[0].descriptions,
        id : res.data[0].id,
      })

      console.log(this.state.skills, "dfxcgvhjksd");
    }); 
 }
 async formValidationHandler() {
  if (formValidations(this.state) == true) {
    let formData = new FormData();
    formData.append("fname", this.state.fname);
    formData.append("lname", this.state.lname);
    formData.append("uname", this.state.uname);
    formData.append("pnum", this.state.pnum);
    formData.append("email", this.state.email);
    formData.append("skills", this.state.skills);
    formData.append("experienceFrom", this.state.experienceFrom);
    formData.append("experienceTo", this.state.experienceTo);
    formData.append("description", this.state.description);
    if(this.state.id == 0){
      formData.append("action", "insert");
      let res = await axiosPost(this.state.endpoint, formData);
      Swal.fire({
        title : "Success",
        text : res.message,
        icon : res.status,
      })
    }else{
      formData.append("uid", this.state.id);
      formData.append("action", "update");
      let res = await axiosPost(this.state.endpoint, formData);
      Swal.fire({
        title : "Success",
        text : res.message,
        icon : res.status,
      })
    }
  }
 }
 async componentDidMount () {
  let formData = new FormData();
  formData.append("action", "assoc")
  let res = await axiosPost(this.state.endpoint, formData)
  this.setState({
    data : res.data
  })
 }
 render(){
    // console.log(this.state.skills  , "skillsS");
    return (
        <div>
          <header className="Header">
            <div className="text-center">
              <h1>Tekki Web Solutions / React.js (Task) </h1>
            </div>
          </header>
          <section>
            <div className = "container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className = "m-3">
                    <form>
                      <div className="form-group">
                        <input type = "hidden" value = {this.state.id} />
                        <label htmlFor="firstname">First Name :</label>
                        <input type="text" id="firstname" className="form-control" defaultValue = {this.state.fname} name = "fname" onChange = {this.handlesChange}/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" className="form-control" defaultValue = {this.state.lname} name = "lname" onChange = {this.handlesChange}/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" id="username" className="form-control" defaultValue = {this.state.uname} name = "uname" onChange = {this.handlesChange}/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="contact">Phone Number:</label>
                        <input type="number" id="contact" className="form-control" defaultValue = {this.state.pnum} name = "pnum"  onInput={(e) => e.target.value = e.target.value.slice(0, 10)} onChange = {this.handlesChange}/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" className="form-control" defaultValue = {this.state.email} name = "email" onChange = {this.handlesChange}/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="email">Skills:</label>
                        <div className="form-check  mt-3">
                          <input className="form-check-input" type="checkbox" value="html" id="html" onChange = {this.handlesSkill}  checked={this.state.skills.includes("html")}/>
                          <label className="form-check-label" htmlFor="html">
                            HTML
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  value="css" id="css" onChange = {this.handlesSkill} checked={this.state.skills.includes("css")}/>
                          <label className="form-check-label" htmlFor="css">
                            CSS
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  value="react" id="react" onChange = {this.handlesSkill} checked={this.state.skills.includes("react")}/>
                          <label className="form-check-label" htmlFor="react">
                            React
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  value="typesript" id="typesript" onChange = {this.handlesSkill} checked={this.state.skills.includes("typesript")}/>
                          <label className="form-check-label" htmlFor="typesript">
                            TypeScript
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  value="css3" id="css3" onChange = {this.handlesSkill} checked={this.state.skills.includes("css3")}/>
                          <label className="form-check-label" htmlFor="css3">
                            CSS3
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="javascript" id="javascript" onChange = {this.handlesSkill} checked={this.state.skills.includes("javascript")}/>
                          <label className="form-check-label" htmlFor="javascript">
                            Javascript
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="jquery" id="jquery" onChange = {this.handlesSkill} checked={this.state.skills.includes("jquery")}/>
                          <label className="form-check-label" htmlFor="jquery">
                            JQuery
                          </label>
                        </div>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="experience">Total Experience:</label>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group mt-2">
                              <label htmlFor="from">From:</label>
                              <input type="date" id="from" className="form-control" defaultValue = {this.state.experienceFrom} name = "experienceFrom" onChange = {this.handlesChange} />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group mt-2">
                              <label htmlFor="to">To:</label>
                              <input type="date" id="to" className="form-control" defaultValue = {this.state.experienceTo} name = "experienceTo" onChange = {this.handlesChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="description">Description:</label>
                        <textarea className = "form-control" id = "description" defaultValue = {this.state.description} name = "description" onChange = {this.handlesChange}></textarea>
                      </div>
                      <div className = "form-group mt-5">
                        <div className = "row">
                          <div className = "col-sm-2">
                            <button type = "button" className = "btn btn-primary" onClick = {this.formValidationHandler}>Submit</button>
                          </div>
                          <div className = "col-sm-10">
                            <button type = "submit" className = "btn btn-primary">New Record</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className = "m-3">
                    <table className ="table table-bordered">
                      <thead>
                        <tr align = "center">
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>User Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th colSpan = "2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        (this.state.data.length > 0) ?
                         this.state.data.map(item => {
                            return(
                              <tr key = {item.id}>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.uname}</td>
                                <td>{item.pnum}</td>
                                <td>{item.email}</td>
                                <td><button class = "btn btn-danger" onClick= {e => {this.deleteData(item.id)}}>DELETE</button></td>
                                <td><button class = "btn btn-warning" onClick= {e => {this.editData(item.id)}}>EDIT</button></td> 
                              </tr>
                            )
                          })
                          :
                          null
                      }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
}

export default App;
