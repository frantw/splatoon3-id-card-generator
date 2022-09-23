import { useState, ChangeEvent } from 'react';
import { NAME_SIZE, FONT_FAMILY } from '../typings';

export type commonFormType = {
    name: string;
    friendCode: string;
    handleNameChange: ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => void;
    nameSize: NAME_SIZE;
    updateNameSize: () => void;
    handleFriendCodeChange: ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => void;
    fontFamily: FONT_FAMILY;
    handleFontFamilyChange: ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => void;
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

    const [fontFamily, setFontFamily] = useState(FONT_FAMILY.FAKEPEARL);
    const handleFontFamilyChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setFontFamily(FONT_FAMILY[value as keyof typeof FONT_FAMILY]);
    };

    return { name, nameSize, handleNameChange, updateNameSize, friendCode, handleFriendCodeChange, fontFamily, handleFontFamilyChange };
};

export default useCommonForm;
