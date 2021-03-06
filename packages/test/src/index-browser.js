import "babel-polyfill";

import Transport from "@ledgerhq/hw-transport-u2f";
import runTests from "./runTests";

const btn = document.createElement("button");
btn.textContent = "run tests";
document.body.appendChild(btn);
btn.onclick = () =>
  runTests(Transport).then(
    () => {
      console.log("ALL PASS");
    },
    e => {
      console.error(e);
      process.exit(1);
    }
  );
