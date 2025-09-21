'use client';
import React, { useEffect, useState, useRef } from "react";
import SpeedItem from "@/components/speedItems";
import ReturnHome from "@/components/returnHome";
import SubAndTitle from "@/components/subAndTitle";

const msInSec = 1000;
const msInMin = 60 * msInSec;
const offset = _ => new Date().getTimezoneOffset() * msInMin;
const msInHr = 60 * msInMin;
const msInDay = 24 * msInHr;
const msInYr = year => msInDay * (new Date(new Date().getFullYear() + year, 1, 29).getDate() === 29 ? 366 : 365);
const mmInCm = 10;
const mmInM = 100 * mmInCm;
const mmInKm = 1000 * mmInM;
const msToString = ms => (ms < msInSec ? ms + " millisecond" + (ms < 2 ? "" : "s") : (ms < msInMin ? Math.floor(ms / msInSec) + " second" + (ms < 2 * msInSec ? "" : "s") : (ms < msInHr ? Math.floor(ms / msInMin) + " minute" + (ms < 2 * msInMin ? "" : "s") + " " + (msToString(ms % msInMin)) : (ms < msInDay ? Math.floor(ms / msInHr) + " hour" + (ms < 2 * msInHr ? "" : "s") + " " + (msToString(ms % msInHr)) : (ms < msInYr(0) ? Math.floor(ms / msInDay) + " day" + (ms < 2 * msInDay ? "" : "s") + " " + (msToString(ms % msInDay)) : Math.floor(ms / msInYr(0)) + " year" + (ms < 2 * msInYr(0) ? "" : "s") + " " + (msToString(ms % msInYr(0))))))));
const loadTime = Date.now();
export default _ => {
	const [time, setTime] = useState(Date.now());
	const animationFrameId = useRef();
	const update = _ => {
		setTime(Date.now());
		animationFrameId.current = requestAnimationFrame(update);
	}
	useEffect(_ => {
		animationFrameId.current = requestAnimationFrame(update);
		return _ => cancelAnimationFrame(animationFrameId.current);
	});
	return <>
		<ReturnHome />
		<SubAndTitle title="Speed">a tiny variation of <a href="https://neal.fun/speed/">neal.fun/speed/</a><br/>I stole his images again... well maybe one day I'll make a commit where the only changes are "found/created my OWN images"</SubAndTitle>
		<div id="speedContainer">
			<p id="speedTimePassed">You opened this page {msToString(time - loadTime)} ago.</p>
			<SpeedItem func={0} time={time - loadTime} />
			<SpeedItem func={1} time={time - loadTime} />
			<SpeedItem func={2} time={time - loadTime} />
			<SpeedItem func={3} time={time - loadTime} />
			<SpeedItem func={4} time={time - loadTime} />
			<SpeedItem func={5} time={time - loadTime} />
			<SpeedItem func={6} time={time - loadTime} />
			<SpeedItem func={7} time={time - loadTime} />
			<SpeedItem func={8} time={time - loadTime} />
		</div>
	</>;
}