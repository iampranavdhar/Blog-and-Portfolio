const detectHover = {
  update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectHover.hover = window.matchMedia('(hover: hover)').matches;
      detectHover.none = (
        window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(hover: on-demand)').matches
      );
      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;
      detectHover.anyNone = (
        window.matchMedia('(any-hover: none)').matches ||
        window.matchMedia('(any-hover: on-demand)').matches
      );
    }
  },
};

detectHover.update();
export default detectHover;
