'use client';
import React, { useEffect, useRef, useState } from "react";
import ProgressItem from "@/components/progressItems";

export default _ => {
	const [time, setTime] = useState(Date.now());
	const animationFrameId = useRef();
	const update = _ => {
		setTime(Date.now());
		animationFrameId.current = requestAnimationFrame(update);
	};
	useEffect(_ => {
		animationFrameId.current = requestAnimationFrame(update);
		return _ => cancelAnimationFrame(animationFrameId.current);
	});
	return (
		<>
			<h1 id="title">Progress</h1>
			<p id="subtitle">Count your days! (ummm... I mean measure how much time is left 😅)<br />a tiny variation of <a href="https://neal.fun/progress/">neal.fun/progress/</a></p>
			<div id="progressContainer">
				<ProgressItem func="0" />
				<ProgressItem func="1" />
				<ProgressItem func="2" />
				<ProgressItem func="3" />
				<ProgressItem func="4" />
				<ProgressItem func="5" />
				<ProgressItem func="6" />
				<ProgressItem func="7" />
				<ProgressItem func="8" />
				<ProgressItem func="9" />
				<ProgressItem func="10" />
			</div>
		</>
	)
}