import { ExceptionType, ResponseStatus } from "./constants";
import { Exception } from "./exception";
import { ExceptionOpts } from "./types";

export class FetchException extends Exception {
    constructor(source: string, message: string, opts?: ExceptionOpts) {
        super({
            message,
            type: ExceptionType.FETCH,
            details: `[SOURCE:${source}]`,
            ...opts,
        });
    }
}
