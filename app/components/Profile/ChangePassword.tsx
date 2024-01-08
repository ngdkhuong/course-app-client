import React, { useState } from 'react';
import Image from 'next/image';
import { styles } from '@/app/styles/style';

type Props = {};

const ChangePassword = (props: Props) => {
    const [show, setShow] = useState(false);

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Thay Đổi Mật Khẩu
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Mật Khẩu Hiện Tại
                                </label>
                                <input
                                    type={!show ? 'password' : 'text'}
                                    name="old-password"
                                    id="old-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="new-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mật Khẩu Mới
                                </label>
                                <input
                                    type={!show ? 'password' : 'text'}
                                    name="new-password"
                                    id="new-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                        <input
                            type="submit"
                            className={`${styles.button}`}
                            value="Cập nhật"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
