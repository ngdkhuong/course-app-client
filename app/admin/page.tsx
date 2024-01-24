'use client';

import React from 'react';
import Heading from '../utils/Heading';
import AdminProtected from '../hooks/adminProtected';
import AdminSidebar from '../components/Admin/Sidebar/AdminSidebar';

type Props = {};

const Page = (props: Props) => {
    return (
        <>
            <AdminProtected>
                <Heading
                    title="IT-EDU"
                    description="IT-EDU là nền tảng học trực tyến cho các sinh viên theo học IT"
                    keywords="Programming,MERN,Machine,Graphic,Design,Learning"
                />
                <div className="flex h-[200vh]">
                    <div className="lg:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]"></div>
                </div>
            </AdminProtected>
        </>
    );
};

export default Page;
