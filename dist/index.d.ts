/// <reference types="react" />
declare type Props = {
    type: string;
    title: string;
    description: string;
    position: string;
    duration: number;
};
export declare const Toast: ({ type, title, description, position, duration }: Props) => JSX.Element;
export {};
