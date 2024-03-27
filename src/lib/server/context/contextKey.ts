import { createContextKey } from "@connectrpc/connect";

export const authContextKey = createContextKey<string | undefined>(undefined);