/*This incident is export as function so you can use it more than one times*/

import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const comboinc = (selector, duration, value, delay) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            selector: ".items-looper",
            duration: 1,
            easing: "easeInBack",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 1,
            },
          },
          props: {
            selector: ".items-looper",
            duration: 1,
            easing: "easeInBack",
          },
          position: "@expression(initParams.products[0].images.length * 1000)",
        },
      ],
    },
    {
      selector,
      id: "e3o",
    }
  );
