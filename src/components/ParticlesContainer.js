import React, { useEffect } from "react";
import Particles from "particlesjs";

function ParticlesContainer() {
	useEffect(() => {
		Particles.init({
			selector: ".background",
			maxParticles: 150,
			color: "#CCCCCC",
			connectParticles: true,

			responsive: [
				{
					breakpoint: 1100,
					options: {
						maxParticles: 120,
					},
				},
				{
					breakpoint: 768,
					options: {
						maxParticles: 90,
					},
				},
				{
					breakpoint: 540,
					options: {
						maxParticles: 60,
					},
				},
				{
					breakpoint: 425,
					options: {
						maxParticles: 35,
					},
				},
			],
		});
	}, []);

	return <canvas className="background"></canvas>;
}

export default ParticlesContainer;
