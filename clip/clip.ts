import { HTMLClip } from "@donkeyclip/motorcortex";
import id from "server/id";
import css from "./clip.css";
import html from "./clip.html";
import { comboinc } from "./effects/Combo";
import { Height } from "./effects/Height";
import { Left } from "./effects/Left";
import { Opacity } from "./effects/Opacity";
import { Width } from "./effects/Width";

import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap",
    },
  ],
});

clip.addIncident(
  Left(".img-wrapper", 3730, "@expression(initParams.products.length * -90)px"),
  0
);

clip.addIncident(Opacity(".intro", 1, 0, 0), 3732);
clip.addIncident(comboinc(".items-looper"), 3730);

clip.addIncident(
  Width(
    ".buy-wrapper > .text-bg-wrapper",
    900,
    "2000px",
    "@expression(ceil(initParams.products.length * 4240))"
  ),
  0
);
clip.addIncident(
  Height(
    ".buy-wrapper > .text-bg-wrapper",
    900,
    "2000px",
    "@expression(ceil(initParams.products.length * 4240))"
  ),
  0
);

clip.addIncident(
  Opacity(
    ".text-bg-wrapper",
    10,
    0,
    "@expression(ceil(initParams.products.length * 4240) +900)"
  ),
  0
);
clip.addIncident(
  Opacity(
    ".svgwave",
    10,
    1,
    "@expression(ceil(initParams.products.length * 4240)+901)"
  ),
  0
);
clip.addIncident(
  Opacity(
    ".cards",
    1,
    1,
    "@expression(ceil(initParams.products.length * 4240)+902)"
  ),
  0
);

export { clip };
