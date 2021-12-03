const FetchColor = async (setColorData) => {
  const response = await fetch("https://www.colr.org/json/color/random", {
    cache: "no-cache",
  }); // no-cache to randomize colors
  const data = await response.json();
  // console.log(`Data: ${JSON.stringify(data)}`);
  const [color] = data.colors;
  setColorData(color.hex);
  // console.log(color.hex);
};

export default FetchColor;
