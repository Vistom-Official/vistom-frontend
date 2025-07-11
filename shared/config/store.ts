export const RootStore = <T>(get: () => T) => ({
  getFilledValues: (): T => {
    const fields = get() as Record<string, string | number | string[]>;

    return Object.fromEntries(
      Object.entries(fields).filter(([, value]) => {
        if(typeof value === 'function') {
          return false;
        }

        if (Array.isArray(value)) {
          return value.length > 0;
        }

        return value !== '' && value !== 0;
      })
    ) as T;
  },
})