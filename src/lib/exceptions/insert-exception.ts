import { ExceptionType } from "./constants";
import { Exception } from "./exception";
import { ExceptionOpts } from "./types";

export class InsertException extends Exception {
    constructor(source: string, message: string, opts?: ExceptionOpts) {
        super({
            message,
            type: ExceptionType.INSERT,
            details: `[SOURCE:${source}]`,
            ...opts,
        });
    }
}
