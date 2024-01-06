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

    return (
        <>
            <div className="w-full flex items-center justify-center space-x-4">
                <div className="relative">
                    <Image
                        src={user || avatar ? user.avatar.url || avatar : avatarDefault}
                        alt="Avatar"
                        className="w-[120px] h-[120px] rounded-full border-[3px] border-[#22fc64]"
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
            </div>
            <br />
            <br />
            <div className="w-full pl-6 md:pl-10">
                <form action="" onSubmit={handleSubmit}>
                    <div className="md:w-[50%] m-auto block pb-4">
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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileInfo;
