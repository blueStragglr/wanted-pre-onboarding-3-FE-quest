
const Link = props => {
	
	return (
		<a className="w-full " href={props.url} title={props.title}>
				{props.text}
		</a>
	)
}

export default Link;