import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

const Page = (props) => {
	const { pageId } = useParams();

	return <MainLayout>Page {pageId}</MainLayout>;
};

Page.propTypes = {};

export default Page;
