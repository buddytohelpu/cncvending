"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/tracking";

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    trackEvent("page_view", {
      page_path: url,
      page_title: document.title,
    });

    if (window.gtag) {
      const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      if (measurementId) {
        window.gtag("config", measurementId, {
          page_path: url,
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}

