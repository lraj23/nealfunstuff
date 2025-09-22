'use client';
import React, { useEffect, useState, useRef } from "react";
import ChecklistItem from "@/components/checklistItems";
import ReturnHome from "@/components/returnHome";
import SubAndTitle from "@/components/subAndTitle";

export default _ => <>
	<ReturnHome />
	<SubAndTitle title="Life Checklist">a tiny variation of <a href="https://neal.fun/life-checklist/">neal.fun/life-checklist/</a><br />I didn't steal his images! Wait... he didn't use any images on this page 😔... and I stole his text</SubAndTitle>
	<div id="checklistContainer">
		{new Array(66).fill().map((_, i) => <ChecklistItem func={i} key={i} />)}
	</div>
</>;