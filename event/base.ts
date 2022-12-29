import { Return } from "../return";
import { EventType } from "./type";
import { U32 } from "../helpers";
import { HttpEvent } from "./http";


// @ts-ignore
@external("taubyte/sdk", "getEventType")
  declare function getEventType(e: BaseEvent, typeId: u32): void

export class BaseEvent {
  /**
   * Event is the base class for all events
   */

  eventNum: u32;
  eventType: EventType;

  constructor(e: u32) {
    this.eventNum = e;
    this.eventType = new EventType(0)
  }

  /**
   * toString returns the event number as a string
   */
  toString(): string {
    return this.eventNum.toString();
  }

  /**
   * type returns the type of the event
   */
  type(): EventType {
    if (this.eventType.value != 0) {
      return this.eventType
    }

    let f = new U32()
    getEventType(this, f.ptr)
    this.eventType = new EventType(f.load())
    return this.eventType
  }
}


export class Event extends BaseEvent {
  /**
   * Event is a psuedo to u32 that is passed as a parameter to a host-called
   * function. It implements calls for bringing out the true event type
   */

  /**
   * http returns an HttpEvent if the event is an http event, otherwise it returns
   * an error
   */
  http(): Return<HttpEvent> {
    if (this.type().isHttp()) {
      return new Return(new HttpEvent(this.eventNum), null)
    }

    // TODO find a way to send null here, or create a new Return
    // without instantiating HttpEvent
    return new Return(new HttpEvent(0), "not an http event")
  }
}


