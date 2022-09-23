import { useState, ChangeEvent } from 'react';
import { NAME_SIZE } from '../typings';

export type commonFormType = {
    name: string;
    friendCode: string;
    handleNameChange: ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => void;
    nameSize: NAME_SIZE;
    updateNameSize: () => void;
    handleFriendCodeChange: ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => void;
};

const useCommonForm = () => {
    const [name, setName] = useState('');
    const handleNameChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setName(value);
    };
    const [nameSize, setNameSize] = useState<NAME_SIZE>(NAME_SIZE.MEDIUM);
    const updateNameSize = () => {
        setNameSize((prev) =>
            prev === NAME_SIZE.LARGE ? NAME_SIZE.MEDIUM : prev === NAME_SIZE.MEDIUM ? NAME_SIZE.SMALL : NAME_SIZE.LARGE
        );
    };

    const [friendCode, setFriendCode] = useState('');
    const handleFriendCodeChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setFriendCode(value);
    };

    return { name, nameSize, handleNameChange, updateNameSize, friendCode, handleFriendCodeChange };
};

export default useCommonForm;
