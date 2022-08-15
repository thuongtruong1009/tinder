import HomeComponent from '../../components/Home/HomeComponent';
import { NextPageWithLayout } from '../../types/global';

const HomePage: NextPageWithLayout = () => {
    return <HomeComponent strangeFriends={[]} />;
};

export default HomePage;
