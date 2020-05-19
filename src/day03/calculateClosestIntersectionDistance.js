const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const isDirectionHorizontal = (direction) => direction === "L" || direction === "R";
const isDirectionPositive = (direction) => direction === "U" || direction === "R";

function getPointsOnPath(path) {
  const points = new Set();

  let lastKnownLocation = { x: 0, y: 0 };
  path.forEach((instruction) => {
    const direction = instruction[0];
    const distance = +instruction.slice(1);

    const operation = isDirectionPositive(direction) ? add : subtract;
    const takeStep = isDirectionHorizontal(direction)
      ? (value) => ({ y: lastKnownLocation.y, x: operation(lastKnownLocation.x, value) })
      : (value) => ({ x: lastKnownLocation.x, y: operation(lastKnownLocation.y, value) });

    for (let step = 1; step <= distance; step++) {
      const nextLocation = takeStep(step);
      points.add(`${nextLocation.x},${nextLocation.y}`);
    }

    lastKnownLocation = takeStep(distance);
  });

  return points;
}

module.exports = function calculateClosestIntersectionDistance(paths) {
  const points = paths.map((path) => path.split(",")).map(getPointsOnPath);

  const intersections = points.reduce((previousIntersection, pointSet) => {
    const nextIntersection = new Set();
    for (const point of pointSet) {
      if (previousIntersection.has(point)) {
        nextIntersection.add(point);
      }
    }

    return nextIntersection;
  });

  if (intersections.size === 0) {
    throw new Error("No intersections");
  }

  return Math.min(
    ...Array.from(intersections.values()).map((intersection) => {
      const [x, y] = intersection.split(",");
      return Math.abs(+x) + Math.abs(+y);
    })
  );
};
