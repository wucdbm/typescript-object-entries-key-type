interface ObjectConstructor {

    entries<E extends PropertyKey, T>(o: { [K in E]: T } | ArrayLike<T>): [E, T][];

    fromEntries<E extends PropertyKey, T = any>(entries: Iterable<readonly [E, T]>): { [k in E]: T };

}


