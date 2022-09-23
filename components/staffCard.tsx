import React, { FC, useMemo, useRef, useEffect, MutableRefObject } from 'react';
import Konva from 'konva';
import { Stage, Layer, Text, Image } from 'react-konva';
import useImage from 'use-image';
import { downloadURI } from '../utils';
import { NAME_SIZE } from '../typings';

type Props = {
    containerSize: { width: number; height: number };
    name: string;
    nameSize: NAME_SIZE;
    friendCode: string;
    exportRef: MutableRefObject<() => void | null>;
};

const sceneWidth = 1920;
const sceneHeight = 1080;

const CardImage: FC = () => {
    const [image] = useImage('/img/template/staff-card.png');
    return <Image image={image} alt='splatoon3 staff card' />;
};

const StaffCard: FC<Props> = ({ containerSize, name, nameSize, friendCode, exportRef }) => {
    const stageRef = useRef<Konva.Stage>(null);
    const scale = useMemo(() => containerSize.width / sceneWidth, [containerSize]);

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
        downloadURI(uri, 'splatoon3-staff-card.png');
    };

    useEffect(() => {
        exportRef.current = handleExport;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stage ref={stageRef} width={containerSize.width} height={sceneHeight * scale} scale={{ x: scale, y: scale }}>
            <Layer>
                <CardImage />
            </Layer>
        </Stage>
    );
};

export default StaffCard;
