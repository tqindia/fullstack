import { nextJsApiRouter } from "@connectrpc/connect-next";
import type { ContextValues } from "@connectrpc/connect";
import type { NextApiRequest } from "next";
import routes from "@/lib/server/controllers/task/task.controller";
import {  createContextValues } from "@connectrpc/connect";
import {authContextKey} from '@/lib/server/context/contextKey';

const { handler, config } = nextJsApiRouter({
    routes,
    contextValues: (req: NextApiRequest): ContextValues => {
      console.log(req)
      return createContextValues().set(
        authContextKey,
        "hello" // TODO(Yuvraj): Please fix it, Block because of nextjs middleware issue with firebase
      );
    },
});

export { handler as default, config };
