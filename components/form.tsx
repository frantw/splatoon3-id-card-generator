import React, { FC, useState, ChangeEvent, Fragment } from 'react';
import GameCard from './gameCard';
import StaffCard from './staffCard';
import {
    Box,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    RadioGroup,
    Radio,
    Grid,
    GridItem,
    SimpleGrid,
    Checkbox,
    CheckboxGroup,
} from '@chakra-ui/react';
import { CARD_TYPE, RANK_LEVEL, VOICE_CHAT, PLAY_STYLE, WEAPON_CLASS, WEAPON_TYPE } from '../typings';

type Props = {
    cardType: CARD_TYPE;
};

const Form: FC<Props> = ({ cardType }) => {
    const [name, setName] = useState('');
    const handleNameChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setName(value);
    };

    const [friendCode, setFriendCode] = useState('');
    const handleFriendCodeChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setFriendCode(value);
    };

    const [weaponList, setWeaponList] = useState({});
    const handleWeaponClassChange = ({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
        if (!value) {
            setWeaponList({});
        }
        setWeaponList(WEAPON_TYPE[value as keyof typeof WEAPON_CLASS]);
    };

    const [favoriteWeapon, setFavoriteWeapon] = useState('');
    const handleFavoriteWeaponChange = ({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
        if (!value) {
            setFavoriteWeapon('');
        }
        setFavoriteWeapon(weaponList[value as keyof typeof weaponList]);
    };

    const [level, setLevel] = useState('');
    const handleLevelChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setLevel(value);
    };

    const [rankLevel, setRankLevel] = useState('');
    const handleRankLevelChange = ({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
        setRankLevel(value);
    };

    const [voiceChat, setVoiceChat] = useState(VOICE_CHAT.NONE);
    const handleVoiceChatChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setVoiceChat(value as VOICE_CHAT);
    };

    const [playStyle, setPlayStyle] = useState(new Set());
    const handlePlayStyleChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        if (playStyle.has(value)) {
            playStyle.delete(value);
        } else {
            playStyle.add(value);
        }
        setPlayStyle(new Set([...playStyle]));
    };

    const [memo, setMemo] = useState('');
    const handleMemoChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setMemo(value);
    };

    return (
        <Box>
            {cardType == CARD_TYPE.GAME_CARD && (
                <GameCard
                    name={name}
                    friendCode={friendCode}
                    favoriteWeapon={favoriteWeapon}
                    level={level}
                    rankLevel={rankLevel}
                    voiceChat={voiceChat}
                    playStyle={playStyle as Set<keyof typeof PLAY_STYLE>}
                    memo={memo}
                ></GameCard>
            )}

            {cardType == CARD_TYPE.STAFF_CARD && <StaffCard name={name} friendCode={friendCode}></StaffCard>}

            <SimpleGrid columns={2} spacing={10}>
                {/* Name */}
                <FormControl mt={6}>
                    <FormLabel>你的名字</FormLabel>
                    <Input type='text' maxLength={10} onChange={handleNameChange} />
                </FormControl>
                {/* Friend Code */}
                <FormControl mt={6}>
                    <FormLabel>好友代碼</FormLabel>
                    <Input
                        type='text'
                        maxLength={17}
                        placeholder='SW-1234-5678-9999'
                        onChange={handleFriendCodeChange}
                    />
                </FormControl>
            </SimpleGrid>

            {cardType == CARD_TYPE.GAME_CARD && (
                <Fragment>
                    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                        <GridItem colSpan={2}>
                            <FormControl mt={6}>
                                <FormLabel>喜愛武器</FormLabel>
                                <SimpleGrid columns={2} spacing={1}>
                                    {/* Weapon Class */}
                                    <Select
                                        placeholder='選擇武器分類'
                                        isRequired={true}
                                        onChange={handleWeaponClassChange}
                                    >
                                        {(Object.keys(WEAPON_CLASS) as (keyof typeof WEAPON_CLASS)[]).map(
                                            (weaponClass) => (
                                                <option key={weaponClass} value={weaponClass}>
                                                    {WEAPON_CLASS[weaponClass]}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                    {/* Favorite Weapon */}
                                    <Select
                                        placeholder='選擇喜愛武器'
                                        isRequired={true}
                                        onChange={handleFavoriteWeaponChange}
                                    >
                                        {weaponList &&
                                            (Object.keys(weaponList) as (keyof typeof weaponList)[]).map((weapon) => (
                                                <option key={weapon as string} value={weapon as string}>
                                                    {weaponList[weapon]}
                                                </option>
                                            ))}
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            {/* Level */}
                            <FormControl mt={6}>
                                <FormLabel>你的等級</FormLabel>
                                <Input type='number' maxLength={3} placeholder='1' onChange={handleLevelChange} />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            {/* Rank Level */}
                            <FormControl mt={6}>
                                <FormLabel>Rank 等級</FormLabel>
                                <Select onChange={handleRankLevelChange}>
                                    {(Object.keys(RANK_LEVEL) as (keyof typeof RANK_LEVEL)[]).map((rankLevel) => (
                                        <option key={rankLevel} value={rankLevel}>
                                            {RANK_LEVEL[rankLevel]}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                        </GridItem>
                    </Grid>

                    {/* Voice Chat */}
                    <FormControl mt={6} as='fieldset'>
                        <FormLabel as='legend'>語音方式</FormLabel>
                        <RadioGroup>
                            <HStack spacing='24px'>
                                {(Object.keys(VOICE_CHAT) as (keyof typeof VOICE_CHAT)[]).map((voiceChat) => (
                                    <Radio key={voiceChat} value={voiceChat} onChange={handleVoiceChatChange}>
                                        {VOICE_CHAT[voiceChat]}
                                    </Radio>
                                ))}
                            </HStack>
                        </RadioGroup>
                    </FormControl>

                    {/* Play Style */}
                    <FormControl mt={6} as='fieldset'>
                        <FormLabel as='legend'>喜愛玩法</FormLabel>
                        <CheckboxGroup>
                            <HStack spacing='24px'>
                                {(Object.keys(PLAY_STYLE) as (keyof typeof PLAY_STYLE)[]).map((playStyle) => (
                                    <Checkbox key={playStyle} value={playStyle} onChange={handlePlayStyleChange}>
                                        {PLAY_STYLE[playStyle]}
                                    </Checkbox>
                                ))}
                            </HStack>
                        </CheckboxGroup>
                    </FormControl>

                    {/* Memo */}
                    <FormControl mt={6}>
                        <FormLabel>想說的話</FormLabel>
                        <Input type='text' maxLength={30} onChange={handleMemoChange} />
                    </FormControl>
                </Fragment>
            )}

            {/* TODO: staff card form */}
        </Box>
    );
};

export default Form;
