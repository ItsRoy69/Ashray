import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
// import { Link, useNavigate } from 'react-router-dom';
import "../../styles/EventCreate.css";
import Events from "../../assets/pictures/bro.png";
import { CreateAnEvents } from '../../service/AshrayApi';


export default function EventCreate() {

	const [event, setEvent] = useState({ eventname: '', eventlocation: '', eventdate: '', eventdescription: '' })

	const handleChange = (e) => {
		setEvent({ ...event, [e.target.name]: e.target.value })
	}

	const handleclick = async (e) => {
		e.preventDefault();
		const data = await CreateAnEvents(event);
		console.log(data);
		console.log(event)
	}
	return (
		<>
			<Navbar />

			<section class="vh-100">
				<div class="container py-5 h-100">
					<div class="row d-flex align-items-center justify-content-center h-100">
						<div class="col-md-8 col-lg-7 col-xl-6">
							<img src={Events} width="90%" alt='profile-img'></img>
						</div>

						<div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
							<form style={{ width: "auto" }} >

								<h2 className="eventCreateWelcome" >
									Create an event for your club
								</h2>
								<div class="form-outline">

									<input type="text" class="eventCreateFormInput form-control " id="eventName" name="eventname" required placeholder="What's your event called?" onChange={handleChange} value={event.eventname} />
								</div>

								<div class="form-outline">

									<input type="text" class="eventCreateFormInput form-control form-control-md" id="eventPlace" name="eventlocation" required placeholder="Where will the event take place?" onChange={handleChange} value={event.eventlocation} />
								</div>

								<div class="form-outline">

									<input type="text" class="eventCreateFormInput form-control form-control-md" id="eventTime" name="eventdate" required placeholder="When will it take place?" onChange={handleChange} value={event.eventdate} />
								</div>

								<div class="form-outline">

									<textarea type="text" class="eventCreateFormInput form-control form-control-lg" id="eventTime" name="eventdescription" placeholder="Tell us something more about the event" onChange={handleChange} value={event.eventdescription} />
								</div>


								<button
									type="submit"
									className="btn  eventCreateSubmit"
									onClick={(e) => { handleclick(e) }}
								>
									Create
								</button>
								<br></br> <br></br>




							</form>

						</div>
					</div>

				</div>
			</section >

		</>



	)
}
