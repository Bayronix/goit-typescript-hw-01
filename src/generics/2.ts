type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color">,
  B extends Pick<AllType, "position" | "weight">
>(top: T, bottom: B): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObj = { name: "Item 1", color: "blue" };
const bottomObj = { position: 10, weight: 20 };

export const result = compare(topObj, bottomObj);
