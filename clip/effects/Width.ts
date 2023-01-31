/*This incident is export as function so you can use it more than one times*/

import { CSSEffect } from "@donkeyclip/motorcortex";
export const Width = (selector, duration, value, delay, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
      id: "test",
    }
  );
