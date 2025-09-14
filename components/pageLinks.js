function pageLink({ link, image }) {
	return (
		<div className="page">
			<a href={link}><img src={image} /></a>
		</div>
	);
}

export default pageLink;