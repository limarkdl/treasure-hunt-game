import Skeleton from 'react-loading-skeleton';
import { Separator } from 'shared/ui/Separator';
import 'react-loading-skeleton/dist/skeleton.css';
import clsNavbar from 'widgets/Navbar/ui/Navbar.module.css';
import clsSidebar from 'widgets/Sidebar/ui/Sidebar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

export const RegularPageSkeleton = () => (
    <div className="page-container">
        <div className="page-wrapper">
            <Skeleton height={37} width={200} />
            <Separator />
        </div>
    </div>
);

export const GlobalAppSkeleton = () => (
    <div style={{
        height: '100vh', width: '100vw',
        // animation: 'breathe 4s ease-in-out infinite'
    }}
    >
        <div className={clsNavbar.Navbar}>
            <div className={clsNavbar.name}>
            </div>

        </div>

    </div>
);
