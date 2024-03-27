import { nextJsApiRouter } from "@connectrpc/connect-next";
import type { ContextValues } from "@connectrpc/connect";
import type { NextApiRequest } from "next";
import routes from "@/lib/server/controllers/todo";
import {  createContextValues } from "@connectrpc/connect";
import {authContextKey} from '@/lib/server/context/contextKey';

const { handler, config } = nextJsApiRouter({
    routes,
    contextValues: (req: NextApiRequest): ContextValues => {
      return createContextValues().set(
        authContextKey,
        req.cookies.token // TODO(Yuvraj): Please fix it, Block because of nextjs middleware issue with firebase
      );
    },
});

export { handler as default, config };
