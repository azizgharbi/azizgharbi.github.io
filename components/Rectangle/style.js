export default {
  shape: function (isClicked = false, isHover = false) {
    return {
      transition: "all .3s",
      cursor: "pointer",
      marginLeft: "10px",
      background: isHover && !isClicked ? "#80c71f" : "#89ac59",
      height:
        !isClicked && isHover
          ? "325px"
          : `${(325 + Math.random() * 150).toFixed()}px`,
      width: "75px",
    };
  },
};
