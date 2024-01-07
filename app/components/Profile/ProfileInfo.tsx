import React, { FC, useState } from 'react';
import Image from 'next/image';
import { styles } from '@/app/styles/style';
import avatarDefault from '@/public/assets/avatar.png';
import { AiOutlineCamera } from 'react-icons/ai';

type Props = {
    avatar: string | null;
    user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
    const [name, setName] = useState(user && user.name);

    const imageHandler = async (e: any) => {
        console.log('99999');
    };

    const handleSubmit = async (e: any) => {
        console.log('submit');
    };

    console.log(user);

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="relative">
                    <Image
                        src={user || avatar ? user.avatar || avatar : avatarDefault}
                        alt="Avatar"
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
                <br />
                <br />
                <div className="w-full pl-6 md:pl-10">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="md:w-[60%] m-auto block pb-4">
                            <div className="w-100%">
                                <label htmlFor="" className="block pb-2">
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
                            <div className="w-100%">
                                <label htmlFor="" className="block pb-2">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className={`${styles.input} !w-95% mb-4 md:mb-0`}
                                    required
                                    value={user?.email}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <input
                                className={`w-full md:w-[250px] h-[40px] border border-[#22fc64]  text-center dark:text-white text-black rounded-[3px] mt-8 cursor-pointer`}
                                required
                                value="Cập Nhật"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;
