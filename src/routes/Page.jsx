import React from "react";
import { useLoaderData } from "react-router-dom";
import { getPage } from "../lib";

export async function loader({ params }) {
	const page = await getPage(params.pageId);
	if (!page) {
		throw new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
	return { page };
}

const Page = () => {
	const { page } = useLoaderData();

	return (
		<div className="flex justify-center items-center h-full text-blue-500 font-bold text-3xl">
			<h1>This is {page.title} !</h1>
		</div>
	);
};

export default Page;
