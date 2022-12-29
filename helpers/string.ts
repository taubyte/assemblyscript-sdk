export class StringHelper {
  /**
   * StringHelper uses for passing bufPtr and bufLen of a uint8 array representation of a string
   */

  bufPtr: usize;
  bufLen: u32;

  constructor(str: string) {
    let buf = String.UTF8.encode(str);
    this.bufPtr = changetype<usize>(buf);
    this.bufLen = buf.byteLength;
  }

  /**
   * ptr returns the pointer to the uint8 array representation of the string
   */
  ptr(): u32 {
    return u32(this.bufPtr);
  }

  /**
   * len returns the length of the uint8 array representation of the string
   */
  len(): u32 {
    return this.bufLen;
  }
}
