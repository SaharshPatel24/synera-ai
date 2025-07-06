import { getQueryClient, trpc } from "@/trpc/server";
import Client from "./client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

const Home = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: 'Saharsh' }));
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
}

export default Home;