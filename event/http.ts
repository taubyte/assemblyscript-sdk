import { Return } from "../return";
import { errorString } from "../errno";
import { StringHelper, U32 } from "../helpers";
import { Event } from "./base";


//@ts-ignore
@external("taubyte/sdk", "eventHttpWrite")
  declare function eventHttpWrite(eventId: u32, bufPtr: u32, bufSize: u32, n: u32): u32

export class HttpEvent extends Event {
  /**
   * HttpEvent is the class for all http events, acting as a pseudo to u32 passed to 
   * the wasm exported function. It also implements http-event only calls
   */

  /**
   * write writes a string to the http response
   * @param value the string to write
   */
  write(value: string): Return<number> {
    let str = new StringHelper(value)
    let str_n = new U32()
    let err = eventHttpWrite(this.eventNum, str.ptr(), str.len(), str_n.ptr)
    if (err) {
      return new Return(0, `write failed with: ${errorString(err)}`)
    }

    return new Return(str_n.load(), null)
  }
}