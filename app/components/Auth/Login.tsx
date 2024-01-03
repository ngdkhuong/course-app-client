'use client';

import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { styles } from '@/app/styles/style';

type Props = {
    setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
    email: Yup.string().email('Email không tồn tại').required('Vui lòng nhập email'),
    password: Yup.string().required('Vui lòng nhập mật khẩu').min(6),
});

const Login: FC<Props> = ({ setRoute }) => {
    const [show, setShow] = useState(false);

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            console.log(email, password);
        },
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <div className="w-full">
            <h1 className={`${styles.title}`}>Tham gia khóa học tại IT-EDU</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email" className={`${styles.label}`}>
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="it-edu@gmail.com"
                    className={`${errors.email && touched.email && 'border-red-500'} ${styles.input}`}
                />
                {errors.email && touched.email && <span className="text-red-500 pt-2 block">{errors.email}</span>}
                <div className="w-full mt-5 relative mb-1">
                    <label htmlFor="password" className={`${styles.label} `}>
                        Mật khẩu
                    </label>
                    <input
                        type={!show ? 'password' : 'text'}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="itedu@password"
                        className={`${errors.password && touched.password && 'border-red-500'} ${styles.input}`}
                    />
                    {errors.password && touched.password && (
                        <span className="text-red-500 pt-2 block">{errors.password}</span>
                    )}
                </div>
                <div className="w-full mt-5">
                    <input type="submit" value="Đăng Nhập" className={`${styles.button} w-full`} />
                </div>
                <br />
                <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
                    Hoặc đăng nhập bằng
                </h5>
                <div className="flex items-center justify-center my-3">
                    <FcGoogle size={30} className="cursor-pointer mr-2" />
                    <AiOutlineGithub size={30} className="cursor-pointer ml-2" />
                </div>
                <h5 className="text-center pt-4 font-Poppins text-[14px]">
                    Bạn là người mới?
                    <span className="text-blue-500 pl-1 cursor-pointer" onClick={() => setRoute('Sign-Up')}>
                        Đăng Ký
                    </span>
                </h5>
            </form>
            <br />
        </div>
    );
};

export default Login;
