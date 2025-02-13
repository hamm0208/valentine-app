import { useState, useRef } from "react";
import timelineData from "./TIMELINE_CONST.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


function Timeline() {
	const [visibleYears, setVisibleYears] = useState({});
	const contentRefs = useRef({}); // Stores refs for each year's event list

	const toggleYear = (year) => {
	setVisibleYears((prev) => {
		const isVisible = !prev[year];
		const contentDiv = contentRefs.current[year];

		if (contentDiv) {
		if (isVisible) {
			// Expand: Set display to block, then animate height
			contentDiv.style.display = "block";
			requestAnimationFrame(() => {
			contentDiv.style.height = contentDiv.scrollHeight + "px";
			});
		} else {
			// Collapse: Animate height to 0, then hide after transition
			contentDiv.style.height = "0px";
			setTimeout(() => {
			contentDiv.style.display = "none";
			}, 400); // Match CSS transition time
		}
		}

		return { ...prev, [year]: isVisible };
	});
	};

	return (
	<div className="timeline-wrapper">
		<h2>Our Timeline</h2>
		<div className="timeline lg-hiden">
		{Object.entries(timelineData)
			.sort(([yearA], [yearB]) => yearB - yearA)
			.map(([year, events]) => (
			<div key={year}>
				<h3 className="timeline-year" onClick={() => toggleYear(year)}>
				{year}
				<FontAwesomeIcon 
					icon={faAngleDown} 
					className={`icon-transition ${visibleYears[year] ? "rotated" : ""}`} 
				/>
				</h3>
				<div
				ref={(el) => (contentRefs.current[year] = el)}
				className="events-wrapper"
				style={{
					height: "0px",
					overflow: "hidden",
					transition: "height 0.4s ease-in-out",
					display: "none"
				}}
				>
				{events.map((event, index) => {
					const content = (
					<div className="event-content">
						<h4 className="text-center">{event.header}</h4>
						<div className="event-src">
							<img src={event.image} alt={event.header} className="event-img" />
						</div>
						<p className="text-center text-xl-start">{event.description}</p>
					</div>
					);

					return (
					<div className="event row d-flex justify-content-start justify-content-xl-center" key={index}>
						<div className="col-xl-4 d-none d-xl-flex flex-column align-items-end justify-content-center">
							{index % 2 === 0 && content}
						</div>

						<div className="col-3 col-xl-1 d-flex flex-column justify-content-center align-items-center timeline-line">
							<h5>{event.date}</h5>
						</div>

						<div className="col-2 col-xl-4 d-flex flex-column align-items-start justify-content-center">
							{index % 2 !== 0 || window.innerWidth < 1200 ? content : null}
						</div>
					</div>

					);
				})}
				</div>
			</div>
			))}
		</div>
	</div>
	);
}

export default Timeline;
