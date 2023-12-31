'use client';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import NavItems from '../utils/NavItems';
import { ThemeChange } from '../utils/ThemeChange';
import { HiUserCircle, HiMenu } from 'react-icons/hi';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
};

const Header: FC<Props> = ({ activeItem, setOpen }) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

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
                        ? 'dark:bg-opacity-50 dark:bg-gradient-to-b  dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500'
                        : 'w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow'
                }`}
            >
                <div className="w-[95%] md:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3">
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
                            <HiUserCircle
                                size={25}
                                className="cursor-pointer dark:text-white text-dark"
                                onClick={() => setOpen(true)}
                            />
                        </div>
                    </div>
                </div>
                {/* mobile sidebar */}
                {openSidebar && (
                    <div
                        className="fixed w-full h-screen top-[0] left-0 z-[999] dark:bg-[unset] bg-[#67676781]"
                        onClick={handleClose}
                        id="screen"
                    >
                        <div className="w-full fixed z-[9999]  bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 transition duration-700 ease-in-out">
                            <NavItems activeItem={activeItem} isMobile={true} />
                            <HiUserCircle
                                size={25}
                                className="cursor-pointer ml-5 my-2 dark:text-white text-dark"
                                onClick={() => setOpen(true)}
                            />
                            <br />
                            <br />
                            <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                                Copyright &copy; 2023 IT-EDU
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
