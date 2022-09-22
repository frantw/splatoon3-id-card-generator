import React, { FC, useRef, useEffect } from 'react';
import { CARD_TYPE } from '../typings/constants';

type Props = {
  cardType: CARD_TYPE,
};

const Canvas: FC<Props> = ({cardType}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d'); 
    if (!ctx) {
      return;
    }
    const img = new Image(1920, 1080);
    img.src = `/img/template/${cardType}.png`;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    }
  }, [cardType]);
  
  return <canvas ref={canvasRef} width='1920' height='1080' style = {{ width: '100%'}} />
}

export default Canvas;