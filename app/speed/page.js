'use client';
import React, {useEffect} from "react";

export default function Home () {
	useEffect(() => {
		document.title = "Coming Soon - NealFunStuff";
	}, [document.title]);
	return (
		<h1 id="title">Coming soon!</h1>
	)
}