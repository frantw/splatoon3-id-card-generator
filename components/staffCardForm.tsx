import React, { FC, useState, useRef, MutableRefObject, ChangeEvent } from 'react';
import {
    Box,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    Button,
    Checkbox,
    CheckboxGroup,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import ProfileForm from './profileForm';
import { profileType } from '../hooks/useProfile';
import { PLAY_TIME, SALMON_RUN_LEVEL, PLAY_STYLE } from '../typings';

const StaffCard = dynamic(() => import('./staffCard'), { ssr: false });

type Props = {
    containerSize: { width: number; height: number };
} & profileType;

const StaffCardForm: FC<Props> = ({
    containerSize,
    name,
    nameSize,
    friendCode,
    handleNameChange,
    updateNameSize,
    handleFriendCodeChange,
}) => {
    const exportRef = useRef(null) as unknown as MutableRefObject<() => void | null>;

    const [playTime, setPlayTime] = useState(PLAY_TIME.MON);
    const handlePlayTimeChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setPlayTime(PLAY_TIME[value as keyof typeof PLAY_TIME]);
    };

    const [timeMemo, setTimeMemo] = useState('24 小時全年無休！');
    const handleTimeMemoChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setTimeMemo(value);
    };

    const [salmonRunRankLevel, setSalmonRunRankLevel] = useState(SALMON_RUN_LEVEL.APPRENTICE);
    const handleRankLevelChange = ({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
        setSalmonRunRankLevel(SALMON_RUN_LEVEL[value as keyof typeof SALMON_RUN_LEVEL]);
    };

    const [playStyle, setPlayStyle] = useState(PLAY_STYLE.CASUAL);
    const handlePlayStyleChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setPlayStyle(PLAY_STYLE[value as keyof typeof PLAY_STYLE]);
    };

    return (
        <Box>
            {/* Card Preview */}
            <StaffCard
                containerSize={containerSize}
                name={name}
                nameSize={nameSize}
                friendCode={friendCode}
                exportRef={exportRef}
            ></StaffCard>

            {/* Name &  FriendCode*/}
            <ProfileForm
                name={name}
                friendCode={friendCode}
                nameSize={nameSize}
                handleNameChange={handleNameChange}
                updateNameSize={updateNameSize}
                handleFriendCodeChange={handleFriendCodeChange}
            />

            {/* Play Time */}
            <FormControl mt={6} as='fieldset'>
                <FormLabel as='legend'>排班時間</FormLabel>
                <CheckboxGroup defaultValue={['MON']}>
                    <HStack spacing='24px'>
                        {(Object.keys(PLAY_TIME) as (keyof typeof PLAY_TIME)[]).map((playTime) => (
                            <Checkbox key={playTime} value={playTime} onChange={handlePlayTimeChange}>
                                {PLAY_TIME[playTime]}
                            </Checkbox>
                        ))}
                    </HStack>
                </CheckboxGroup>
            </FormControl>

            {/* Time Memo */}
            <FormControl mt={6}>
                <FormLabel>時間備註</FormLabel>
                <Input type='text' maxLength={20} onChange={handleTimeMemoChange} />
            </FormControl>

            <SimpleGrid columns={2} spacing={10}>
                {/* Salmon Run Level */}
                <FormControl mt={6}>
                    <FormLabel>最高評價</FormLabel>
                    <Select onChange={handleRankLevelChange} defaultValue={SALMON_RUN_LEVEL.APPRENTICE}>
                        {(Object.keys(SALMON_RUN_LEVEL) as (keyof typeof SALMON_RUN_LEVEL)[]).map(
                            (salmonRunRankLevel) => (
                                <option key={salmonRunRankLevel} value={salmonRunRankLevel}>
                                    {SALMON_RUN_LEVEL[salmonRunRankLevel]}
                                </option>
                            )
                        )}
                    </Select>
                </FormControl>

                {/* Play Style */}
                <FormControl mt={6} as='fieldset'>
                    <FormLabel as='legend'>工作態度</FormLabel>
                    <CheckboxGroup defaultValue={['CASUAL']}>
                        <HStack spacing='24px'>
                            {(Object.keys(PLAY_STYLE) as (keyof typeof PLAY_STYLE)[]).map((playStyle) => (
                                <Checkbox key={playStyle} value={playStyle} onChange={handlePlayStyleChange}>
                                    {PLAY_STYLE[playStyle]}
                                </Checkbox>
                            ))}
                        </HStack>
                    </CheckboxGroup>
                </FormControl>
            </SimpleGrid>

            {/* Download */}
            <Button colorScheme='purple' mt={30} leftIcon={<DownloadIcon />} onClick={() => exportRef.current()}>
                下載名片
            </Button>
        </Box>
    );
};

export default StaffCardForm;
