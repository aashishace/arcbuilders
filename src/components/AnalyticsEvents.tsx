"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const trackedElement = target?.closest<HTMLElement>("[data-gtm-event]");

      if (!trackedElement) {
        return;
      }

      const eventName = trackedElement.dataset.gtmEvent;

      if (!eventName) {
        return;
      }

      trackEvent(eventName, {
        gtm_source: trackedElement.dataset.gtmSource,
        gtm_label: trackedElement.dataset.gtmLabel || trackedElement.textContent?.trim(),
        link_url: trackedElement instanceof HTMLAnchorElement ? trackedElement.href : undefined,
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
