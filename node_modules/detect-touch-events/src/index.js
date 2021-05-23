const detectTouchEvents = {
  update() {
    if (typeof window !== 'undefined') {
      detectTouchEvents.hasSupport = 'ontouchstart' in window;
      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);
    }
  },
};

detectTouchEvents.update();
export default detectTouchEvents;
