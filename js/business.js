const CLASSNAME = "-visible";
const TIMEOUT = 1200;
const $target = $(".title");

setInterval(() => {
  $target.addClass(CLASSNAME);
}, TIMEOUT * 2);