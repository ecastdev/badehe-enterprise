// Exporting individual functions
function getParents(elem) {
  return [];
}

function queryClosestParent(elem, selector) {
  return null;
}

function transform(el, transformValue) {
  // Implementation
}

function getTranslate(el) {
  return { x: 0, y: 0 };
}

function lerp(start, end, amt) {
  // Implementation
}

// Exporting types
var Vector2 = {
  x: 0,
  y: 0
};

var LocomotiveElementAttributes = {
  el: null,
  class: "",
  top: 0,
  bottom: 0,
  offset: 0,
  repeat: false,
  inView: false,
  call: ""
};

var ScrollInstance = {
  scroll: Vector2,
  limit: 0
};

// Exporting classes
class Core {
  constructor(options) {}

  init() {}

  update() {}

  start() {}

  stop() {}

  scrollTo(target, options) {}

  setScroll(x, y) {}

  on(event, func) {}

  destroy() {}
}

class Native extends Core {
  constructor(options) {
    super(options);
  }

  init() {}

  checkScroll() {}

  checkResize() {}

  addElements() {}

  updateElements() {}

  scrollTo(targetOption, offsetOption) {}

  update() {}

  destroy() {}
}

class Smooth extends Core {
  constructor(options) {
    super(options);
  }

  init() {}

  setScrollLimit() {}

  startScrolling() {}

  stopScrolling() {}

  checkKey(e) {}

  checkScroll() {}

  checkResize() {}

  updateDelta(e) {}

  updateScroll(e) {}

  addDirection() {}

  addSpeed() {}

  initScrollBar() {}

  reinitScrollBar() {}

  destroyScrollBar() {}

  getScrollBar(e) {}

  releaseScrollBar(e) {}

  moveScrollBar(e) {}

  addSections() {}

  transform(element, x, y, delay) {}

  transformElement(isForced) {}

  scrollTo(targetOption, offsetOption) {}

  update() {}

  startScroll() {}

  stopScroll() {}

  setScroll(x, y) {}

  destroy() {}
  
}

// Exporting interfaces
var LocomotiveScrollOptions = {
  el: null,
  elMobile: null,
  name: "",
  offset: 0,
  repeat: false,
  smooth: false,
  smoothMobile: false,
  direction: "",
  inertia: 0,
  class: "",
  scrollbarClass: "",
  scrollingClass: "",
  draggingClass: "",
  smoothClass: "",
  initClass: "",
  getSpeed: false,
  getDirection: false
};

// Exporting default class and alias
class LocomotiveScroll {
  constructor(options) {}

  init() {}

  update() {}

  start() {}

  stop() {}

  scrollTo(target, options) {}

  setScroll(x, y) {}

  on(event, func) {}

  destroy() {}
}

module.exports = {
  getParents,
  queryClosestParent,
  transform,
  getTranslate,
  lerp,
  Vector2,
  LocomotiveElementAttributes,
  ScrollInstance,
  Core,
  Native,
  Smooth,
  LocomotiveScroll,
  LocomotiveScrollOptions,
  Scroll: LocomotiveScroll
};