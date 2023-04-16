import { useEffect, useState } from "react";

type EventSourceOptions<State> = {
  events: string[];
  initialState: State
};

/**
 * Subscribe to an event source and return the latest event.
 * @param url The URL of the event source to connect to
 * @param options The options to pass to the EventSource constructor
 * @returns The last event received from the server
 */
const useEventSource = <State>(
  url: string | URL,
  { events, initialState }: EventSourceOptions<State>
) => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    const eventSource = new EventSource(url);

    const handler = (event: MessageEvent) => {
      console.log(event)
      setState((s) => ({
        ...s,
        [event.type]: [
          ...s[event.type],
          JSON.parse(event.data)
        ]
      }))
    }

    for (const event of events) {
      eventSource.addEventListener(event, handler);
    }

    return () => {
      for (const event of events) {
        eventSource.removeEventListener(event, handler);
      }
      eventSource.close();
    };
  }, [url, events]);

  return state;
}

export { useEventSource }
