// TODO do better

export enum enumEventType {
  EventTypeUndefined = 0,
  EventTypeHttp,
  EventTypePubsub,
  EventTypeP2P,
}

let eventTypeStringArray = [
  "EventTypeUndefined",
  "EventTypeHttp",
  "EventTypePubsub",
  "EventTypeP2P",
]

// do an enum with a method toString()
export class EventType {
  value: u32;
  constructor(value: u32) {
    this.value = value;
  }

  toString(): string {
    return eventTypeStringArray[this.value];
  }

  isHttp(): bool {
    return this.value == enumEventType.EventTypeHttp;
  }

  isPubsub(): bool {
    return this.value == enumEventType.EventTypePubsub;
  }

  isP2P(): bool {
    return this.value == enumEventType.EventTypeP2P;
  }
}