import Select from '../../Select/Select';
import Button from '../../Button/Button';
import IconComponent from '../../../Icon Component/IconComponent';

export const ActionsMap:{[key:string]:({}:any)=>JSX.Element}={
    "button":Button,
    "select":Select,
    "icon":IconComponent
}
