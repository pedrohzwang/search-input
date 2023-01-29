import { Post } from "types/types";

export function getAllPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => data);
}

// export const searchBooks = (search?: string): Promise<Book[]> => {
//     if (search) {
//         return fetch(`${BASE_BACKEND_URL}/books/search?name=${search}`, {
//             method: "get"
//         })
//             .then((response) => response.json());
//     } else {
//         return getAllBooks();
//     }
// }