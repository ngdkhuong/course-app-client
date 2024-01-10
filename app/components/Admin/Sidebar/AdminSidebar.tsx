'use client';

import React, { FC } from 'react';
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

type Props = {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: any;
};

const AdminSidebar = () => {
    return (
        <>
            <aside
                id="sidebar-multi-level-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <MdDashboard />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <span>Dữ Liệu</span>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoPeople />
                                <span className="ms-3">Người Dùng</span>
                            </div>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoReceipt />
                                <span className="ms-3">Hóa Đơn</span>
                            </div>
                        </li>
                        <li>
                            <span className="">Nội Dung</span>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdOutlineOndemandVideo />
                                <span className="ms-3">Tạo Khóa Học</span>
                            </div>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdVideoCall />
                                <span className="ms-3">Live Khóa Học</span>
                            </div>
                        </li>
                        <li>
                            <span className="">Tùy Biến</span>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdWeb />
                                <span className="ms-3">Giao Diện</span>
                            </div>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdQuiz />
                                <span className="ms-3">Hỏi Đáp</span>
                            </div>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdOutlineWysiwyg />
                                <span className="ms-3">Phân Loại</span>
                            </div>
                        </li>
                        <li>
                            <span className="">Tùy Biến</span>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdWeb />
                                <span className="ms-3">Giao Diện</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;
