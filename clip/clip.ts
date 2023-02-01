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
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap",
    },
  ],
});

// clip.addIncident(Left(".img-wrapper", 3730, "-460px"), 3270);
// clip.addIncident(
//   Width(
//     ".text-bg-wrapper",
//     "@expression(initParams.products[0].images.length * 1000)",
//     "3000px",
//     "@expression(initParams.products[0].images.length * 1000)"
//   ),
//   // 6210
//   0
// );
// clip.addIncident(Height(".text-bg-wrapper", 910, "3000px"), 6210);
clip.addIncident(comboinc(".items-looper"), 0);

export { clip };
