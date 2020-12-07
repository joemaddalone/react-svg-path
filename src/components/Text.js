import React from 'react';
import cleanAttributes from '../utils/cleanAttributes';

const wrapText = (text, maxWidth, charWidth, lineHeight, x, y) => {
  const perLine = maxWidth / charWidth;
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let line = word;
    if (currentLine.trim() !== '') {
      line = `${currentLine} ${line}`;
    }
    // Line is too long
    if (line.length > perLine) {
      if (word.length > perLine) {
        // Word longer than allowed line length: split word in two with a dash
        const wordStart = line.substr(0, perLine - 1);
        currentLine = line.substr(perLine - 1);
        lines.push(`${wordStart}-`);
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    } else {
      currentLine = line;
    }
  }

  lines.push(currentLine);

  return lines.map((line, i) => {
    return (
      <tspan key={i} y={y + i * lineHeight} x={x}>
        {line}
      </tspan>
    );
  });
};

export const Text = ({
  x,
  y,
  sx,
  sy,
  wrap,
  charWidth = 7,
  lineHeight = 20,
  children,
  ...attributes
}) => {
  const allowedAttributes = cleanAttributes(attributes);
  let childElements = '';
  if (wrap) {
    React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        childElements += child;
      }
    });
  }
  const textX = x || sx;
  const textY = y || sy;
  return (
    <text x={textX} y={textY} {...allowedAttributes}>
      {wrap && childElements
        ? wrapText(childElements, wrap, charWidth, lineHeight, textX, textY)
        : children}
    </text>
  );
};
