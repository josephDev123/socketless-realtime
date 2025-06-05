import { AwaitNextValueResolve } from "./awaitingResolvedValue";

export function processMessage<TData extends { data: any }>(data: TData) {
  const incomingData = JSON.stringify(data.data);
  console.log(incomingData);

  for (const resolver of AwaitNextValueResolve) {
    resolver(incomingData);
    AwaitNextValueResolve.delete(resolver);
  }
}
