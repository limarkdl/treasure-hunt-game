import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Separator.module.css';

interface SeparatorProps {
    className?: string;
    full?: boolean;
}

export const Separator = ({ className, full }: SeparatorProps) => (
    <div className={classNames(cls.Separator, {[cls.Full]: full, [cls.Half]: !full, [className]: !!className})} />
);

export default Separator;
