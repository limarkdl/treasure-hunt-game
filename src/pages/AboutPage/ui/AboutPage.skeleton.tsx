import Skeleton from 'react-loading-skeleton';
import { Separator } from 'shared/ui/Separator';
import 'react-loading-skeleton/dist/skeleton.css';
import cls from "pages/MainPage/ui/MainPage.module.css";

const AboutPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Skeleton height={37} width={275}/>
            <Separator full />
            <Skeleton count={5} width={325} />
            <div style={{marginBottom: '50px'}}></div>
        </div>
        <div style={{
            display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center',
        }}
        >
            <Skeleton width={150} height={24} />
            <Skeleton width={275} count={2} />
        </div>

    </div>
);

export default AboutPageSkeleton;
