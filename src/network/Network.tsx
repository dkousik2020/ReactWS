export class ApiService {
    static async get<T>(url: string): Promise<T> {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return (await response.json()) as T;
    }

    static async post<TResponse, TRequest>(
        url: string,
        data: TRequest
    ): Promise<TResponse> {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return (await response.json()) as TResponse;
    }

    static async put<TResponse, TRequest>(
        url: string,
        data: TRequest
    ): Promise<TResponse> {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return (await response.json()) as TResponse;
    }

    static async delete<T>(url: string): Promise<T> {
        const response = await fetch(url, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return (await response.json()) as T;
    }
}