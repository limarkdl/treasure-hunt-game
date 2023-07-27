import Skeleton from 'react-loading-skeleton';
import { Separator } from 'shared/ui/Separator';
import 'react-loading-skeleton/dist/skeleton.css';

const GamePlayPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <Skeleton height={24} width={50} />

    </div>
);

export default GamePlayPageSkeleton;
