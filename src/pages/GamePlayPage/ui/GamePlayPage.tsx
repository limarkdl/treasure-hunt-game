import { useTranslation } from 'react-i18next';


const HGapStyle = { marginBottom: '10px' };
const PMarginLStyle = { marginBottom: '20px', marginLeft: '10px' };

const GamePlayPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', paddingBottom: '40px',
        }}
        >
         GAMEPLAY
        </div>
    );
};

export default GamePlayPage;
