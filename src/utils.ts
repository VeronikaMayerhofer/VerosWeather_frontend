export const keys = <T extends object>(obj: T): (keyof T)[] =>
    Object.keys(obj) as (keyof T)[];

export const values = <T extends object>(obj: T): (T[keyof T])[] =>
    Object.values(obj) as (T[keyof T])[];


export const entries = <T extends object>(obj: T): [keyof T, T[keyof T]][] =>
    keys(obj).map(key => [key, obj[key]]);