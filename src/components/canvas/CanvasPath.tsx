import React, { useEffect, useRef } from 'react';
import Path from '../path/Path';
import { collectPathsFromChildren } from '../../utils/resolvePath';
import { CanvasPathProps } from '../../types/canvas';

export const CanvasPath: React.FC<CanvasPathProps> = ({
  path,
  children,
  width,
  height,
  stroke,
  fill,
  lineWidth,
  lineCap,
  lineJoin,
  fillRule,
  clear = true,
  onDraw,
  ...canvasProps
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const combined = new Path();
  if (path instanceof Path) {
    combined.concat(path);
  }
  if (children) {
    const parts = collectPathsFromChildren(children, {
      sx: width / 2,
      sy: height / 2,
      cx: width / 2,
      cy: height / 2
    });
    parts.forEach((part) => {
      if (part instanceof Path) {
        combined.concat(part);
      }
    });
  }

  const d = combined.toString();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (clear) {
      ctx.clearRect(0, 0, width, height);
    }

    combined.toCanvas(ctx);

    if (onDraw) {
      onDraw(ctx, combined);
      return;
    }

    if (fill && fill !== 'none') {
      ctx.fillStyle = fill;
      if (fillRule) {
        ctx.fill(fillRule);
      } else {
        ctx.fill();
      }
    }

    if (stroke && stroke !== 'none') {
      ctx.strokeStyle = stroke;
      if (lineWidth !== undefined) ctx.lineWidth = lineWidth;
      if (lineCap !== undefined) ctx.lineCap = lineCap;
      if (lineJoin !== undefined) ctx.lineJoin = lineJoin;
      ctx.stroke();
    }
  }, [d, width, height, stroke, fill, lineWidth, lineCap, lineJoin, fillRule, clear, onDraw]);

  return <canvas ref={canvasRef} width={width} height={height} {...canvasProps} />;
};

CanvasPath.displayName = 'CanvasPath';
