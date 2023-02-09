/*This incident is export as function so you can use it more than one times*/

import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const comboinc = (selector) =>
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
            duration: 10,
            easing: "easeInBack",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              width: "3000px",
              height: "3000px",
            },
            initialValues: {
              width: "0px",
              height: "0px",
            },
          },
          props: {
            duration: 510,
            selector: ".text-bg-wrapper ",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              width: "3000px",
              height: "3000px",
            },
            initialValues: {
              width: "0px",
              height: "0px",
            },
          },
          props: {
            duration: 510,
            selector: " .item-bg",
          },
          position: 150,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              fontSize: "40px",
            },
            initialValues: {
              fontSize: 0,
            },
          },
          props: {
            duration: 410,
            selector: " .item-title",
            easing: "easeInOutCubic",
          },
          position: 560,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              fontSize: "35px",
            },
            initialValues: {
              fontSize: 0,
            },
          },
          props: {
            duration: 410,
            selector: " .item-description",
            easing: "easeInOutCubic",
          },
          position: 660,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                rotate: "90deg",
              },
            },
            initialValues: {
              transform: {
                rotate: "0deg",
              },
            },
          },
          props: {
            duration: 4000,
            selector: ".image-wrapper svg",
          },
          position: 150,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              width: "930px",
              height: "930px",
            },
            initialValues: {
              width: "0px",
              height: "0px",
            },
          },
          props: {
            duration: 350,
            selector: ".item-image-wrapper ",
          },
          position: 200,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
            initialValues: {
              opacity: 1,
            },
          },
          props: {
            duration: 10,
            selector: ".item-img ",
            delay: "@pattern(2000,4000)",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
            initialValues: {
              opacity: 1,
            },
          },
          props: {
            duration: 10,
          },
          position: 4000,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *3500)",
    }
  );
