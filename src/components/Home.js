import React, { useState } from "react";
import axios from "axios";
const Home = () => {
	let [name, setName] = useState("");
	let [loaded, setLoaded] = useState(false);
	let [gender, setGender] = useState("");
	let [prob, setProb] = useState("");

	async function getData() {
		setLoaded(true);
		if (name !== "") {
			let resp = await axios.get(
				`https://api.genderize.io/?name=${name}`
			);
			setProb(resp.data.probability);
			setGender(resp.data.gender);
			setLoaded(false);
			console.log(resp);
			setName("");
		} else {
			alert("enter valid name");
			setLoaded(false);
			setName("enter valid name");
		}
	}

	return (
		<div>
			<div
				className="card mh-50 shadow-lg p-3 mb-5 bg-body rounded"
				style={{ width: "15rem;" }}
			>
				<img
					src="https://images.unsplash.com/photo-1545693315-85b6be26a3d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VuZGVyJTIwZXF1YWxpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
					className="card-img-top "
					style={{ maxHeight: "250px" }}
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Gender Predictor</h5>
					<p className="card-text">
						Enter your name it will predict your Gender.
					</p>
					<input
						type="text"
						value={name}
						placeholder="Enter name here"
						onChange={(e) => setName(e.target.value)}
					/>
					<br />
					<button
						className="btn btn-primary mt-2 mb-5"
						onClick={getData}
					>
						Predict My Gender
					</button>
					<br />
					{loaded ? (
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					) : (
						<p className="card-text">
							Gender {gender} Probability {prob}%.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
