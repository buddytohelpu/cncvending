/**
 * Analytics tracking utility
 * Replace with your actual analytics implementation (Google Analytics, Mixpanel, etc.)
 */

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

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", payload);
  }

  // TODO: Replace with actual analytics implementation
  // Example: Google Analytics 4
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', event, properties);
  // }

  // Example: Mixpanel
  // if (typeof window !== 'undefined' && window.mixpanel) {
  //   window.mixpanel.track(event, properties);
  // }
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

