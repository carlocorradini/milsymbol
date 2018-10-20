import { ms } from "../src/milsymbol";
ms.reset();

import { app6b } from "stanagapp6";
import verify from "./app6b";
ms.setStandard("APP6");

import { sof } from "../src/lettersidc";
ms.addIcons(sof);

export default verify(ms, "APP-6 B SOF", app6b.WAR.SOFUNT);
