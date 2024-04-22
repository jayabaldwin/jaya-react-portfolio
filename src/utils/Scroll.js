const handleClick = (event, anchor) => {
  event.preventDefault();
  const element = document.querySelector(anchor);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default handleClick();
