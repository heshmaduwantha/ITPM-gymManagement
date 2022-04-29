
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId

const StaffModel = require("../models/staffmember");

// This section will help you get a list of all the records.
recordRoutes.route("/member/all").get(function (req, res) {
    let db_connect = dbo.getDb("Staff");
    db_connect
      .collection("staffmembers")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  // This section will help you create a new record.
recordRoutes.route("/member/add").post(function (req, response) {
    let db_connect = dbo.getDb();

    const member = new StaffModel({
        fullName:req.body.fullName,
        gender:req.body.gender,
        birthDay:req.body.birthDay,
        roleid:req.body.roleid,
        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
        image:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    });
    
    db_connect.collection("staffmembers").insertOne(member, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

  // This section will help you delete a record
  recordRoutes.route("/member/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("staffmembers").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });

  // This section will help you get a single record by id
recordRoutes.route("/member/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("staffmembers")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });

  // This section will help you update a record by id.
recordRoutes.route("/member/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let member = {
      $set: {
         fullName:req.body.fullName,
        gender:req.body.gender,
        birthDay:req.body.birthDay,
        roleid:req.body.roleid,
        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
        image:"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      },
    };
    db_connect
      .collection("staffmembers")
      .updateOne(myquery, member, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });

module.exports = recordRoutes;
