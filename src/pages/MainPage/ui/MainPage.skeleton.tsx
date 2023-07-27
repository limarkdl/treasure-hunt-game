import Skeleton from 'react-loading-skeleton';
import { Separator } from 'shared/ui/Separator';
import 'react-loading-skeleton/dist/skeleton.css';
import cls from './MainPage.module.css';


const MainPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Skeleton height={37} width={275}/>
            <Separator full />
            <Skeleton height={24} width={325}/>
        </div>
        <div className={cls.ButtonsContainer}>
            <Skeleton width={125} height={38} />
            <br/>
            <Skeleton width={125} height={38} />
        </div>

    </div>
);

export default MainPageSkeleton;
