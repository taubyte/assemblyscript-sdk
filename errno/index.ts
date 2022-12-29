export function errorString(value: u32): string {
    return new SdkError(value).toString()
}

class SdkError {
    /**
     * SdkError is a wrapper for u32 errors sent by the vm
     */

    value: u32;
    constructor(value: u32) {
        this.value = value;
    }

    toString(): string {
        // Grab enum variable name and return
        return parseSdkError(this.value);
    }
}

enum enumSdkError {
    ErrorNone = 0,
    ErrorEventNotFound,
    ErrorBufferTooSmall,
    ErrorAddressOutOfMemory,
    ErrorNilAddress,
    ErrorHttpWrite,
    ErrorHttpReadBody,
    ErrorCloseBody,
    ErrorEOF,
    ErrorReadHeaders,
    ErrorClientNotFound,
    ErrorParseUrlFailed,
    ErrorMemoryWriteFailed,
    ErrorCap
}

let sdkErrorStringArray = [
    "ErrorNone",
    "ErrorEventNotFound",
    "ErrorBufferTooSmall",
    "ErrorAddressOutOfMemory",
    "ErrorNilAddress",
    "ErrorHttpWrite",
    "ErrorHttpReadBody",
    "ErrorCloseBody",
    "ErrorEOF",
    "ErrorReadHeaders",
    "ErrorClientNotFound",
    "ErrorParseUrlFailed",
    "ErrorMemoryWriteFailed",
    "ErrorCap",
]


function parseSdkError(value: u32): string {
    return sdkErrorStringArray[value]
}