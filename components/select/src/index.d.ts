import { WeElement } from 'omi';
import '@omiu/popover';
interface Props {
    items: any[];
    active: boolean;
    value: string;
    placeholder: string;
    size: 'medium' | 'small' | 'mini';
}
export default class Select extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: string;
    };
    static propTypes: {
        items: ArrayConstructor;
        active: BooleanConstructor;
        value: StringConstructor;
        placeholder: StringConstructor;
        size: StringConstructor;
    };
    onInputClick: () => void;
    onInputBlur: () => void;
    selectedIndex: number;
    onItemClick: (item: any, index: any) => void;
    _refInput: any;
    render(props: any): JSX.Element;
}
export {};
