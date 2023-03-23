/*This incident is export as function so you can use it more than one times*/

import { CSSEffect } from "@donkeyclip/motorcortex";
export const Top = (selector, duration, value, delay, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
