'use client';

import React, { FC, useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from '@mui/material';
import {
    MdDashboard,
    FaArrowLeft,
    FaArrowRight,
    IoPeople,
    IoReceipt,
    IoBarChartSharp,
    CiMap,
    MdGroups,
    MdOutlineOndemandVideo,
    MdVideoCall,
    MdWeb,
    MdQuiz,
    MdOutlineWysiwyg,
    MdOutlineManageHistory,
    IoMdSettings,
    IoMdExit,
} from './Icon';
import avatarDefault from '@/public/assets/avatar.png';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type itemProps = {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: any;
};

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem active={selected === title} onClick={() => setSelected(title)} icon={icon}>
            <Typography className="!text-[16px] !font-Poppins">{title}</Typography>
            <Link href={to} />
        </MenuItem>
    );
};

const AdminSidebar = () => {
    const { user } = useSelector((state: any) => state.auth);
    const [logout, setLogout] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    const logoutHandler = () => {
        setLogout(true);
    };

    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    background: `${theme === 'dark' ? '#111c43 !important' : '#fff !important'}`,
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important',
                },
                '& .pro-inner-item:hover': {
                    color: '#868bfb !important',
                },
                '& .pro-menu-item.active': {
                    color: '#6870fa !important',
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                    opacity: 1,
                },
                '& .pro-menu-item': {
                    color: `${theme !== 'dark' && '#000'}`,
                },
            }}
            className="!bg-white dark:bg-[#111c43]"
        >
            <ProSidebar
                collapsed={isCollapsed}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    width: isCollapsed ? '0%' : '16%',
                }}
            >
                <Menu iconShape="square">
                    {/* LOGO ABD MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <FaArrowLeft /> : undefined}
                        style={{ margin: '10px 0 20px 0' }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Link href="/">
                                    <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                                        IT-EDU
                                    </h3>
                                </Link>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block">
                                    <FaArrowRight className="text-black dark:text-white" />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image
                                    alt="profile-user"
                                    width={100}
                                    height={100}
                                    src={user.avatar ? user.avatar.url : avatarDefault}
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: '50%',
                                        border: '3px solid #5b6fe6',
                                        width: '100px',
                                        height: '100px',
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h4"
                                    className="!text-[20px] text-black dark:text-white"
                                    sx={{ m: '10px 0 0 0' }}
                                >
                                    {user?.name}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ m: '10px 0 0 0' }}
                                    className="!text-[20px] text-black dark:text-white"
                                >
                                    {user?.role}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title="Quản Lý"
                            to="/admin"
                            icon={<MdDashboard />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: '15px 0 5px 25px' }}
                            className="!text-[18px] text-black dark:text-white capitalize !font-[400]"
                        >
                            {!isCollapsed && 'Dữ liệu'}
                        </Typography>
                        <Item
                            title="Nguời Dùng"
                            to="/admin/users"
                            icon={<IoPeople />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Hoá Đơn"
                            to="/admin/invoices"
                            icon={<IoReceipt />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h5"
                            sx={{ m: '15px 0 5px 25px' }}
                            className="!text-[18px] text-black dark:text-white capitalize !font-[400]"
                        >
                            {!isCollapsed && 'Nội Dung'}
                        </Typography>
                        <Item
                            title="Tạo Khóa Học"
                            to="/admin/create-course"
                            icon={<MdOutlineOndemandVideo />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Hoá Đơn"
                            to="/admin/invoices"
                            icon={<MdVideoCall />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default AdminSidebar;
