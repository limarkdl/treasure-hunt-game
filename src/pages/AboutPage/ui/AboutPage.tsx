import { useTranslation } from 'react-i18next';
import { Separator } from 'shared/ui/Separator';
import { FaGithub } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa6';
import {stringifyRequest} from "mini-css-extract-plugin/types/utils";

/* eslint-disable */

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', paddingBottom: '40px', textAlign: 'center'
        }}
        >
            <h1>{t('AboutPageTitle')}</h1>
            <Separator full={true} />
            <p style={{marginBottom: '50px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>{t('AboutPageContent')}</p>


            <div style={{
                display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center',
            }}
            >
                <h3>Created by:</h3>
                <a
                    target="_blank"
                    href="https://github.com/limarkdl/treasure-hunt-game"
                    rel="noreferrer"
                    style={{ width: 'fit-content' }}
                >
                    <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <FaGithub size="24px" />
                    &nbsp;@limarkdl/treasure-hunt-game
                    </span>
                </a>
                <a
                    target="_blank"
                    href="mailto:ikostin@uclan.ac.uk"
                    rel="noreferrer"
                    style={{ width: 'fit-content' }}
                >
                    <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                        <FaUserGraduate size="24px" />
                    &nbsp;ikostin@uclan.ac.uk
                    </span>
                </a>
            </div>

        </div>
    );
};

export default AboutPage;
