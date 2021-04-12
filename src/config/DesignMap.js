import CircleESTD from '../components/designs/CircleESTD';
import SimpleESTD from '../components/designs/SimpleESTD';
import SimpleCircle from '../components/designs/SimpleCircle';
import Brush from '../components/designs/Brush';
import AZ1 from '../components/designs/AZ1';
import AZ2 from '../components/designs/AZ2';
import AZ3 from '../components/designs/AZ3';
import BannerBold from '../components/designs/BannerBold';
import BannerBrush from '../components/designs/BannerBrush';
import Mask from '../components/designs/Mask';

export const DesignMap = {
  circleESTD: {
    component: CircleESTD,
    desc: 'Circle ESTD',
    twoColor: true,
  },
  bannerBold: {
    component: BannerBold,
    desc: 'Banner Bold',
    twoColor: true,
  },
  bannerBrush: {
    component: BannerBrush,
    desc: 'Banner Brush',
    twoColor: true,
  },
  az1: {
    component: AZ1,
    desc: 'AZ-1',
    twoColor: true,
  },
  simpleCircle: {
    component: SimpleCircle,
    desc: 'Simple Circle',
  },
  az2: {
    component: AZ2,
    desc: 'AZ-2',
  },
  az3: {
    component: AZ3,
    desc: 'AZ-3',
    twoColor: true,
  },
  brush: {
    component: Brush,
    desc: 'Brush',
    twoColor: true,
  },
  simpleESTD: {
    component: SimpleESTD,
    desc: 'Simple ESTD',
  },
  mask: {
    component: Mask,
    desc: 'Mask',
    twoColor: true,
  },
}

export default DesignMap;