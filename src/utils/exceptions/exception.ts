import { ExceptionArgs } from "./types";

export class Exception extends Error {
    private _type: string;
    private _message: string;
    private _timestamp: Date;
    private _location: string;
    private _details: any;

    constructor(parameters: ExceptionArgs) {
        super(parameters.message);
        this._type = parameters.type;
        this._message = parameters.message;
        this._location =
            parameters.location || this.stack.split("\n")[1].trim();
        this._timestamp = new Date();
        this._details = parameters.details;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Exception);
        }

        this._log();
    }

    get type() {
        return this._type;
    }

    get message() {
        return this._message;
    }

    get timestamp() {
        return this._timestamp;
    }

    get location() {
        return this._location;
    }

    _log() {
        const logMsg = `ERROR [${this._timestamp.toISOString()}] ${this._type} ERROR ${this._details ? JSON.stringify(this._details) : ""} ${this._message} @ [FILE:${this._location}]`;
        console.error(logMsg);
    }

    toJSON() {
        return {
            type: this._type,
            message: this._message,
            timestamp: this._timestamp,
            location: this._location,
            details: this._details,
        };
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}
