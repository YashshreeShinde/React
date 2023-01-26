export interface IRadioBtnsProps {
    type: "radio";
    label: string;
    name: string;
    defaultValue?: string;
    required: true;
    options: { value: string; label: string }[];
    attribute?: { [name: string]: string | boolean | number }[];
    reset?: boolean;
}
