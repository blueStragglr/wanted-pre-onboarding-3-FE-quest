import React, { CSSProperties } from "react";
declare const isTwElement: unique symbol;
export declare type IsTwElement = {
    [isTwElement]: true;
};
export declare type FalseyValue = undefined | null | false;
export declare type FlattenInterpolation<P> = ReadonlyArray<Interpolation<P>>;
export declare type InterpolationValue = string | number | FalseyValue | TailwindComponentInterpolation;
export declare type Interpolation<P> = InterpolationValue | InterpolationFunction<P> | FlattenInterpolation<P>;
export declare type InterpolationFunction<P> = (props: P) => Interpolation<P>;
declare type TailwindComponentInterpolation = PickU<TailwindComponentBase<any, any>, keyof TailwindComponentBase<any, any>>;
declare type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;
declare type IsAny<T, True, False = never> = True | False extends (T extends never ? True : False) ? True : False;
export declare const mergeArrays: (template: TemplateStringsArray, templateElements: (string | undefined | null)[]) => string[];
export declare const cleanTemplate: (template: Array<Interpolation<any>>, inheritedClasses?: string) => string;
export declare type PickU<T, K extends keyof T> = T extends any ? {
    [P in K]: T[P];
} : never;
export declare type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
/**
 * ForwardRef typings
 */
export declare type TailwindExoticComponent<P> = PickU<React.ForwardRefExoticComponent<P>, keyof React.ForwardRefExoticComponent<any>>;
declare type MergeProps<O extends object, P extends {} = {}> = P extends any ? IsAny<P, RemoveIndex<P> & O, P & O> : never;
declare type TailwindPropHelper<P, O extends object = {}> = PickU<MergeProps<O, P>, keyof MergeProps<O, P>>;
declare type TailwindComponentPropsWith$As<P extends object, O extends object, $As extends string | React.ComponentType<any> = React.ComponentType<P>, P2 = $As extends AnyTailwindComponent ? TailwindComponentAllInnerProps<$As> : $As extends IntrinsicElementsKeys | React.ComponentType<any> ? React.ComponentPropsWithRef<$As> : never> = P & O & TailwindPropHelper<P2> & {
    $as?: $As;
};
/**
 * An interface represent a component styled by tailwind-styled-components
 *
 * @export
 * @interface TailwindComponent
 * @template P The base react props
 * @template O The props added with the template function.
 */
export declare type TailwindComponent<P extends object, O extends object = {}> = IsTwElement & TailwindComponentBase<P, O> & WithStyle<P, O>;
/**
 * An interface represent a component styled by tailwind-styled-components
 *
 * @export
 * @interface TailwindComponentBase
 * @extends {TailwindExoticComponent<TailwindPropHelper<P, O>>}
 * @template P The base react props
 * @template O The props added with the template function.
 */
export interface TailwindComponentBase<P extends object, O extends object = {}> extends TailwindExoticComponent<TailwindPropHelper<P, O>> {
    (props: TailwindPropHelper<P, O> & {
        $as?: never | undefined;
    }): React.ReactElement<TailwindPropHelper<P, O>>;
    <$As extends string | React.ComponentType<any> = React.ComponentType<P>>(props: TailwindComponentPropsWith$As<P, O, $As>): React.ReactElement<TailwindComponentPropsWith$As<P, O, $As>>;
}
/**
 *  An interface represent withStyle functionality
 *
 * @export
 * @interface WithStyle
 * @template P
 * @template O
 */
export interface WithStyle<P extends object, O extends object = {}> {
    withStyle: <S extends object = {}>(styles: CSSProperties | ((p: P & O & S) => CSSProperties)) => TailwindComponent<P, O & S>;
}
/**
 * Generice TailwindComponent
 */
declare type AnyTailwindComponent = TailwindComponent<any, any>;
/**
 * A template function that accepts a template literal of tailwind classes and returns a tailwind-styled-component
 *
 * @export
 * @interface TemplateFunction
 * @template E
 */
export interface TemplateFunction<P extends object, O extends object = {}> {
    (template: TemplateStringsArray): TailwindComponent<P, O>;
    (template: TemplateStringsArray | InterpolationFunction<P & O>, ...rest: Array<Interpolation<P & O>>): TailwindComponent<P, O>;
    <K extends object>(template: TemplateStringsArray | InterpolationFunction<P & O & K>, ...rest: Array<Interpolation<P & O & K>>): TailwindComponent<P, O & K>;
}
export declare type TailwindComponentInnerProps<C extends AnyTailwindComponent> = C extends TailwindComponent<infer P, any> ? P : never;
export declare type TailwindComponentInnerOtherProps<C extends AnyTailwindComponent> = C extends TailwindComponent<any, infer O> ? O : never;
export declare type TailwindComponentAllInnerProps<C extends AnyTailwindComponent> = TailwindComponentInnerProps<C> & TailwindComponentInnerOtherProps<C>;
export declare type IntrinsicElementsTemplateFunctionsMap = {
    [RTag in keyof JSX.IntrinsicElements]: TemplateFunction<JSX.IntrinsicElements[RTag]>;
};
/**
 *
 *
 * @export
 * @interface TailwindInterface
 * @extends {IntrinsicElementsTemplateFunctionsMap}
 */
export interface TailwindInterface extends IntrinsicElementsTemplateFunctionsMap {
    <C extends TailwindComponent<any, any>>(component: C): TemplateFunction<TailwindComponentInnerProps<C>, TailwindComponentInnerOtherProps<C>>;
    <C extends React.ComponentType<any>>(component: C): TemplateFunction<C extends (P?: never) => any ? {} : React.ComponentPropsWithoutRef<C>>;
    <C extends keyof JSX.IntrinsicElements>(component: C): TemplateFunction<JSX.IntrinsicElements[C]>;
}
declare const tw: TailwindInterface;
export default tw;
