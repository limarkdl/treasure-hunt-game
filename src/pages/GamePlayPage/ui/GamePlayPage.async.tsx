import { lazy, Suspense } from 'react';
import GamePlayPageSkeleton from './GamePlayPage.skeleton';
import {PageLoader} from "shared/ui/PageLoader";

const GamePlayPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./GamePlayPage')), 800);
}));

const GamePlayWithSkeleton = () => (
    <Suspense fallback={<PageLoader />}>
        <GamePlayPageAsync />
    </Suspense>
);

export default GamePlayWithSkeleton;
