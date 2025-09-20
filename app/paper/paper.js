'use client';
import React, { useEffect, useState } from "react";

const mmInCm = 10;
const mmInM = 100 * mmInCm;
const mmInKm = 1000 * mmInM;
const imgUrls = [
	"paper.jpg",
	"hair.jpg",
	"sand.jpg",
	"pencil-tip.jpg",
	"spaghetti.jpg",
	"ladybug.jpg",
	"sunflower-seed.jpg",
	"coffee-bean.jpg",
	"penny.jpg",
	"chicken-egg.jpg",
	"hummingbird.jpg",
	"basketball.jpg",
	"bowling-pin.jpg",
	"cheetah.jpg",
	"woman.jpg",
	"beetle.jpg",
	"giraffe.jpg",
	"oak-tree.jpg",
	"blue-whale.jpg",
	"boeing.jpg",
	"statue-of-liberty.jpg",
	"gateway-arch.jpg",
	"eiffel-tower.jpg",
	"burj-khalifa.jpg",
	"kentucky.jpg",
	"central-park.jpg",
	"las-vegas.jpg",
	"mount-everest.jpg",
	"mariana-trench.jpg",
	"rhode-island.jpg",
	"space.jpg",
	"suez-canal.jpg",
	"grand-canyon.jpg",
	"indy500.jpg",
	"california.jpg",
	"pluto.jpg",
	"mars.jpg",
	"newyork-sydney.jpg",
	"earth.jpg",
	"neptune.jpg",
	"saturn.jpg",
	"ProximaCentauri.jpg",
	"moon.jpg"
];
const paperComparisons = [
	"thick as a piece of paper (obviously... 🤦‍♂️)",
	"thick as a strand of hair",
	"wide as a grain of sand",
	"wide as the tip of a pencil",
	"thick as a spaghetti strand",
	"tall as a ladybug",
	"thick as a sunflower seed",
	"long as a coffee bean",
	"wide as a penny",
	"tall as an egg",
	"tall as a hummingbird",
	"tall as a basketball",
	"tall as a bowling pin",
	"tall as a cheetah",
	"tall as an average woman",
	"long as a Volkswagen Beetle",
	"tall as a giraffe",
	"tall as an oak tree",
	"long as a blue whale",
	"wide as the wingspan of a Boeing 747",
	"tall as the Statue of Liberty",
	"tall as the Gateway Arch",
	"tall as (actually taller than) the Eiffel Tower",
	"tall as the Burj Khalifa",
	"long as the Kentucky Derby",
	"long as Central Park",
	"long as the Las Vegas Strip",
	"tall as Mount Everest",
	"deep as the Mariana Trench",
	"long as Rhode Island",
	"high as space",
	"long as the Suez Canal",
	"long as the Grand Canyon",
	"long as 500 laps around the Indianapolis Motor Speedway",
	"long as California",
	"long as Pluto's diameter",
	"long as Mars's diameter",
	"long as the trip from NYC to Sydney",
	"thick as necessary to wrap around Earth",
	"long as Neptune's diameter",
	"long as Saturn (without the rings)'s diameter",
	"long as Proxima Centauri's diameter",
	"thick as necessary to REACH THE MOON! You did it"
];
const mmToString = mm => (mm < 10 * mmInCm ? mm.toFixed(1) + " millimeters" : (mm < mmInM ? (mm / mmInCm).toFixed(1) + " centimeters" : (mm < mmInKm ? (mm / mmInM).toFixed(1) + " meters" : (mm < 1000 * mmInKm ? (mm / mmInKm).toFixed(1) + " kilometers" : (mm / mmInKm).toFixed(0) + " kilometers"))));

export default _ => {
	const [folds, setFolds] = useState(0);
	const changeFolds = dir => setFolds(folds + dir);
	return (
		<>
			<h1 id="title">Paper</h1>
			<p id="subtitle">See how it all stacks up... like how far you can fold<br />a tiny variation of <a href="https://neal.fun/paper/">neal.fun/paper/</a><br />Yes, I stole his images AGAIN. I'll eventually get new images for everything, probably...</p>
			<div id="paperContainer">
				<p id="paperFolds">{folds} Fold{folds === 1 ? "" : "s"}</p>
				<img id="paperImg" src={"https://neal.fun/paper/" + imgUrls[folds]} />
				<p id="paperThickness">The paper is {mmToString(0.1 * (2 ** folds))} thick.</p>
				<p id="paperLabel">That's as {paperComparisons[folds]}.</p>
				<button id="paperUnfold" disabled={!folds} onClick={_ => changeFolds(-1)}>Unfold</button>
				<button id="paperFold" disabled={folds === 42} onClick={_ => changeFolds(1)}>Fold</button>
			</div>
		</>
	)
}