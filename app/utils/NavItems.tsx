import Link from 'next/link';
import React, { FC } from 'react';

export const navItemsData = [
    {
        name: 'Trang Chủ',
        url: '/',
    },
    {
        name: 'Khoá Học',
        url: '#',
    },
    {
        name: 'Blogs',
        url: '/blogs',
    },
    {
        name: 'Giới Thiệu',
        url: '/gioi-thieu',
    },
];

type Props = {
    activeItem: number;
    isMobile: boolean;
};

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
    return (
        <>
            <div className="hidden md:flex">
                {navItemsData &&
                    navItemsData.map((item, index) => (
                        <Link href={`${item.url}`} key={index} passHref>
                            <span
                                className={`${
                                    activeItem === index
                                        ? 'dark:text-[#41da58] text-[crimson]'
                                        : 'dark:text-white text-black'
                                } text-[18px] px-6 font-Poppins font-[400] `}
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))}
            </div>
            {isMobile && (
                <div className="md:hidden mt-5">
                    <div className="w-full text-center py-6">
                        {navItemsData &&
                            navItemsData.map((item, index) => (
                                <Link href="/" passHref key={index}>
                                    <span
                                        className={`${
                                            activeItem === index
                                                ? 'dark:text-[#41da58] text-[crimson]'
                                                : 'dark:text-white text-black'
                                        } text-[18px] px-6 font-Poppins font-[400] `}
                                    ></span>
                                </Link>
                            ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default NavItems;
