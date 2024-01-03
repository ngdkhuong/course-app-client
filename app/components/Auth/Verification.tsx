import { styles } from '@/app/styles/style';
import React, { FC, useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

type Props = {
    setRoute: (route: string) => void;
};

type VerifyNumber = {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
};

const Verification: FC<Props> = ({ setRoute }) => {
    const [invalidError, setInvalidError] = useState<boolean>(false);
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: '',
        1: '',
        2: '',
        3: '',
    });

    const verificationHandler = async () => {
        console.log('test');
    };

    const handleInputChange = (index: number, value: string) => {
        setInvalidError(false);
        const newVerifyNumber = { ...verifyNumber, [index]: value };
        setVerifyNumber(newVerifyNumber);

        if (value === '' && index > 0) {
            inputRefs[index - 1].current?.focus();
        } else if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    return <h1 className={`${styles.title}`}>Xác minh tài khoản</h1>;
};

export default Verification;
