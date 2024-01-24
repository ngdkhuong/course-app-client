'use client';

import React, { FC, useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import sidebarData from './SidebarData';
import { FaArrowLeft, FaArrowRight } from './Icon';
import avatarDefault from '@/public/assets/avatar.png';

interface SidebarDataItem {
    title: string;
    icon: React.ReactNode;
    options: SidebarOption[];
}

interface SidebarOption {
    label: string;
    icon: React.ReactNode;
    to: string;
}

const AdminSidebar = () => {
    const { user } = useSelector((state: any) => state.auth);
    const [logout, setLogout] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    const handleMenuClick = (menuItem: string) => {
        // Handle menu item click as needed
        console.log(`Clicked on ${menuItem}`);
    };

    const logoutHandler = () => {
        setLogout(true);
    };

    return (
        <Box className="!bg-[#e0e0e0] dark:bg-[#111c43]">
            <ProSidebar
                style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: isCollapsed ? '0%' : '16%' }}
            >
                <Menu iconShape="square">
                    {/* <MenuItem
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
                                        style={{ cursor: 'pointer', borderRadius: '50%', border: '3px solid #5b6fe6' }}
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
                                        className="!text-[20px] text-black dark:text-white capitalize"
                                    >
                                        {user?.role}
                                    </Typography>
                                </Box>
                            </Box>
                        )} */}

                    {sidebarData.map((item) => (
                        <React.Fragment key={item.title}>
                            <MenuItem onClick={() => handleMenuClick(item.title)}>
                                <span className="flex items-center">
                                    <span className="ml-2">{item.title}</span>
                                </span>
                            </MenuItem>
                            {item.options.map((option) => (
                                <MenuItem key={option.label} onClick={() => handleMenuClick(option.label)}>
                                    <span className="flex items-center ml-6">
                                        {option.icon}
                                        <span className="ml-2">{option.label}</span>
                                    </span>
                                </MenuItem>
                            ))}
                        </React.Fragment>
                    ))}
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default AdminSidebar;
