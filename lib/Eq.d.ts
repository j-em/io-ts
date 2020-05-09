import * as E from 'fp-ts/lib/Eq';
import * as S from './Schemable';
import Eq = E.Eq;
/**
 * @since 2.2.2
 */
export declare type TypeOf<E> = E extends Eq<infer A> ? A : never;
/**
 * @since 2.2.2
 */
export declare const string: Eq<string>;
/**
 * @since 2.2.2
 */
export declare const number: Eq<number>;
/**
 * @since 2.2.2
 */
export declare const boolean: Eq<boolean>;
/**
 * @since 2.2.2
 */
export declare const UnknownArray: Eq<Array<unknown>>;
/**
 * @since 2.2.2
 */
export declare const UnknownRecord: Eq<Record<string, unknown>>;
/**
 * @since 2.2.2
 */
export declare function nullable<A>(or: Eq<A>): Eq<null | A>;
/**
 * @since 2.2.2
 */
export declare const type: <A>(eqs: {
    [K in keyof A]: Eq<A[K]>;
}) => Eq<A>;
/**
 * @since 2.2.2
 */
export declare function partial<A>(properties: {
    [K in keyof A]: Eq<A[K]>;
}): Eq<Partial<A>>;
/**
 * @since 2.2.2
 */
export declare const record: <A>(codomain: Eq<A>) => Eq<Record<string, A>>;
/**
 * @since 2.2.2
 */
export declare const array: <A>(eq: Eq<A>) => Eq<Array<A>>;
/**
 * @since 2.2.2
 */
export declare const tuple: <A extends ReadonlyArray<unknown>>(...components: {
    [K in keyof A]: Eq<A[K]>;
}) => Eq<A>;
/**
 * @since 2.2.2
 */
export declare function intersection<A, B>(left: Eq<A>, right: Eq<B>): Eq<A & B>;
/**
 * @since 2.2.2
 */
export declare function sum<T extends string>(tag: T): <A>(members: {
    [K in keyof A]: Eq<A[K] & Record<T, K>>;
}) => Eq<A[keyof A]>;
/**
 * @since 2.2.2
 */
export declare function lazy<A>(f: () => Eq<A>): Eq<A>;
/**
 * @since 2.2.2
 */
export declare const eq: typeof E.eq & S.Schemable<E.URI> & S.WithRefinement<E.URI>;
