export class U32 {
  /**
   * U32 type for allocating and loading u32 value pointers
   */

  ptr: u32;

  constructor() {
    //@ts-ignore
    this.ptr = u32(__alloc(sizeof<u32>()));
  }

  /**
   * load returns the value of the u32 pointer
   */
  load(): u32 {
    return load<u32>(this.ptr);
  }

  /**
   * send returns the u32 pointer
   */
  send(): u32 {
    return this.ptr;
  }

  /**
   * log logs the value of the u32 pointer
   */
  log(prefix: string): void {
    console.log(prefix)
    console.log(this.load().toString());
  }
}
