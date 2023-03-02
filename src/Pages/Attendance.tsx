import React, {useEffect, useState} from 'react';
import SideNav from "./Layout/SideNav";
import {useRecoilValue} from "recoil";
import {urlParams} from "../Atom/Atoms";
interface sideNavProps {
    sideNavPropsName: string;
    name: string;
}
const Attendance: React.FC = () => {
    const params = useRecoilValue(urlParams);
    console.log('params',params)
    const [category, setCategory] = React.useState<sideNavProps>({sideNavPropsName : '근무/휴가', name : 'Attendance'});
    return (
    <div className="w-full h-[100vh] bg-yellow-50 flex">
        <SideNav post ={category} ></SideNav>
        {
            params.length===0&&
            <div className="w-full">
                <div className="text-[300px] text-center">🐻‍️</div>
                <div className="text-[90px] text-center">반가워</div>
            </div>
        }
    </div>
    );
};


export default Attendance;