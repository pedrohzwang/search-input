import { Axios } from "axios-observable"
import { Book } from "types/types";

const BASE_BACKEND_URL = 'http://localhost:8080/'

export const getAllBooks = (): Book[] => {
    let data: Book[] = [];
    fetch(`${BASE_BACKEND_URL}/books`, {
        method: "get"
    })
        .then((response) => response.json())
        .then((books) => {
            data = books;
        });

    return data;
}

export const searchBooks = (search: string): Book[] => {
    let data: Book[] = [];
    fetch(`${BASE_BACKEND_URL}/books`, {
        method: "get"
    })
        .then((response) => response.json())
        .then((books) => {
            data = books;
        });

    return data;
}