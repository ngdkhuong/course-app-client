'use client';

import {
    MdDashboard,
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

interface SidebarOption {
    label: string;
    icon: React.ReactNode;
    to: string;
}

interface SidebarDataItem {
    title: string;
    options: SidebarOption[];
}

const sidebarData: SidebarDataItem[] = [
    {
        title: 'Data',
        options: [
            { label: 'Users', icon: <IoPeople />, to: '/admin/users' },
            { label: 'Invoices', icon: <IoReceipt />, to: '/admin/invoices' },
        ],
    },
    {
        title: 'Content',
        options: [
            { label: 'Create Course', icon: <MdOutlineOndemandVideo />, to: '/admin/create-course' },
            { label: 'Courses', icon: <MdVideoCall />, to: '/admin/courses' },
        ],
    },
    {
        title: 'Customization',
        options: [
            { label: 'Layout', icon: <MdWeb />, to: '/admin/layout' },
            { label: 'FAQ', icon: <MdQuiz />, to: '/admin/faq' },
            { label: 'Categories', icon: <MdOutlineWysiwyg />, to: '/admin/categories' },
        ],
    },
    {
        title: 'Controllers',
        options: [{ label: 'Manage Class', icon: <MdGroups />, to: '/admin/class' }],
    },
    {
        title: 'Analytics',
        options: [
            { label: 'Courses', icon: <IoBarChartSharp />, to: '/admin/courses-analytics' },
            { label: 'Orders', icon: <CiMap />, to: '/admin/orders-analytics' },
            { label: 'Users', icon: <MdOutlineManageHistory />, to: '/admin/users-analytics' },
        ],
    },
    {
        title: 'Extras',
        options: [
            { label: 'Settings', icon: <IoMdSettings />, to: '/admin/settings' },
            { label: 'Logout', icon: <IoMdExit />, to: '/admin/logout' },
        ],
    },
];

export default sidebarData;
