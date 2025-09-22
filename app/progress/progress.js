'use client';
import React, { useEffect, useRef, useState } from "react";
import ProgressItem from "@/components/progressItems";
import ReturnHome from "@/components/returnHome";
import SubAndTitle from "@/components/subAndTitle";

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
			<ReturnHome />
			<SubAndTitle title="Progress">Count your days (ummm... I mean measure how much time is left 😅)<br />a tiny variation of <a href="https://neal.fun/progress/">neal.fun/progress/</a></SubAndTitle>
			<div id="progressContainer">
				{new Array(11).fill().map((_, i) => <ProgressItem func={i} key={i} />)}
			</div>
		</>
	)
}