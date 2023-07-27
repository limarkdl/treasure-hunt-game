import {useTranslation} from 'react-i18next';
import Button, {ButtonTheme} from 'shared/ui/Button/Button';
import {Separator} from 'shared/ui/Separator';
import cls from './MainPage.module.css';


const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{textAlign: 'center'}}>. Treasure Hunt .</h1>
            <Separator full />
            <h3 style={{textAlign: 'center', color: 'grey'}}>{t('Get ready for the treasure fight')}</h3>
            <div className={cls.ButtonsContainer}>
                <Button theme={ButtonTheme.PRIMARY} disabled>
                    {t('CONTINUE')}
                </Button>
                <br />
                <Button theme={ButtonTheme.PRIMARY}>
                    {t('NEW GAME')}
                </Button>

            </div>

        </div>
    );
};

export default MainPage;
