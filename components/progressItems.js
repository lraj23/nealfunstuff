'use client';
import { Akaya_Kanadaka } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";

const msInSec = 1000;
const msInMin = 60 * msInSec;
const offset = () => new Date().getTimezoneOffset() * msInMin;
const msInHr = 60 * msInMin;
const msInDay = 24 * msInHr;
const msInYr = year => msInDay * (new Date(new Date().getFullYear() + year, 1, 29).getDate() === 29 ? 366 : 365);
const funcs = [
	{
		itemName: "⏰ Next minute",
		updateRate: msInSec,
		totalTime: () => msInMin,
		determineTime: time => msInMin - time % msInMin
	},
	{
		itemName: "⌚ Next hour",
		updateRate: msInMin,
		totalTime: () => msInHr,
		determineTime: time => msInHr - (time - offset()) % msInHr
	},
	{
		itemName: "🌅 Next day",
		updateRate: msInHr,
		totalTime: () => msInDay,
		determineTime: time => msInDay - (time - offset()) % msInDay
	},
	{
		itemName: "📅 Next month",
		updateRate: msInDay,
		totalTime: () => new Date(...(d => [d.getFullYear(), d.getMonth() + 1, 0])(new Date())).getDate() * msInDay,
		determineTime: time => new Date(...(d => [d.getFullYear(), d.getMonth() + 1, 0])(new Date())).getTime() - time + offset()
	},
	{
		itemName: "🐧 Olive reviews my project from Siege Prep Week 1",
		updateRate: 1,
		totalTime: () => 13 * 7 * msInDay,
		determineTime: time => new Date(new Date(2025, 11, 1).getTime() + msInMin * 240 - offset()) - time
	},
	{
		itemName: "🎊 Next year",
		updateRate: msInDay,
		totalTime: () => (year => new Date(year, 1, 29).getDate() === 29 ? 366 : 365)(new Date().getFullYear()) * msInDay,
		determineTime: time => new Date(new Date().getFullYear() + 1, 0, 0).getTime() - time + offset()
	},
	{
		itemName: "🎂 My birthday!!",
		updateRate: msInDay,
		totalTime: () => (year => new Date(year, 1, 29).getDate() === 29 ? 366 : 365)(new Date().getFullYear()) * msInDay,
		determineTime: time => new Date((d => (d > new Date(d.getFullYear(), 9, 14) ? d.getFullYear() + 1 : d.getFullYear()))(new Date()), 9, 14).getTime() - time + offset()
	},
	{
		itemName: "🔟 Next decade",
		updateRate: msInYr(0),
		totalTime: () => (year => new Array(10).fill((Math.floor(year / 10) * 10) - year).map((yr, i) => msInYr(yr + i)).reduce((a, b) => a + b))(new Date().getFullYear()),
		determineTime: time => new Date(Math.ceil(new Date().getFullYear() / 10) * 10, 0) - time + offset()
	},
	{
		itemName: "💯 Next century",
		updateRate: msInYr(0),
		totalTime: () => (year => new Array(100).fill((Math.floor(year / 100) * 100) - year).map((yr, i) => msInYr(yr + i)).reduce((a, b) => a + b))(new Date().getFullYear()),
		determineTime: time => new Date(Math.ceil(new Date().getFullYear() / 100) * 100, 0) - time + offset()
	},
	{
		itemName: "🔟0️⃣0️⃣ Next millenium",
		updateRate: msInYr(0),
		totalTime: () => (year => new Array(1000).fill((Math.floor(year / 1000) * 1000) - year).map((yr, i) => msInYr(yr + i)).reduce((a, b) => a + b))(new Date().getFullYear()),
		determineTime: time => new Date(Math.ceil(new Date().getFullYear() / 1000) * 1000, 0) - time + offset()
	},
	{
		itemName: "🐧 Olive gives me my coins from my project from Siege Prep Week 1",
		updateRate: msInYr(0),
		totalTime: () => 1e27,
		determineTime: time => 1e27 * 0.9999
	}
];
const msToString = ms => (ms < msInSec ? ms + " millisecond" + (ms < 2 ? "" : "s") : (ms < msInMin ? Math.floor(ms / msInSec) + " second" + (ms < 2 * msInSec ? "" : "s") : (ms < msInHr ? Math.floor(ms / msInMin) + " minute" + (ms < 2 * msInMin ? "" : "s") : (ms < msInDay ? Math.floor(ms / msInHr) + " hour" + (ms < 2 * msInHr ? "" : "s") : (ms < msInYr(0) ? Math.floor(ms / msInDay) + " day" + (ms < 2 * msInDay ? "" : "s") : Math.floor(ms / msInYr(0)) + " year" + (ms < 2 * msInYr(0) ? "" : "s"))))));

function progressItem({ func }) {
	const [time, setTime] = useState(Date.now());
	const animationFrameId = useRef();
	const update = () => {
		setTime(Date.now());
		animationFrameId.current = requestAnimationFrame(update);
	};
	useEffect(() => {
		animationFrameId.current = requestAnimationFrame(update);
		return () => cancelAnimationFrame(animationFrameId.current);
	}, []);
	useEffect(() => {
		document.title = "Progress - NealFunStuff";
	}, [document.title]);
	const item = funcs[func];
	return (
		<div className="progressItem">
			<p className="progressItemName">{item.itemName}</p>
			<p className="progressItemTimeLeft">{msToString(item.determineTime(time))}</p>
			<div className="progressItemSlider"><div className="progressItemSliderProgress" style={{ width: 100 - item.determineTime(time) / item.totalTime() * 100 + "%" }}></div></div>
		</div>
	);
}

export default progressItem;