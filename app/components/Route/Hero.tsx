import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { styles } from '@/app/styles/style';

type Props = {};

const Hero: FC<Props> = (props) => {
    return (
        <div className="w-full md:flex items-center">
            <div className="absolute top-[100px] md:top-[unset] lg:h-[700px] lg:w-[700px] md:h-[600px] md:w-[600px] h-[50vh] w-[50vh]"></div>
            <div className="md:w-[60%] flex flex-col items-center md:text-left mt-[150px]">
                <h2 className="dark:text-white text-black text-[30px] w-full md:text-[55px] font-[600] font-Josefin py-2 md:!w-[78%]">
                    Khóa học lập trình C++ từ cơ bản đến nâng cao.
                </h2>
                <br />
                <p className="dark:text-white text-black font-Josefin font-[600] text-[18px] lg:!w-[78%] md:!w-[%]">
                    Đạt được nền tảng kỹ thuật lập trình cực kì vững chắc và tư duy trong việc giải quyết vấn đề. Thành
                    thạo kiến thức về lập trình Hướng Đối Tượng và vận dụng kiến thức này để giải quyết các bài toán
                    thực tế.
                </p>
                <br />
                <br />
                <div className="lg:w-[55%] md:w-[78%] w-[90%] h-[50px] relative ">
                    <button className={`${styles.button} `}>Xem Chi Tiết</button>
                </div>
            </div>
            <div className="md:w-[40%] flex md:min-h-screen items-center justify-end pt-[70px] md:pt-[0] z-[10]">
                <Image
                    src={require('../../../public/images/image-hero.png')}
                    alt=""
                    width={1000}
                    height={1000}
                    className="object-contain md:max-w-[90%] w-[90%] lg:max-w-[85%] h-[auto] z-[10]"
                />
            </div>
        </div>
    );
};

export default Hero;
