import { ExceptionType, ResponseStatus } from "./constants";
import { Exception } from "./exception";
import { ExceptionOpts } from "./types";

export class AuthException extends Exception {
    constructor(message: string, opts?: ExceptionOpts) {
        super({
            message,
            type: ExceptionType.AUTH,
            ...opts,
        });
    }
}
