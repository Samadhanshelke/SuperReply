"use client";

import { useEffect } from "react";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
    useEffect(() => {
        return () => {
            reset();
        };
    }, [reset]);
    return <h1>ErrorPage - {error.message}</h1>;
};

export default ErrorPage;
