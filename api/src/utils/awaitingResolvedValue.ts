export const AwaitNextValueResolve = new Set<Function>();

export function nextValue() {
  return new Promise((resolve) => {
    AwaitNextValueResolve.add(resolve);
  });
}

export async function* valueGenerator() {
  while (true) {
    yield await nextValue();
  }
}
