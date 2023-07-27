import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './SettingsForm.module.css';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";
import AppLink from "shared/ui/AppLink/AppLink";
import {FaHome, FaInfoCircle} from "react-icons/fa";
import {FaGamepad} from "react-icons/fa6";
import {Separator} from "shared/ui/Separator";
interface LoginFormProps {
    className?: string;
}

export const SettingsForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.settingsForm, {}, [className])}>


            <div className={cls.Items}>

                <div className={cls.ItemsContainer}>
                    <div className={cls.Items}>
                        <AppLink className={cls.Links} to="/">
                            <div className={cls.IconContainer}>
                                <FaHome size="28px" />
                            </div>
                            <span>
                            {t('MainLink')}
                        </span>
                        </AppLink>
                        <AppLink className={cls.Links} to="/about">
                            <div className={cls.IconContainer}>
                                <FaInfoCircle size="24px" />
                            </div>
                            <span>
                            {t('AboutLink')}
                        </span>
                        </AppLink>
                        <AppLink className={cls.Links} to="/play">
                            <div className={cls.IconContainer}>
                                <FaGamepad size="24px" />
                            </div>
                            <span>
                            {t('Game')}
                        </span>
                        </AppLink>

                    </div>

                </div>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
