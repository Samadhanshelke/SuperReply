export interface ExceptionOpts {
    location?: string;
}
export interface ExceptionArgs extends ExceptionOpts {
    message: string;
    type: string;
    details?: string;
}
