'use client';

import React, { FC, useState } from 'react';
import Protected from '../hooks/useProtected';
import Heading from '../utils/Heading';
import Header from '../components/Header';
import Profile from '../components/Profile/Profile';
import { useSelector } from 'react-redux';

type Props = {};

const Page: FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState('Login');
    const { user } = useSelector((state: any) => state.auth);

    return (
        <>
            <Protected>
                <Heading
                    title={`${user?.name || 'IT-EDU member'} profile`}
                    description="IT-EDU là nền tảng học trực tuyến cho các sinh viên theo học IT"
                    keywords="Programming,MERN,Machine,Graphic,Design,Learning"
                />
                <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                <Profile user={user} />
            </Protected>
        </>
    );
};

export default Page;
