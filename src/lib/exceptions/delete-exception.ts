import { ExceptionType } from "./constants";
import { Exception } from "./exception";
import { ExceptionOpts } from "./types";

export class DeleteException extends Exception {
    constructor(source: string, message: string, opts?: ExceptionOpts) {
        super({
            message,
            type: ExceptionType.DELETE,
            details: `[SOURCE:${source}]`,
            ...opts,
        });
    }
}
