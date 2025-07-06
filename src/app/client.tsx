"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const Client = () => {
  const trpc = useTRPC();
  const {data} = useSuspenseQuery(trpc.createAI.queryOptions({ text: 'Saharsh' }));
  return <h1>{data?.greeting}</h1>;
};

export default Client;