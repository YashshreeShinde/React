export interface ISelectProps {
    type: "select";
    label: string;
    name: string;
    defaultValue?: string;
    options: IOptions[];
    attribute?: IAttribute;
    required?: true;
    reset?: boolean;
}
interface IAttribute {
    [name: string]: string | boolean | number;
}
interface IOptions {
    value: string;
    label: string;
}
