import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { SettingsForm } from '../SettingsForm/SettingsForm';
import cls from './SettingsModal.module.css'

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.settingsModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <SettingsForm />
    </Modal>
);
