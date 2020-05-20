const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const isDirectionHorizontal = (direction) => direction === "L" || direction === "R";
const isDirectionPositive = (direction) => direction === "U" || direction === "R";

function getPointsOnPath(path) {
  const pointToStep = new Map();

  let lastKnownLocation = { x: 0, y: 0 };
  let lastStep = 0;

  path.forEach((instruction) => {
    const direction = instruction[0];
    const distance = +instruction.slice(1);

    const operation = isDirectionPositive(direction) ? add : subtract;
    const takeStep = isDirectionHorizontal(direction)
      ? (value) => ({ y: lastKnownLocation.y, x: operation(lastKnownLocation.x, value) })
      : (value) => ({ x: lastKnownLocation.x, y: operation(lastKnownLocation.y, value) });

    for (let step = 1; step <= distance; step++) {
      const nextLocation = takeStep(step);
      const pointKey = `${nextLocation.x},${nextLocation.y}`;

      if (!pointToStep.has(pointKey)) {
        pointToStep.set(pointKey, lastStep + step);
      }
    }

    lastKnownLocation = takeStep(distance);
    lastStep += distance;
  });

  return pointToStep;
}

module.exports = function calculateClosestIntersectionDistance(paths) {
  const pointsToSteps = paths.map((path) => path.split(",")).map(getPointsOnPath);

  const intersections = pointsToSteps.reduce((previousIntersection, pointToStep) => {
    const nextIntersection = new Map();

    for (const point of pointToStep.keys()) {
      if (previousIntersection.has(point)) {
        nextIntersection.set(point, previousIntersection.get(point) + pointToStep.get(point));
      }
    }

    return nextIntersection;
  });

  if (intersections.size === 0) {
    throw new Error("No intersections");
  }

  return Math.min(...Array.from(intersections.values()));
};
