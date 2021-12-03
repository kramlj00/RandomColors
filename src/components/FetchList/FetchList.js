const FetchList = (list, setList, colorData) => {
  console.log(list);
  setList((prevList) => {
    return [
      ...prevList,
      { id: Math.random().toString(), colorName: colorData },
    ];
  });
};

export default FetchList;
