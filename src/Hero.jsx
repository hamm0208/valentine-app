import firework_web from './assets/firework_web.mp4';
import firework_mobile from './assets/fireworks_mobile.mp4';

function Hero() {
	return (
		<>
			<div className="hero-wrapper">
				<div className="header-wrapper">
					<h1>Happy <span className='text-red'>Valentine !</span></h1>
					<p className="letter-wrapper">
						<span className='letter-head'> Dear Cammy,</span> <br/>
						<div className="letter-content">
							&emsp; I hope you are doing well, by the time you're reading this, it should be either at a fancy restaurant or at our favourite local dumpling store. 
							I am really happy that we've gone so far together, we've been through all the ups and downs, I regret nothing and would gladly go through everything again with you. 
							I am really grateful for you because you've helped me to become a better person, you've always support and guide me to become an improved version of myself everyday. 
							<br/>
							<br/>
							&emsp; You have the kindest soul in the world, you've always tried to help other people out, I admire you for that. I've always enjoy our time together, its like we are happy everywhere aslong as we have each other.
							Also you should have your flowers by the time you're reading this, I hope you like it and can have it by your side to remind you how much <span className='text-red'>i love you</span>
							<br/>
							<br/>
							&emsp; I promise that I'll work really hard to provide us a good life in the future, and I am glad that I have your support to acheive this as well. The rest of the page are going to be my favourite moments of us and our timeline . Enjoy!
						</div>
						<div className='letter-footer'>
							Sincerely <br/> by your beloved,<br/>
							Beckham
						</div>
					</p>
				</div>
				<div className='view-gallery-button '>
					<button 
						className="button-82-pushable" 
						role="button"
						onClick={() => document.getElementById("moments").scrollIntoView({ behavior: "smooth" })}
					>
						<span className="button-82-shadow"></span>
						<span className="button-82-edge"></span>
						<span className="button-82-front text">
							Enjoy
						</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default Hero;
