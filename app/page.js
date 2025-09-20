import PageLink from "@/components/pageLinks";
import SubAndTitle from "@/components/subAndTitle";

export const metadata = { title: "NealFunStuff" };

export default _ => <>
	<SubAndTitle title="NEAL.FUN Stuff">a tiny variation of <a href="https://neal.fun/">neal.fun</a><br />All these stolen images ARE credited to neal.fun! I'll make my own eventually.</SubAndTitle>
	<div id="pages">
		<PageLink link="./progress" image="./progress.png" />
		<PageLink link="./paper" image="./paper.png" />
		<PageLink link="./speed" image="./speed.png" />
		<PageLink link="./lifeChecklist" image="./lifeChecklist.png" />
	</div>
</>;