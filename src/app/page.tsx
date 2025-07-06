// import { getQueryClient, trpc } from "@/trpc/server";
// import Client from "./client";
// import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
// import { Suspense } from "react";

// const Home = async () => {
//   const queryClient = getQueryClient();
//   void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: 'Saharsh' }));
  
//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Client />
//       </Suspense>
//     </HydrationBoundary>
//   );
// }

// export default Home;

"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, } from "@tanstack/react-query";
import { toast } from "sonner";

const Home = () => {
  const trpc = useTRPC();
 const invoke = useMutation(trpc.invoke.mutationOptions({
  onSuccess: () => {
    toast.success("Background job invoked");
  },
  onError: () => {
    toast.error("Failed to invoke background job");
  },
 }));
  
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 max-w-7xl mx-auto">
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: 'Saharsh' })}>
        Invoke Background Job
      </Button>
    </div>
  );
};

export default Home;