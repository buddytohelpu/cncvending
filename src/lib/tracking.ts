declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

type TrackingEvent =
  | "cta_click"
  | "form_submit"
  | "form_open"
  | "phone_click"
  | "email_click"
  | "solution_view"
  | "page_view"
  | "scroll_to_section";

interface TrackingPayload {
  event: TrackingEvent;
  properties?: Record<string, string | number | boolean>;
}

export function trackEvent(
  event: TrackingEvent,
  properties?: Record<string, string | number | boolean>
): void {
  const payload: TrackingPayload = { event, properties };

  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", payload);
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, properties);
  }
}

export function trackPhoneClick(): void {
  trackEvent("phone_click");
}

export function trackEmailClick(): void {
  trackEvent("email_click");
}

export function trackCTAClick(location: string): void {
  trackEvent("cta_click", { location });
}

export function trackFormSubmit(formType: string): void {
  trackEvent("form_submit", { form_type: formType });
}

export function trackFormOpen(location: string): void {
  trackEvent("form_open", { location });
}

