import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";

export default function Add() {
	const [form, setForm] = useState({
		id: "",
		name: "",
		description: "",
		price: "",
	});

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			const id = params.id.toString();
			const response = await fetch(
				`http://localhost:4000/items/${params.id.toString()}`
			);

			if (!response.ok) {
				const message = `An error has occured: ${response.statusText}`;
				window.alert(message);
				return;
			}

			const record = await response.json();
			if (!record) {
				window.alert(`Record with id ${id} not found`);
				navigate("/Items/View");
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
		const editedItem = { ...form };

		// This will send a post request to update the data in the database.
		await fetch(`http://localhost:4000/items/update/${params.id}`, {
			method: "POST",
			body: JSON.stringify(editedItem),
			headers: {
				"Content-Type": "application/json",
			},
		});

		navigate("/Items/View");
	}

	return (
		<div className="panel page">
			<header className="panel-heading">
				<div className="row p-2">
					<div className="col-6">
						<h3 className="panel-title">Update Item</h3>
					</div>
					<div className="col-6 text-right"></div>
				</div>
			</header>
			<div className="panel-body container-fluid">
				<div className="example col-12">
					<form onSubmit={onSubmit}>
						<div className="form-group row">
							<label className="col-md-3 col-form-label"> Item Name: </label>
							<div className="col-md-9">
								<input
									type="text"
									className="form-control"
									name="name"
									id="name"
									value={form.name}
									onChange={(e) => updateForm({ name: e.target.value })}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-md-3 col-form-label">
								{" "}
								Item Description:{" "}
							</label>
							<div className="col-md-9">
								<input
									type="text"
									className="form-control"
									name="description "
									id="description "
									value={form.description}
									onChange={(e) =>
										updateForm({ description: e.target.value })
									}
								/>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-md-3 col-form-label"> Item Price: </label>
							<div className="col-md-9">
								<input
									type="text"
									className="form-control"
									name="price"
									id="price"
									value={form.price}
									onChange={(e) => updateForm({ price: e.target.value })}
								/>
							</div>
						</div>

						<div className="form-group row">
							<div className="col-md-9">
								<button type="submit" className="btn btn-primary mr-1">
									Update Item
								</button>
                <Link to = "/Items/View" className="btn btn-danger">Cancel</Link>

							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
