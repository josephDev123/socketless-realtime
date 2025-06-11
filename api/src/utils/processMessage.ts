import { AwaitNextValueResolve } from "./awaitingResolvedValue";

export function processMessage<TData>(data: TData) {
  const incomingData = JSON.stringify(data);
  console.log("incoming", incomingData);

  for (const resolver of AwaitNextValueResolve) {
    resolver(incomingData);
    AwaitNextValueResolve.delete(resolver);
  }
}
