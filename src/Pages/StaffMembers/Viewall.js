/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'

export default function Viewall() {

  const [records, setRecords] = useState([]);

  const Record = (props) => (
    <tr>
      <td><img src={props.record.image} class="avatar avatar" alt=""/></td>
      <td>{props.record.fullName}</td>
      <td>{props.record.roleid}</td>
      <td>{props.record.email}</td>
      <td>{props.record.mobile}</td>
      <td>
      <Link className="btn btn-icon btn-primary" to={`/StaffMembers/Edit/${props.record._id}`}><i class="icon wb-pencil" aria-hidden="true"></i></Link>
        <button className="btn btn-icon btn-danger ml-1"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
        <i class="icon wb-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );

    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`http://localhost:4000/member/all`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const records = await response.json();
        setRecords(records);
      }
  
      getRecords();
  
      return; 
    }, [records.length]);


     // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:4000/member/delete/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

    // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }
    return (
    <div className="panel">
        <header className="panel-heading">
          <div className='row p-2'>
            <div className='col-6'>
              <h3 className="panel-title">Staff Member List</h3>
            </div>
            <div className='col-6 text-right'>
              <Link to = "/StaffMembers/Add" className='btn btn-primary' >
             + Add Staff Member
              </Link>
            </div>
          </div>
        </header>
        <div className="panel-body">
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Staff Member Name</th>
              <th>Role</th>
              <th>Staff Member Email</th>
              <th>Mobile No</th>
              <th>Action</th>
            </tr>
          </thead>
        <tbody>{recordList()}</tbody>
        </table>
        </div>
    </div>
    )
}
