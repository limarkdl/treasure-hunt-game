import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import Logo from 'shared/assets/LOGO.svg';
import cls from './Navbar.module.css';

import {SettingsModal} from "features/GameSettings";
import {LuSettings} from "react-icons/lu";

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isSettingsModal, setIsSettingsModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsSettingsModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsSettingsModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.name}>
                    {/* @ts-ignore */}
                    <Logo style={{height: '80%'}}/>
                &nbsp;
                <h4 style={{fontStyle: 'italic'}}>άλφα</h4>
            </div>


            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
                style={{ marginRight: '-16px',display: 'flex' }}
            >
               <LuSettings size="24px" />
            </Button>


            <SettingsModal
                isOpen={isSettingsModal}
                onClose={onCloseModal}
            />
        </div>
    );
};

export default Navbar;
