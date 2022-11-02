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
    AspectRatio,
    Skeleton,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import {
    RANK_LEVEL,
    VOICE_CHAT,
    PLAY_RULE,
    WEAPON_CLASS,
    WEAPON_TYPE,
    FONT_FAMILY_NAME,
    FONT_FAMILY,
} from '../../../typings';
import dynamic from 'next/dynamic';
import CommonForm from './commonForm';
import { commonFormType } from '../../../hooks/useCommonForm';
import { sceneWidth, sceneHeight } from '../../../constants';

const GameCard = dynamic(() => import('../container/gameCard'), { ssr: false, loading: () => <Skeleton /> });

type Props = {
    containerSize: { width: number; height: number };
} & commonFormType;

const GameCardForm: FC<Props> = ({
    containerSize,
    name,
    nameSize,
    friendCode,
    handleNameChange,
    updateNameSize,
    handleFriendCodeChange,
}) => {
    const [fontFamily, setFontFamily] = useState(FONT_FAMILY.MICROSOFT_JHENGHEI);
    const handleFontFamilyChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        setFontFamily(FONT_FAMILY[value as keyof typeof FONT_FAMILY]);
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
            {/* Card Preview */}
            <AspectRatio maxW={`${sceneWidth}px`} ratio={sceneWidth / sceneHeight}>
                <GameCard
                    containerSize={containerSize}
                    name={name}
                    nameSize={nameSize}
                    fontFamily={fontFamily}
                    friendCode={friendCode}
                    favoriteWeapon={favoriteWeapon}
                    level={level}
                    rankLevel={rankLevel}
                    voiceChat={voiceChat}
                    favoritePlayRules={favoritePlayRules as Set<PLAY_RULE>}
                    acceptablePlayRules={acceptablePlayRules as Set<PLAY_RULE>}
                    memo={memo}
                    exportRef={exportRef}
                />
            </AspectRatio>

            {/* Name &  FriendCode*/}
            <CommonForm
                name={name}
                friendCode={friendCode}
                nameSize={nameSize}
                handleNameChange={handleNameChange}
                updateNameSize={updateNameSize}
                handleFriendCodeChange={handleFriendCodeChange}
            />

            {/* Font Family */}
            <FormControl mt={6} as='fieldset'>
                <FormLabel as='legend'>文字字體</FormLabel>
                <RadioGroup defaultValue={'MICROSOFT_JHENGHEI'}>
                    <HStack spacing='0' wrap={'wrap'}>
                        {(Object.keys(FONT_FAMILY_NAME) as (keyof typeof FONT_FAMILY)[]).map((fontFamily) => (
                            <Radio
                                key={fontFamily}
                                value={fontFamily}
                                onChange={handleFontFamilyChange}
                                px={'12px'}
                                py={{ md: '0', sm: '0', base: '8px' }}
                            >
                                {FONT_FAMILY_NAME[fontFamily]}
                            </Radio>
                        ))}
                    </HStack>
                </RadioGroup>
            </FormControl>

            <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                <GridItem colSpan={{ md: 2, sm: 4, base: 4 }}>
                    <FormControl mt={6}>
                        <FormLabel>喜愛武器</FormLabel>
                        <SimpleGrid columns={2} spacing={{ md: 1, sm: 10, base: 1 }}>
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
                <GridItem colSpan={{ md: 1, sm: 2, base: 4 }}>
                    {/* Level */}
                    <FormControl mt={{ md: 6, sm: 0, base: 0 }}>
                        <FormLabel>你的等級</FormLabel>
                        <Input type='number' maxLength={3} placeholder='1' onChange={handleLevelChange} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={{ md: 1, sm: 2, base: 4 }}>
                    {/* Rank Level */}
                    <FormControl mt={{ md: 6, sm: 0, base: 0 }}>
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
                    <HStack spacing='0' wrap={'wrap'}>
                        {(Object.keys(VOICE_CHAT) as (keyof typeof VOICE_CHAT)[]).map((voiceChat) => (
                            <Radio
                                key={voiceChat}
                                value={voiceChat}
                                onChange={handleVoiceChatChange}
                                px={'12px'}
                                py={{ md: '0', sm: '0', base: '8px' }}
                            >
                                {VOICE_CHAT[voiceChat]}
                            </Radio>
                        ))}
                    </HStack>
                </RadioGroup>
            </FormControl>

            {/* Play Rules */}
            <FormControl mt={6} as='fieldset'>
                <FormLabel as='legend'>喜愛玩法</FormLabel>
                <HStack spacing='0' wrap={'wrap'}>
                    {(Object.keys(PLAY_RULE) as (keyof typeof PLAY_RULE)[]).map((key) => {
                        const rule = PLAY_RULE[key];
                        const isFavorite = favoritePlayRules.has(rule);
                        const isAcceptable = acceptablePlayRules.has(rule);
                        return (
                            <Box key={key} px={'12px'} py={{ md: '0', sm: '8px', base: '8px' }}>
                                <Button
                                    colorScheme={isFavorite ? 'blue' : isAcceptable ? 'blackAlpha' : 'gray'}
                                    onClick={() => handlePlayRulesClick(rule)}
                                >
                                    {rule}
                                </Button>
                            </Box>
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
