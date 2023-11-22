/* eslint-disable @typescript-eslint/no-unused-vars */
export const extractStringProperties = (obj: {
  [key: string]: any;
}): {[key: string]: string} => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => typeof value === 'string'),
  );
};
