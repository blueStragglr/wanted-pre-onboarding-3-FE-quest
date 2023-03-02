
const Input = ((props) => {

	return (
		<div className="flex flex-row items-center h-8 mb-3 flex-nowrap">
		<label htmlFor={props.id} className="w-20 text-sm font-semibold text-left ">{props.label}</label>
		<input	type={props.type}
			id={props.id}
			value={props.value} className="box-border w-full h-full ml-2 border rounded-md border-lightgray-900"></input>
		</div>
	)
})

export default Input;