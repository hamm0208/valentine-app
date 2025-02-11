import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import moments from "./assets/moments";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

function Moments() {
  const [v_showContext, setV_showContext] = useState(false);

  const toggleContext = () => {
	setV_showContext(!v_showContext);
  };

  return (
	<div className="moments" id="moments">
		<h2>Our Moments</h2>
		<p className="moments-guidance">(Click/Tap to view description)</p>
		<Swiper
			loop={true}
			pagination={{
				type: "progressbar",
			}}
			modules={[Pagination]}
			className="mySwiper"
		>
			{Object.entries(moments).map(([key, moment]) => (
			<SwiperSlide key={key}>
				<div className="moment-wrapper" onClick={toggleContext}>
				<div className="moment-image">
					<img src={moment.image} alt={key} />
				</div>
				<div className={`moment-context ${v_showContext ? "show" : ""}`}>
					<p>{moment.description}</p>
				</div>
				</div>
			</SwiperSlide>
			))}
		</Swiper>
	</div>
  );
}

export default Moments;
