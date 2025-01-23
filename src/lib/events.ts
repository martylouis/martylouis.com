/**
 * Subscribe to a custom event.
 *
 * @param eventName
 * @param listener
 */
export function subscribe(eventName: string, listener: EventListener) {
  document.addEventListener(eventName, listener);
}

/**
 * Unsubscribe from a custom event.
 *
 * @param eventName
 * @param listener
 */

export function unsubscribe(eventName: string, listener: EventListener) {
  document.removeEventListener(eventName, listener);
}

/**
 * Dispatch a custom event.
 *
 * @param eventName
 * @param data
 */
export function dispatch(eventName: string, data?: string | null) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}
