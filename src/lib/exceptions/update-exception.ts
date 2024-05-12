import { ExceptionType } from "./constants";
import { Exception } from "./exception";
import { ExceptionOpts } from "./types";

export class UpdateException extends Exception {
    constructor(source: string, message: string, opts?: ExceptionOpts) {
        super({
            message,
            type: ExceptionType.UPDATE,
            details: `[SOURCE:${source}]`,
            ...opts,
        });
    }
}
