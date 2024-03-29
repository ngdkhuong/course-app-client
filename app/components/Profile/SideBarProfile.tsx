'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import avatarDefault from '@/public/assets/avatar.png';
import { RiLockPasswordLine, RiLogoutBoxLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { MdAdminPanelSettings } from 'react-icons/md';
import Link from 'next/link';

type Props = {
    user: any;
    active: number;
    avatar: string | null;
    setActive: (active: number) => void;
    logoutHandler: any;
};

const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logoutHandler }) => {
    return (
        <div className="w-full">
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 1 ? 'bg-slate-200 dark:bg-slate-800' : 'bg-transparent'
                }`}
                onClick={() => setActive(1)}
            >
                <Image
                    src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
                    alt=""
                    width={20}
                    height={20}
                    className="md:w-[30px] md:h-[30px] cursor-pointer rounded-full"
                />
                <h5 className="pl-4 md:block hidden text-black dark:text-white font-Josefin">{user.name}</h5>
            </div>
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 2 ? 'bg-slate-200 dark:bg-slate-800' : 'bg-transparent'
                }`}
                onClick={() => setActive(2)}
            >
                <RiLockPasswordLine size={20} className="text-black dark:text-white" />
                <h5 className="pl-4 md:block hidden text-black dark:text-white font-Josefin">Thay Đổi Mật Khẩu</h5>
            </div>
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 3 ? 'bg-slate-200 dark:bg-slate-800' : 'bg-transparent'
                }`}
                onClick={() => setActive(3)}
            >
                <SiCoursera size={20} className="text-black dark:text-white" />
                <h5 className="pl-4 md:block hidden text-black dark:text-white font-Josefin">Khóa Học Đã Đăng Ký</h5>
            </div>
            {user.role === 'admin' && (
                <Link
                    className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                        active === 6 ? 'bg-slate-200 dark:bg-slate-800' : 'bg-transparent'
                    }`}
                    href={'/admin'}
                >
                    <MdAdminPanelSettings size={20} className="text-black dark:text-white" />
                    <h5 className="pl-4 md:block hidden text-black dark:text-white font-Josefin">Admin quản lí</h5>
                </Link>
            )}
            <div
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${
                    active === 5 ? 'bg-slate-200 dark:bg-slate-800' : 'bg-transparent'
                }`}
                onClick={() => logoutHandler()}
            >
                <RiLogoutBoxLine size={20} className="text-black dark:text-white" />
                <h5 className="pl-4 md:block hidden text-black dark:text-white font-Josefin">Đăng Xuất</h5>
            </div>
        </div>
    );
};

export default SideBarProfile;
