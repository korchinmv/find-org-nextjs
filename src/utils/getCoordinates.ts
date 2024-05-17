interface getCoordinatesProps {
  adress: string;
}

export const getСoordinates = ({ adress }: getCoordinatesProps) => {
  const coord = ymaps3
    .search({ text: adress })
    .then((result) => {
      return result[0].geometry?.coordinates.join(",");
    })
    .catch((e) => {
      console.log(e);
    });
  return coord;
};
