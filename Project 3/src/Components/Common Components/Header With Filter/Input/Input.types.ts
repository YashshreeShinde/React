export interface IInputProps {
    label?: string;
    name: string;
    type: Exclude<React.HTMLInputTypeAttribute, TExcluded>; // text //checkbox
    defaultValue?: string | number;
    placeholder?: string;
    attribute?: IAttribute;
    required?: true;
    reset?: boolean;
    onChange?:any,
    value:any
}
type TExcluded = "select" | "radio" | "checkbox" | "button" | "input";
interface IAttribute {
    [name: string]: string | boolean | number;
}
