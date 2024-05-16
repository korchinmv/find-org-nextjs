interface getCoordinatesProps {
  adress: string;
  setCoordinates: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const getСoordinates = ({
  adress,
  setCoordinates,
}: getCoordinatesProps) => {
  ymaps3
    .search({ text: adress })
    .then((result) => {
      setCoordinates(result[0].geometry?.coordinates.join(","));
    })
    .catch((e) => {
      console.log(e);
    });
};
