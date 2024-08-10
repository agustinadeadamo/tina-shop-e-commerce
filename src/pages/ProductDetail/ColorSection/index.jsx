import React, { useState } from 'react';
import ColorOption from './ColorOption';
import possibleColors from './colorsData';

function ColorSection() {
  const [selectedColor, setSelectedColor] = useState(possibleColors[0]);

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  return (
    <div className="relative mb-8">
      <h4 className="font-semibold mb-2">Choose a color:</h4>
      <div className="flex space-x-2 mb-4">
        {possibleColors.map(color => (
          <ColorOption
            key={color}
            color={color}
            isSelected={selectedColor === color}
            onSelect={() => handleColorChange(color)}
            dataTestid={`color-option-${color}`} // Add data-testid for each color option
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(ColorSection);
