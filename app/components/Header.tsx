'use client';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import NavItems from '../utils/NavItems';
import { ThemeChange } from '../utils/ThemeChange';
import { HiUserCircle, HiMenu } from 'react-icons/hi';
import CustomModal from '../utils/CustomModal';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import Verification from '../components/Auth/Verification';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import avatarDefault from '@/public/assets/avatar.png';
import { useSession } from 'next-auth/react';
import { useLogoutQuery, useSocialAuthMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';
<p></p>;

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const { user } = useSelector((state: any) => state.auth);
    const { data } = useSession();
    const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
    const [logout, setLogout] = useState(false);
    const {} = useLogoutQuery(undefined, {
        skip: !logout ? true : false,
    });

    useEffect(() => {
        if (!user) {
            if (data) {
                socialAuth({
                    email: data?.user?.email,
                    name: data?.user?.name,
                    avatar: data?.user?.image,
                });
            }
        }
        if (data === null) {
            if (isSuccess) {
                toast.success('Đăng Nhập Thành Công!');
            }
        }
        if (data === null) {
            setLogout(true);
        }
    }, [data, user]);

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 85) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }

    const handleClose = (e: any) => {
        if (e.target.id === 'screen') {
            {
                setOpenSidebar(false);
            }
        }
    };

    return (
        <div className="w-full relative">
            <div
                className={`${
                    active
                        ? 'dark:bg-opacity-50 dark:bg-gradient-to-b  dark:from-gray-900 dark:to-black dark:border-[#ffffff1c] shadow-xl !bg-white'
                        : 'dark:border-[#ffffff1c] dark:shadow'
                } fixed top-0 left-0 w-full h-[80px] z-[80] border-b transition duration-500`}
            >
                <div className="w-[95%] md:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3 ">
                        <div>
                            <Link
                                href={'/'}
                                className={'text-[24px] font-Poppins font-[500] text-black dark:text-white'}
                            >
                                IT-EDU
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <NavItems activeItem={activeItem} isMobile={false} />
                            <ThemeChange />
                            {/* mobile */}

                            <div className="md:hidden">
                                <HiMenu
                                    size={25}
                                    className="cursor-pointer dark:text-white text-black"
                                    onClick={() => setOpenSidebar(true)}
                                />
                            </div>
                            {user ? (
                                <Link href={'/profile'}>
                                    <Image
                                        src={user.avatar ? user.avatar.url : avatarDefault}
                                        alt="Avatar"
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                </Link>
                            ) : (
                                <HiUserCircle
                                    size={25}
                                    className="hidden md:block cursor-pointer dark:text-white text-black"
                                    onClick={() => setOpen(true)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {/* mobile sidebar */}
                {openSidebar && (
                    <div
                        className="fixed w-full h-screen top-0 left-0 z-[999] dark:bg-[unset] bg-[#67676781]"
                        onClick={handleClose}
                        id="screen"
                    >
                        <div className="w-[40%] h-screen fixed z-[99999]  bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                            <NavItems activeItem={activeItem} isMobile={true} />
                            {user ? (
                                <Link href={'/profile'}>
                                    <Image
                                        src={user.avatar ? user.avatar.url : avatarDefault}
                                        alt="Avatar"
                                        width={30}
                                        height={30}
                                        className="rounded-full px-6"
                                    />
                                </Link>
                            ) : (
                                <HiUserCircle
                                    size={25}
                                    className="cursor-pointer dark:text-white text-black mx-6"
                                    onClick={() => setOpen(true)}
                                />
                            )}
                            <br />
                            <br />
                            <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                                Copyright &copy; 2023 IT-EDU
                            </p>
                        </div>
                    </div>
                )}
            </div>
            {route === 'Login' && (
                <>
                    {open && (
                        <CustomModal
                            open={open}
                            setOpen={setOpen}
                            setRoute={setRoute}
                            activeItem={activeItem}
                            component={Login}
                        />
                    )}
                </>
            )}
            {route === 'Sign-Up' && (
                <>
                    {open && (
                        <CustomModal
                            open={open}
                            setOpen={setOpen}
                            setRoute={setRoute}
                            activeItem={activeItem}
                            component={SignUp}
                        />
                    )}
                </>
            )}
            {route === 'Verification' && (
                <>
                    {open && (
                        <CustomModal
                            open={open}
                            setOpen={setOpen}
                            setRoute={setRoute}
                            activeItem={activeItem}
                            component={Verification}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Header;
