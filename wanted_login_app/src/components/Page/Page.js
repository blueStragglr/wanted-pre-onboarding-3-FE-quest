
const Page = (props) => {

	return (
		<article className="flex flex-col items-center w-full h-full px-5 py-10 main">
				<h2 className="mb-3 font-bold text-heading2">{props.heading}</h2>
				<p className="m-4 text-lg">{props.text1}</p>
			<p className="m-4 text-lg">{props.text2}</p>
		</article>
	)
}

export default Page;