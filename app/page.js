import PageLink from "@/components/pageLinks";

export const metadata = { title: "NealFunStuff" };

export default _ => <>
	<h1 id="title">NEAL.FUN Stuff</h1>
	<p id="subtitle">a tiny variation of <a href="https://neal.fun/">neal.fun</a><br />All these stolen images ARE credited to neal.fun! I'll make my own eventually.</p>
	<div id="pages">
		<PageLink link="./progress" image="./progress.png" />
		<PageLink link="./speed" image="./speed.png" />
		<PageLink link="./paper" image="./paper.png" />
		<PageLink link="./lifeChecklist" image="./lifeChecklist.png" />
	</div>
</>;