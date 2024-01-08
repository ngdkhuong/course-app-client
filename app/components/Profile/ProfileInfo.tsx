import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { styles } from '@/app/styles/style';
import avatarDefault from '@/public/assets/avatar.png';
import { AiOutlineCamera } from 'react-icons/ai';
import { useEditProfileMutation, useUpdateAvatarMutation } from '@/redux/features/user/userApi';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';
import toast from 'react-hot-toast';

type Props = {
    avatar: string | null;
    user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
    const [name, setName] = useState(user && user.name);
    const [editProfile, { isSuccess: success, error: updateError }] = useEditProfileMutation();
    const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
    const [loadUser, setLoadUser] = useState(false);

    const {} = useLoadUserQuery(undefined, {
        skip: loadUser ? false : true,
    });

    const imageHandler = async (e: any) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            if (fileReader.readyState === 2) {
                const avatar = fileReader.result;

                updateAvatar(avatar);
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (isSuccess || success) {
            setLoadUser(true);
        }
        if (error || updateError) {
            console.log(error);
        }
        if (success) {
            toast.success('Hồ sơ của bạn đã được cập nhật!');
        }
    }, [isSuccess, error, success, updateError]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name !== '') {
            await editProfile({
                name: name,
            });
        }
    };

    console.log(user.email);

    return (
        <>
            <div className="mt-[100px] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Thay Đổi Thông Tin
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                        <div className="relative flex items-center justify-center">
                            <Image
                                src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
                                alt="Avatar"
                                width={120}
                                height={120}
                                className={'rounded-full border-[3px] border-[#22fc64]'}
                            />
                            <input
                                type="file"
                                name=""
                                id="avatar"
                                className="hidden"
                                onChange={imageHandler}
                                accept="image/png, image/jpg, image/jpeg, image/webp"
                            />
                            <label htmlFor="avatar">
                                <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
                                    <AiOutlineCamera size={20} className="z-1 text-white" />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className="block pb-2 text-black dark:text-white">
                                Họ Tên
                            </label>
                            <input
                                type="text"
                                className={`${styles.input} !w-95% mb-4 md:mb-0`}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="block pb-2 text-black dark:text-white">
                                Email
                            </label>
                            <input
                                type="text"
                                className={`${styles.input} !w-95% mb-4 md:mb-0`}
                                readOnly
                                required
                                value={user?.email}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <input className={`${styles.button} md:w-full`} required value="Cập Nhật" type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;
