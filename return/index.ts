export class Return<T> {
  /**
   * Return is a wrapper for a value that may or may not have an error
   */

  private _: T;
  err: string;

  constructor(value: T, err: string | null) {
    this._ = value;
    if (err) {
      this.err = err;
    } else {
      this.err = ""
    }
  }

  /**
   * unwrap returns the value if there is no error, otherwise it throws
   */
  unwrap(): T {
    if (this.err.length) {
      throw new Error(`Unchecked error: ${this.err}`);
    }

    return this._;
  }
}