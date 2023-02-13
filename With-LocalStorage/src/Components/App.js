import {useState, useEffect} from 'react';
import formValidation        from './Validation'
import LocalStorage_         from './LocalStorage_';
import Pagination            from './Pagination';

export default function App(){

  //states------
  const [fname , setFname]                                    = useState("");
  const [lname , setLname]                                    = useState("");
  const [uname , setUname]                                    = useState("");
  const [pnum  , setPnum]                                     = useState("");
  const [email , setEmail]                                    = useState("");
  const [skills, setSkills]                                   = useState([]);
  const [experienceTo  , setExperienceTo]                     = useState("");
  const [experienceFrom, setExperienceFrom]                   = useState("");
  const [description   , setDescription]                      = useState("");
  const [id, setId]                                           = useState(0);
  const [data, setData]                                       = useState("");

  //pagination---
  const [perpage, setPerpage]                                 = useState(5);
  const [currentpage, setCurrentpage]                         = useState(1);

  //setSkills
  function skillsHandler(e){
    if(e.target.checked == true){
      setSkills(skills.concat(e.target.value));
    }else{
      setSkills(skills.splice(skills.indexOf(e.target.value), 1))
      setSkills(skills);
    }
  }

  function Validator(){
    var data = {
      fname : fname,
      lname : lname,
      uname : uname,
      pnum  : pnum,
      email : email,
      skills: skills,
      experienceTo: experienceTo,
      experienceFrom: experienceFrom,
      description: description,
    }
    if(formValidation(data)){
      if(id == 0){
        LocalStorage_(data, "insert");
      }else{
        data.id = id;
        setData(LocalStorage_(data, "update"));
      }
    }
  }
  
  function editData(userid){
    let res = LocalStorage_(userid, "edit");
    setId(res.id);
    setFname(res.fname);
    setLname(res.lname);
    setUname(res.uname);
    setPnum(res.pnum);
    setEmail(res.email);
    setSkills(res.skills);
    setExperienceTo(res.experienceTo);
    setExperienceFrom(res.experienceFrom);
    setDescription(res.description);
  }

  function deleteData(userid){
    setData(LocalStorage_(userid, "delete"));
  }

  useEffect(()=>{
    setData(LocalStorage_(null, "get"));
  },[])

  //GETTING CURRENT PAGE ITEMS
  const lastoffset  = currentpage * perpage;
  const firstoffset = lastoffset - perpage;
  const displayData = data.slice(firstoffset, lastoffset);

  //GET PAGE NUMBER
  const paginate = (pageNumber) => setCurrentpage(pageNumber);


  return(
    <div>
      <div className = "Header">
        <div className = "text-center">
          <h1>Tekki Web Solutions Task using Function Components</h1>
        </div>
      </div>
      <div className = "container-fluid" >
        <div className = "row">
          <div className= "col-sm-6 " >
            <form>
              <div className = "form-group mt-2">
                <input type = "hidden" defaultValue = {id} />
                <label htmlFor = "firstname">First Name:</label>
                <input className = "form-control"  type = "text" id = "firstname" onChange = {(e)=> setFname(e.target.value)} defaultValue = {fname} />
              </div>
              <div className = "form-group mt-2">
                <label htmlFor = "lastname">Last Name:</label>
                <input className = "form-control" defaultValue = {lname} type = "text" id = "lastname" onChange = {(e)=> setLname(e.target.value)}/>
              </div>
              <div className = "form-group mt-2">
                <label htmlFor = "username">User Name:</label>
                <input className = "form-control" defaultValue = {uname} type = "text" id = "username" onChange = {(e)=> setUname(e.target.value)}/>
              </div>
              <div className = "form-group mt-2">
                <label htmlFor = "contact">Phone Number:</label>
                <input className = "form-control" onInput={(e) => e.target.value = e.target.value.slice(0, 10)} defaultValue = {pnum} type = "number" id = "contact" onChange = {(e)=> setPnum(e.target.value)}/>
              </div>
              <div className = "form-group mt-2">
                <label htmlFor = "email">Email:</label>
                <input className = "form-control" defaultValue = {email} type = "text" id = "email" onChange = {(e)=> setEmail(e.target.value)}/>
              </div>
              <div className = "form-group mt-2">
                <label >Skills:</label>
                <div className='mt-1'>
                  <input id = "html" className = "form-check-input" type = "checkbox" value = "html" onChange = {skillsHandler} checked = {skills.includes("html")} />
                  <label htmlFor = "html" className= 'form-check-label'>HTML</label>
                </div>
                <div>
                  <input id = "css" className = "form-check-input" type = "checkbox" value = "css" onChange = {skillsHandler} checked = {skills.includes("css")}/>
                  <label htmlFor = "css" className = "form-check-label">CSS</label>
                </div>
                <div>
                  <input id = "css3" className = "form-check-input" type = "checkbox" value = "css3" onChange = {skillsHandler} checked = {skills.includes("css3")}/>
                  <label htmlFor = "css3" className = "form-check-label">CSS3</label>
                </div>
                <div>
                  <input id = "javascript" className = "form-check-input" type = "checkbox" value = "javacsript" onChange = {skillsHandler} checked = {skills.includes("javacsript")}/>
                  <label htmlFor = "javascript" className = "form-check-label">JavaScript</label>
                </div>
                <div>
                  <input id = "react" className = "form-check-input" type = "checkbox" value = "react" onChange = {skillsHandler} checked = {skills.includes("react")}/>
                  <label htmlFor = "react" className = "form-check-label">React</label>
                </div>
                <div>
                  <input id = "typescript" className = "form-check-input" type = "checkbox" value = "typescript" onChange = {skillsHandler} checked = {skills.includes("typescript")}/>
                  <label htmlFor = "typescript" className = "form-check-label">TypeScript</label>
                </div>
                <div>
                  <input id = "jquery" className = "form-check-input" type = "checkbox" value = "jquery" onChange = {skillsHandler} checked = {skills.includes("jquery")}/>
                  <label htmlFor = "jquery" className = "form-check-label">JQuery</label>
                </div>
              </div>
              <div className = "form-group mt-2">
                <label htmlFor = "experience">Total Experience</label>
                <div className = "row mt-1">
                  <div className = "col-sm-6">
                    <label>From:</label>
                    <input id = "experience" type = "date" defaultValue = {experienceTo} className='form-control' onChange = {(e)=> setExperienceTo(e.target.value)}/>
                  </div>
                  <div className = "col-sm-6">
                    <label>To:</label>
                    <input type = "date" className='form-control' defaultValue = {experienceFrom} onChange = {(e)=> setExperienceFrom(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className = "form-group mt-2">
                <label htmlFor = "description">Description</label>
                <textarea id = "description" defaultValue = {description} className='form-control' onChange = {(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className='row mt-5'>
                <div className='col-md-6'>
                  <button type = "button" className='btn btn-primary' onClick = {Validator}>Submit</button>
                </div>
                <div className='col-md-6'>
                  <button type = "submit" className='btn btn-primary'>New Record</button>
                </div>
              </div>
            </form>
          </div>
          <div className= "col-sm-6" >
            <div className = 'mt-2'>
              <table className ="table table-bordered">
                <thead>
                  <tr align = "center">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th colSpan = "2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (displayData.length > 0) ? displayData.map((item) => {
                      return(
                        <tr key = {item.id}>
                          <td>{item.fname}</td>
                          <td>{item.lname}</td>
                          <td>{item.email}</td>
                          <td>{item.pnum}</td>
                          <td><button className = 'btn btn-warning' onClick = {()=> editData(item.id)}>EDIT</button></td>
                          <td><button className = 'btn btn-danger' onClick = {()=> deleteData(item.id)}>DELETE</button></td>
                        </tr>
                      )
                    })
                    : null
                  }
                </tbody>
              </table>
            </div>
            <div>
              <Pagination perpage = {perpage} totaldata = {data.length} paginate = {paginate}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}