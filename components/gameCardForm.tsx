import React, { FC, useState, useRef, ChangeEvent, MutableRefObject } from 'react';
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
    Button,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { RANK_LEVEL, VOICE_CHAT, PLAY_RULE, WEAPON_CLASS, WEAPON_TYPE } from '../typings';
import dynamic from 'next/dynamic';

const GameCard = dynamic(() => import('./gameCard'), { ssr: false });

const GameCardForm: FC = () => {
    const [name, setName] = useState('さくら');
    const handleNameChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setName(value);
    };

    const [friendCode, setFriendCode] = useState('SW-1234-5678-9999');
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

    const [favoriteWeapon, setFavoriteWeapon] = useState<string>(WEAPON_TYPE.BRUSH.INKBRUSH);
    const handleFavoriteWeaponChange = ({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
        if (!value) {
            setFavoriteWeapon('');
        }
        setFavoriteWeapon(weaponList[value as keyof typeof weaponList]);
    };

    const [level, setLevel] = useState('1');
    const handleLevelChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setLevel(value);
    };

    const [rankLevel, setRankLevel] = useState(RANK_LEVEL.C_MINUS);
    const handleRankLevelChange = ({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) => {
        setRankLevel(RANK_LEVEL[value as keyof typeof RANK_LEVEL]);
    };

    const [voiceChat, setVoiceChat] = useState(VOICE_CHAT.DISCORD);
    const handleVoiceChatChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setVoiceChat(VOICE_CHAT[value as keyof typeof VOICE_CHAT]);
    };

    const [favoritePlayRules, setFavoritePlayRules] = useState(new Set([PLAY_RULE.TURF_WAR]));
    const [acceptablePlayRules, setAcceptablePlayRules] = useState(new Set([PLAY_RULE.SALMON_RUN]));
    const handlePlayRulesClick = (rule: PLAY_RULE) => {
        if (favoritePlayRules.has(rule)) {
            favoritePlayRules.delete(rule);
            acceptablePlayRules.add(rule);
            setFavoritePlayRules(new Set([...favoritePlayRules]));
            setAcceptablePlayRules(new Set([...acceptablePlayRules]));
        } else if (acceptablePlayRules.has(rule)) {
            acceptablePlayRules.delete(rule);
            setAcceptablePlayRules(new Set([...acceptablePlayRules]));
        } else {
            favoritePlayRules.add(rule);
            setFavoritePlayRules(new Set([...favoritePlayRules]));
        }
    };

    const [memo, setMemo] = useState('這是個範例，請自由填寫吧！');
    const handleMemoChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setMemo(value);
    };

    const exportRef = useRef(null) as unknown as MutableRefObject<() => void | null>;

    return (
        <Box>
            <GameCard
                name={name}
                friendCode={friendCode}
                favoriteWeapon={favoriteWeapon}
                level={level}
                rankLevel={rankLevel}
                voiceChat={voiceChat}
                favoritePlayRules={favoritePlayRules as Set<PLAY_RULE>}
                acceptablePlayRules={acceptablePlayRules as Set<PLAY_RULE>}
                memo={memo}
                exportRef={exportRef}
            ></GameCard>

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

            <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                <GridItem colSpan={2}>
                    <FormControl mt={6}>
                        <FormLabel>喜愛武器</FormLabel>
                        <SimpleGrid columns={2} spacing={1}>
                            {/* Weapon Class */}
                            <Select placeholder='選擇武器分類' isRequired={true} onChange={handleWeaponClassChange}>
                                {(Object.keys(WEAPON_CLASS) as (keyof typeof WEAPON_CLASS)[]).map((weaponClass) => (
                                    <option key={weaponClass} value={weaponClass}>
                                        {WEAPON_CLASS[weaponClass]}
                                    </option>
                                ))}
                            </Select>
                            {/* Favorite Weapon */}
                            <Select placeholder='選擇喜愛武器' isRequired={true} onChange={handleFavoriteWeaponChange}>
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
                        <Select onChange={handleRankLevelChange} defaultValue={RANK_LEVEL.C_MINUS}>
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
                <RadioGroup defaultValue={'DISCORD'}>
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
                <HStack spacing='16px'>
                    {(Object.keys(PLAY_RULE) as (keyof typeof PLAY_RULE)[]).map((key) => {
                        const rule = PLAY_RULE[key];
                        const isFavorite = favoritePlayRules.has(rule);
                        const isAcceptable = acceptablePlayRules.has(rule);
                        return (
                            <Button
                                key={key}
                                colorScheme={isFavorite ? 'blue' : isAcceptable ? 'blackAlpha' : 'gray'}
                                onClick={() => handlePlayRulesClick(rule)}
                            >
                                {rule}
                            </Button>
                        );
                    })}
                </HStack>
            </FormControl>

            {/* Memo */}
            <FormControl mt={6}>
                <FormLabel>想說的話</FormLabel>
                <Input type='text' maxLength={30} onChange={handleMemoChange} />
            </FormControl>

            {/* Download */}
            <Button colorScheme='purple' mt={30} leftIcon={<DownloadIcon />} onClick={() => exportRef.current()}>
                下載名片
            </Button>
        </Box>
    );
};

export default GameCardForm;
