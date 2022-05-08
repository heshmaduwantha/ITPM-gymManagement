import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import AddStaffMember from './Pages/StaffMembers/Add'
import ViewStaffMember from './Pages/StaffMembers/Viewall'
import EditStaffMember from './Pages/StaffMembers/Edit'
import AddWorkout from './Pages/Workout/Add'
import ViewWorkout from './Pages/Workout/Viewall'
import EditWorkout from './Pages/Workout/Edit'
import EditItems from './Pages/Items/Edit'

import AddItems from './Pages/Items/Add'
import ViewItems from './Pages/Items/Viewall'

function App() {
  return (
    <div>
     <Header/>
      <div className='row m-0'>
      <div className='col-2 m-0 p-0 mh-100'>
        <SideBar/>
      </div>
      <div className="col-10">
          <div className="page-content">
              <Routes>
                <Route path="/StaffMembers/Add" element={<AddStaffMember />} />
                <Route path="/StaffMembers/View" element={<ViewStaffMember />} />
                <Route path="/StaffMembers/Edit/:id" element={<EditStaffMember />} />
                <Route path="/Workout/Add" element={<AddWorkout />} />
                <Route path="/Workout/View" element={<ViewWorkout />} />
                <Route path="/Workout/Edit/:id" element={<EditWorkout />} />
                <Route path="/Items/Add" element={<AddItems />} />
                <Route path="/Items/View" element={<ViewItems />} />
                <Route path="/Items/Edit/:id" element={<EditItems />} />
              </Routes>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
