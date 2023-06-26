import config from '~/config';
//Layout
import { HeaderOnly } from '~/layouts';
//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// publicRoutes dành cho những trang không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile }, //dynamic route
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// privateRoutes dành cho những trang phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
