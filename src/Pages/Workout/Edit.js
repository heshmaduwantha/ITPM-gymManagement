import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from "react-router";

export default function Add() {

  const [form, setForm] = useState({
    name:"",
    date:"",
    day1:"",
    day2:"",
    day3:"",
    day4:"",
    day5:"",
    day6:"",
    day7:""
});

const params = useParams();
const navigate = useNavigate();

useEffect(() => {
  async function fetchData() {
    const id = params.id.toString();
    const response = await fetch(`http://localhost:4000/workout/${params.id.toString()}`);

    if (!response.ok) {
      const message = `An error has occured: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const record = await response.json();
    if (!record) {
      window.alert(`Record with id ${id} not found`);
      navigate("/Workout/View");
      return;
    }

    setForm(record);
  }

  fetchData();

  return;
}, [params.id, navigate]);

 // These methods will update the state properties.
function updateForm(value) {
return setForm((prev) => {
  return { ...prev, ...value };
});
}

async function onSubmit(e) {
e.preventDefault();
const editedWorkout = { ...form };

// This will send a post request to update the data in the database.
await fetch(`http://localhost:4000/workout/update/${params.id}`, {
  method: "POST",
  body: JSON.stringify(editedWorkout),
  headers: {
    'Content-Type': 'application/json'
  },
});

navigate("/Workout/View");
}

    return (
       <div className="panel page">
            <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Update Workout</h3>
            </div>
            <div className='col-6 text-right'>
            </div>
          </div>
        </header>
            <div className="panel-body container-fluid">
                <div className="example col-12">
                    <form onSubmit={onSubmit} >
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Workout Name: </label>
                                <div className="col-md-9">
                                <input type="text" className="form-control" name="name" id="name" 
                                   value={form.name}
                                   onChange={(e) => updateForm({ name: e.target.value })}
                                />
                                </div>
                            </div>
                           
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Added Date: </label>
                                <div className="col-md-9">
                                <div class="input-group input-group-icon">
                                <input type="date" className="form-control" id='date'  name='date'
                                   value={form.date}
                                   onChange={(e) => updateForm({ date: e.target.value })}
                                />
                                    <span class="input-group-addon">
                                    <span class="icon wb-calendar" aria-hidden="true"></span>
                                    </span>
                                </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Details: </label>
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>
                                        <div class="row m-0 p-0 text-center">
                                          <div className="col-12 text-center">
                                             Monday
                                          </div>
                                           
                                        </div>
                                      </th>
                                      <th >
                                       <div class="row m-0 p-0 text-center">
                                          <div className="col-12 text-center">
                                             TuesDay
                                          </div>
                                        </div>
                                      </th>
                                      <th >
                                      <div class="row m-0 p-0 text-center">
                                          <div className="col-12 text-center">
                                             Wednesday
                                          </div>
                                           
                                        </div>
                                      </th>
                                      <th >
                                      <div class="row m-0 p-0 text-center">
                                          <div className="col-12 text-center">
                                             Thursday
                                          </div>
                                           
                                        </div>
                                      </th>
                                      <th >
                                        <div class="row m-0 p-0 text-center">
                                          <div className="col-12 text-center">
                                             Friday
                                          </div>
                                           
                                        </div>
                                      </th>
                                      <th >
                                        <div class="row m-0 p-0 text-center">
                                          <div className="col-12 text-center">
                                             Saturday
                                          </div>
                                           
                                        </div>
                                      </th>
                                      <th >
                                        <div class="row m-0 p-0 text-center">
                                          <div className="col-12 text-center">
                                             Sunday
                                          </div>
                                           
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div class="row m-0 p-0 text-center">
                                            <div className="col-12 text-center">
                                                <input className="form-control" type="text" 
                                                value={form.day1}
                                                onChange={(e) => updateForm({ day1: e.target.value })}
                                                ></input>
                                            </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div class="row m-0 p-0 text-center">
                                            <div className="col-12 text-center">
                                                <input className="form-control" type="text" 
                                                 value={form.day2}
                                                 onChange={(e) => updateForm({ day2: e.target.value })}></input>
                                            </div>
                                            
                                        </div>
                                      </td>
                                      <td>
                                        <div class="row m-0 p-0 text-center">
                                            <div className="col-12 text-center">
                                                <input className="form-control" type="text"
                                                 value={form.day3}
                                                 onChange={(e) => updateForm({ day3: e.target.value })}
                                                ></input>
                                            </div>
                                        
                                        </div>
                                      </td>
                                      <td>
                                        <div class="row m-0 p-0 text-center">
                                            <div className="col-12 text-center">
                                                <input className="form-control" type="text" 
                                                   value={form.day4}
                                                   onChange={(e) => updateForm({ day4: e.target.value })}
                                                ></input>
                                            </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div class="row m-0 p-0 text-center">
                                            <div className="col-12 text-center">
                                                <input className="form-control" type="text" 
                                                   value={form.day5}
                                                   onChange={(e) => updateForm({ day5: e.target.value })}
                                                ></input>
                                            </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div class="row m-0 p-0 text-center">
                                            <div className="col-12 text-center">
                                                <input className="form-control" type="text" 
                                                  value={form.day6}
                                                  onChange={(e) => updateForm({ day6: e.target.value })}
                                                ></input>
                                            </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div class="row m-0 p-0 text-center">
                                            <div className="col-12 text-center">
                                                <input className="form-control" type="text" 
                                                  value={form.day7}
                                                  onChange={(e) => updateForm({ day7: e.target.value })}
                                                ></input>
                                            </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>

                            <div className="form-group row text-right">
                                    <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary mr-1">Update Workout</button>
                                    <Link to = "/Workout/View" className="btn btn-danger">Cancel</Link>
                                    </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

