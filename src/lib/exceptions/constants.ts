export enum ResponseStatus {
    BAD_REQUEST = "BAD_REQUEST",
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    NOT_FOUND = "NOT_FOUND",
    CONFLICT = "CONFLICT",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
}

export enum ExceptionSource {
    INSTAGRAM = "INSTAGRAM",
    SUPABASE = "SUPABASE",
}

export enum ExceptionType {
    VALIDATION = "VALIDATION",
    AUTH = "AUTH",
    NOT_FOUND = "NOT_FOUND",
    FETCH = "FETCH",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    INSERT = "INSERT",
}

export const STATUS_CODES = {
    [ResponseStatus.BAD_REQUEST]: 400,
    [ResponseStatus.UNAUTHORIZED]: 401,
    [ResponseStatus.FORBIDDEN]: 403,
    [ResponseStatus.NOT_FOUND]: 404,
    [ResponseStatus.CONFLICT]: 409,
    [ResponseStatus.INTERNAL_SERVER_ERROR]: 500,
    [ResponseStatus.SERVICE_UNAVAILABLE]: 503,
};
