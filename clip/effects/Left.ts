/*This incident is export as function so you can use it more than one times*/

import { CSSEffect } from "@donkeyclip/motorcortex";
export const Left = (selector, duration, value, delay, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
