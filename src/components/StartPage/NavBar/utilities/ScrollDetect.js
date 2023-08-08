const ScrollDetectFunction = (scrollAmountHook, headerClassAddHook) => {
  let winScroll =
    document.documentElement.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (
    document.documentElement.scrollWidth > 960 &&
    document.documentElement.scrollTop > 0
  ) {
    scrollAmountHook((winScroll / height) * 100);
    headerClassAddHook(true);
  } else {
    headerClassAddHook(false);
    scrollAmountHook(0);
  }
};

// hook to get page width
function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export { ScrollDetectFunction, getCurrentDimension };
