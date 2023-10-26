import { getHomeLayout } from '../components/layout/HomeLayout';
import NavTree from '../components/navigation/NavTree';
import { PageWithLayout } from '../types/PageWithLayout';


const Home: PageWithLayout = () => (
  <NavTree />
);

Home.getLayout = getHomeLayout;
export default Home;
