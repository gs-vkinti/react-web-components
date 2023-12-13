import r2wc from "@r2wc/react-to-web-component";
import { Counter, JOEngagement } from "../lib";

window.customElements.get("px-counter") ||
  window.customElements.define(
    "px-counter",
    r2wc(Counter, {
      props: {
        name: "string",
        onAction: "function",
        myObject: "json",
      },
      shadow: "open",
    })
  );

window.customElements.get("px-jo-engagement") ||
  window.customElements.define(
    "px-jo-engagement",
    r2wc(JOEngagement, {
      props: {
        subscriptionId: "string",
      },
      shadow: "open",
    })
  );
