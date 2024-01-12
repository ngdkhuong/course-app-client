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
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
            className="text-black dark:text-white items-center"
        >
            <Typography className="!text-[16px] !font-Poppins pl-2">{title}</Typography>
            <Link href={to} />
        </MenuItem>
    );
};

const AdminSidebar = () => {
    const { user } = useSelector((state: any) => state.auth);
    const [logout, setLogout] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Quản Lý');
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
                    display: 'flex',
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
                className="overflow-y-auto"
            >
                <Menu iconShape="square">
                    {/* LOGO ABD MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <FaArrowRight /> : undefined}
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
                                    <FaArrowLeft className="text-black dark:text-white" />
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
                            title="Dashboard"
                            to="/admin"
                            icon={<MdDashboard />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: '15px 0 5px 25px' }}
                            className="relative !text-[18px] text-black dark:text-white capitalize !font-[400]"
                            onClick={toggleDropdown}
                        >
                            {!isCollapsed && 'Data'}
                        </Typography>
                        {isOpen && (
                            <>
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
                            </>
                        )}

                        <Typography
                            variant="h5"
                            sx={{ m: '15px 0 5px 25px' }}
                            className="!text-[18px] text-black dark:text-white capitalize !font-[400]"
                            onClick={toggleDropdown}
                        >
                            {!isCollapsed && 'Content'}
                        </Typography>
                        {isOpen && (
                            <>
                                <Item
                                    title="Tạo Khóa Học"
                                    to="/admin/create-course"
                                    icon={<MdOutlineOndemandVideo />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title="Live Khóa Học"
                                    to="/admin/courses"
                                    icon={<MdVideoCall />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </>
                        )}
                        <Typography
                            variant="h5"
                            sx={{ m: '15px 0 5px 25px' }}
                            className="!text-[18px] text-black dark:text-white capitalize !font-[400]"
                            onClick={toggleDropdown}
                        >
                            {!isCollapsed && 'Costumization'}
                        </Typography>
                        {isOpen && (
                            <>
                                <Item
                                    title="Hiển Thị"
                                    to="/admin/hero"
                                    icon={<MdWeb />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title="Hỏi Đáp"
                                    to="/admin/faq"
                                    icon={<MdQuiz />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title="Loại Khóa Học"
                                    to="/admin/categories"
                                    icon={<MdOutlineWysiwyg />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </>
                        )}
                        <Typography
                            variant="h5"
                            sx={{ m: '15px 0 5px 25px' }}
                            className="!text-[18px] text-black dark:text-white capitalize !font-[400]"
                            onClick={toggleDropdown}
                        >
                            {!isCollapsed && 'Quản Lý'}
                        </Typography>
                        {isOpen && (
                            <>
                                <Item
                                    title="Nhóm Học"
                                    to="/admin/team"
                                    icon={<MdGroups />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </>
                        )}
                        <Typography
                            variant="h5"
                            sx={{ m: '15px 0 5px 25px' }}
                            className="!text-[18px] text-black dark:text-white capitalize !font-[400]"
                            onClick={toggleDropdown}
                        >
                            {!isCollapsed && 'Biểu Đồ'}
                        </Typography>
                        {isOpen && (
                            <>
                                <Item
                                    title="Biểu Đồ Khóa Học"
                                    to="/admin/courses-analytics"
                                    icon={<IoBarChartSharp />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title="Biểu Đồ Đơn Hàng"
                                    to="/admin/courses-analytics"
                                    icon={<CiMap />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title="Biểu Đồ Khách Hàng"
                                    to="/admin/users-analytics"
                                    icon={<MdOutlineManageHistory />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </>
                        )}
                        <Item
                            title="Cài Đặt"
                            to="/admin/settings"
                            icon={<IoMdSettings />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <div onClick={logoutHandler}>
                            <Item
                                title="Đăng Xuất"
                                to="/"
                                icon={<IoMdExit />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default AdminSidebar;
