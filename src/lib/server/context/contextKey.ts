import { createContextKey } from "@connectrpc/connect";

// Create a context key called authContextKey
// It will hold a value of type string or undefined
export const authContextKey = createContextKey<string | undefined>(undefined);
