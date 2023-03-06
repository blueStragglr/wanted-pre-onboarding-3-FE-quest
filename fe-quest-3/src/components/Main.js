import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';
import Header from '../common/Header';
import Nav from '../common/Nav';
import { categories } from '../common/Category';
import styled from "styled-components";

export async function loader({params}){
    // console.log('main',params);
    // const location = useLocation().search;
    // console.log('location',location);
    // const needPermit = Utils.checkAuth(location);
    console.log('this is main');
}

const Main = () => { 
    return (
        <div>
            <p>This is Main Page😉</p>
        </div>        
    );
};

export default Main;