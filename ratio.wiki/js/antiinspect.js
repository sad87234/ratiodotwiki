document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = function (e) {
  if (
    e.keyCode === 123 || 
    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || 
    (e.ctrlKey && e.keyCode === 85) 
  ) {
    return false;
  }
};

Object.defineProperty(window, 'console', {
  get: function () {
    throw new Error("Console is blocked.");
  }
});