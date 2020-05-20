/// <reference types="react" />
declare type Props = {
    type: string;
    title: string;
    description: string;
    position: string;
    duration: number;
    closeButton: boolean;
};
export declare const Toast: ({ type, title, description, position, duration, closeButton }: Props) => JSX.Element;
export {};
