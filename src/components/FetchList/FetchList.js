const FetchList = (setList, colorData) => {
  setList((prevList) => {
    return [
      ...prevList,
      { id: Math.random().toString(), colorName: colorData },
    ];
  });
};

export default FetchList;
