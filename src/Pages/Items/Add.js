import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";

export default function Add() {

  const [form, setForm] = useState({
    name:"",
    description:"",
    price:"",
});

const navigate = useNavigate();

 // These methods will update the state properties.
 function updateForm(value) {
  return setForm((prev) => {
    return { ...prev, ...value };
  });
}

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newWork = { ...form };

    await fetch("http://localhost:4000/items/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWork),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ name: "", description: "", price: "" });
    navigate("/Items/View");
  }

    return (
       <div className="panel page">
            <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Add Item</h3>
            </div>
            <div className='col-6 text-right'>
            </div>
          </div>
        </header>
            <div className="panel-body container-fluid">
                <div className="example col-8">
                    <form onSubmit={onSubmit} >
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Name: </label>
                                <div className="col-md-9">
                                <input type="text" className="form-control" name="name" id="name" 
                                   value={form.name}
                                   onChange={(e) => updateForm({ name: e.target.value })}
                                   required
                                />
                                </div>
                            </div>
                           
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Description: </label>
                                <div className="col-md-9">
                                <input type="text" className="form-control" name="description" id="description" 
                                   value={form.description}
                                   onChange={(e) => updateForm({ description: e.target.value })}
                                   required
                                />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Price: </label>
                                <div className="col-md-9">
                                <input type="number" className="form-control" name="price" id="price" 
                                   value={form.price}
                                   onChange={(e) => updateForm({ price: e.target.value })}
                                   required
                                />
                                </div>
                            </div>
                         


                            <div className="form-group row text-right">
                                    <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary mr-1">Add Item</button>
                                    <Link to = "/Items/View" className="btn btn-danger">Cancel</Link>
                                    
                                    
                                    </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

