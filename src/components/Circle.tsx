import { Center } from "@chakra-ui/react";

const Circle = () => {
  const originalRadius = 100; // Adjust the original radius of the circle as needed
  const strokeWidth = 2; // Width of the circle's border
  const numParts = 12; // Number of equal parts in the circle
  const colors = ["red", "blue", "yellow"];

  const radius = originalRadius * 2; // Double the radius

  const generatePathData = (index: number) => {
    const startAngle = (index * 360) / numParts;
    const endAngle = ((index + 1) * 360) / numParts;
    const startPoint = {
      x: radius + radius * Math.cos((startAngle * Math.PI) / 180),
      y: radius + radius * Math.sin((startAngle * Math.PI) / 180),
    };
    const endPoint = {
      x: radius + radius * Math.cos((endAngle * Math.PI) / 180),
      y: radius + radius * Math.sin((endAngle * Math.PI) / 180),
    };
    return `M ${radius},${radius}
            L ${startPoint.x},${startPoint.y}
            A ${radius},${radius} 0 0,1 ${endPoint.x},${endPoint.y}
            Z`;
  };

  return (
    <Center>
      <svg width={`${2 * radius}`} height={`${2 * radius}`}>
        {colors.map((color, index: number) => (
          <g
            key={index}
            onClick={() => console.log(`Button ${color} clicked!`)}
          >
            <path
              d={generatePathData(index * 4)}
              fill={color}
              stroke="black"
              strokeWidth={strokeWidth}
            />
          </g>
        ))}
      </svg>
    </Center>
  );
};

export default Circle;
