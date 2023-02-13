function getMediaQuery(size) {
  class MediaQuery {
    size = 0;
    min = "";
    max = "";
    gt = "";

    constructor(size) {
      this.size = size;
      // IMPROVE: refactor gt alias to min - there's no need to have both min-width: size + 1 and min-width: size
      // min-width: size doesn't play well with max-width: size, as both rules are applied at the threshold
      this.min = `(min-width: ${this.size + 1}px)`;
      this.gt = `(min-width: ${this.size + 1}px)`;
      this.max = `(max-width: ${this.size}px)`;
    }
    toString() {
      return this.max;
    }
    css(css) {
      return {
        [`@media ${this.max}`]: css,
      };
    }
  }

  return new MediaQuery(size);
}

export const mobileThreshold = 768;
export const largeThreshold = 1024;
export const xLargeThreshold = 1440;
export const xxLargeThreshold = 1600;
export const xxxLargeThreshold = 1920;
export const BREAKPOINTS = {
  /** 320px */
  XS: getMediaQuery(320),
  /** 425px */
  SM: getMediaQuery(425),
  /** 768px */
  MD: getMediaQuery(mobileThreshold),
  /** 1024px */
  LG: getMediaQuery(largeThreshold),
  /** 1440px */
  XL: getMediaQuery(xLargeThreshold),
};
