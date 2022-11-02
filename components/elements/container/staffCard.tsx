import React, { FC, useMemo, useRef, useEffect, MutableRefObject } from 'react';
import Konva from 'konva';
import { Stage, Layer, Text, Image, Group } from 'react-konva';
import useImage from 'use-image';
import Shape, { shapeType } from '../shape';
import { downloadURI } from '../../../utils';
import { NAME_SIZE, FONT_FAMILY, PLAY_STYLE, PLAY_TIME, CARD_NAME } from '../../../typings';
import { SceneContext } from 'konva/lib/Context';
import { sceneWidth, sceneHeight } from '../../../constants';

const fontColor = '#f8ef6e';

type Props = {
    containerSize: { width: number; height: number };
    avatarImage: null | HTMLImageElement;
    name: string;
    nameSize: NAME_SIZE;
    fontFamily: FONT_FAMILY;
    friendCode: string;
    playTime: Set<PLAY_TIME>;
    timeMemo: string;
    salmonRunRankLevel: string;
    playStyle: Set<PLAY_STYLE>;
    exportRef: MutableRefObject<() => void | null>;
};

const CardImage: FC = () => {
    const [image] = useImage('/img/template/staff-card.webp');
    return <Image image={image} alt='splatoon3 staff card' />;
};

const CheckMark: FC<shapeType> = (props) => {
    const src = '/img/hand-drawn/checkmark.svg';
    return <Shape src={src} {...props} />;
};

const AvatarExampleImage: FC = () => {
    const [image] = useImage('/img/avatar-example.webp');
    return <Image image={image} width={625} height={625} x={1206} y={360} alt='avatar example' />;
};

const clipRoundSquare = (ctx: SceneContext, x: number, y: number, size: number, radius: number) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + size - radius, y);
    ctx.quadraticCurveTo(x + size, y, x + size, y + radius);
    ctx.lineTo(x + size, y + size - radius);
    ctx.quadraticCurveTo(x + size, y + size, x + size - radius, y + size);
    ctx.lineTo(x + radius, y + size);
    ctx.quadraticCurveTo(x, y + size, x, y + size - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
};

const StaffCard: FC<Props> = ({
    containerSize,
    avatarImage,
    name,
    nameSize,
    fontFamily,
    friendCode,
    playTime,
    timeMemo,
    salmonRunRankLevel,
    playStyle,
    exportRef,
}) => {
    const stageRef = useRef<Konva.Stage>(null);
    const scale = useMemo(() => containerSize.width / sceneWidth, [containerSize]);

    const nameFontSize = useMemo(() => {
        return nameSize === NAME_SIZE.SMALL ? 48 : nameSize === NAME_SIZE.MEDIUM ? 64 : 80;
    }, [nameSize]);

    const handleExport = () => {
        if (!stageRef.current) return;
        const stage = stageRef.current;
        const prevSize = stage.size();
        const prevScale = stage.scale();
        stage.size({ width: sceneWidth, height: sceneHeight });
        stage.scale({ x: 1.0, y: 1.0 });
        const uri = stage.toDataURL();
        stage.size(prevSize);
        stage.scale(prevScale);
        downloadURI(uri, `${CARD_NAME.STAFF_CARD}.png`);
    };

    useEffect(() => {
        exportRef.current = handleExport;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stage ref={stageRef} width={containerSize.width} height={sceneHeight * scale} scale={{ x: scale, y: scale }}>
            <Layer>
                <CardImage />
                {/* Friend Code */}
                <Text
                    x={450}
                    y={340}
                    width={675}
                    height={100}
                    align={'center'}
                    verticalAlign={'middle'}
                    text={friendCode || 'SW-1234-5678-9999'}
                    fontSize={48}
                    fontFamily={fontFamily}
                    fill={fontColor}
                />
                {/* Name */}
                <Text
                    x={450}
                    y={445}
                    width={675}
                    height={100}
                    align={'center'}
                    verticalAlign={'middle'}
                    text={name || 'さくら'}
                    fontSize={nameFontSize}
                    fontFamily={fontFamily}
                    fill={fontColor}
                />
                {/*  Play Time */}
                <CheckMark x={468} y={580} scale={0.18} isShow={playTime.has(PLAY_TIME.MON)} />
                <CheckMark x={562} y={581} scale={0.18} isShow={playTime.has(PLAY_TIME.TUE)} />
                <CheckMark x={664} y={580} scale={0.18} isShow={playTime.has(PLAY_TIME.WED)} />
                <CheckMark x={763} y={579} scale={0.18} isShow={playTime.has(PLAY_TIME.THU)} />
                <CheckMark x={862} y={580} scale={0.18} isShow={playTime.has(PLAY_TIME.FRI)} />
                <CheckMark x={961} y={581} scale={0.18} isShow={playTime.has(PLAY_TIME.SAT)} />
                <CheckMark x={1058} y={580} scale={0.18} isShow={playTime.has(PLAY_TIME.SUN)} />
                {/*  Time Memo */}
                <Text
                    x={450}
                    y={675}
                    width={675}
                    height={80}
                    align={'center'}
                    verticalAlign={'middle'}
                    text={timeMemo || '24小時全年無休！'}
                    fontSize={48}
                    fontFamily={fontFamily}
                    fill={fontColor}
                />
                {/*  Salmon Run Rank Level */}
                <Text
                    x={450}
                    y={785}
                    width={675}
                    height={80}
                    align={'center'}
                    verticalAlign={'middle'}
                    text={salmonRunRankLevel}
                    fontSize={48}
                    fontFamily={fontFamily}
                    fill={fontColor}
                />
                {/* Play Style */}
                <CheckMark x={458} y={915} scale={0.15} isShow={playStyle.has(PLAY_STYLE.CASUAL)} />
                <CheckMark x={662} y={916} scale={0.15} isShow={playStyle.has(PLAY_STYLE.HARDCORE)} />
                <CheckMark x={868} y={916} scale={0.15} isShow={playStyle.has(PLAY_STYLE.CARRY_ME_PLZ)} />

                {/* Photo */}
                <Group clipFunc={(ctx) => clipRoundSquare(ctx, 1211.5, 366, 615, 10)}>
                    {avatarImage ? (
                        <Image image={avatarImage} width={625} height={625} x={1206} y={360} alt='avatar' />
                    ) : (
                        <AvatarExampleImage />
                    )}
                </Group>
            </Layer>
        </Stage>
    );
};

export default StaffCard;
