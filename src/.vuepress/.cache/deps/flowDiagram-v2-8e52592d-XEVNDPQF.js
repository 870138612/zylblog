import {
  flowRendererV2,
  flowStyles
} from "./chunk-IYZTOGPK.js";
import "./chunk-G6M4H3BL.js";
import {
  flowDb,
  parser$1
} from "./chunk-MAKDDGBP.js";
import "./chunk-7G42MAX6.js";
import "./chunk-ZOMXBULC.js";
import "./chunk-4UFF4LJD.js";
import "./chunk-XUQE3DS3.js";
import "./chunk-VQAYE36P.js";
import "./chunk-2XTEPAGQ.js";
import {
  require_dist
} from "./chunk-7S4WKUPM.js";
import {
  require_dayjs_min,
  setConfig
} from "./chunk-3MP44TXF.js";
import {
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/mermaid/dist/flowDiagram-v2-8e52592d.js
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-8e52592d-XEVNDPQF.js.map
