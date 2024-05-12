import { ExceptionType, ResponseStatus } from "./constants";
import { Exception } from "./exception";
import { ExceptionOpts } from "./types";

export class NotFoundException extends Exception {
    constructor(source: string, message: string, opts?: ExceptionOpts) {
        super({
            message,
            type: ExceptionType.NOT_FOUND,
            details: `[SOURCE:${source}]`,
            ...opts,
        });
    }
}
