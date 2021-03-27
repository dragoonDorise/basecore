export const useConfig = () => {
  let wsValues = {};
  if (window.location.href.indexOf("test") !== -1) {
    wsValues = {};
  } else {
    wsValues = {};
  }
  return wsValues;
};
