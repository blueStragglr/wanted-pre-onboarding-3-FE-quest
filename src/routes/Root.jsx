import React, { Fragment } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { Header, Sidebar } from "../components";
import { createPage, getPages } from "../lib";

export async function loader() {
	const pages = await getPages();
	return { pages };
}

export async function action({ request }) {
	const formData = await request.formData();
	const title = formData.get("title");
	await createPage(title);
	return redirect("/");
}

const Root = () => {
	const { pages } = useLoaderData();

	return (
		<Fragment>
			<Header />
			<div className="flex h-[calc(100%-4rem)]">
				<Sidebar pages={pages} />
				<div className="w-full">
					<Outlet />
				</div>
			</div>
		</Fragment>
	);
};

export default Root;
