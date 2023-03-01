
const SubmitButton = props => {


	return (
		<button type={props.type} className="flex flex-row items-center justify-center px-5 py-2 text-sm font-bold rounded-md bg-black  text-white">
			{props.text}
		</button>
	);
}

export default SubmitButton;