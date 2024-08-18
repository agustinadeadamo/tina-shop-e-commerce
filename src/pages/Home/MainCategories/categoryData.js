import ImageCard3 from '../../../images/hat-photo.jpg';
import ImageCard1 from '../../../images/small-purse.jpg';
import ImageCard2 from '../../../images/sunglasses-banner.jpg';

const categories = [
  {
    id: 'card-data-1',
    title: 'Handbags',
    subtitle: "Don't Miss Out on Our Exclusive Summer Sale!",
    buttonCopy: 'Explore the Handbags',
    image: ImageCard1,
    alt: 'Sunglasses Category',
    className: 'md:col-span-1 md:row-span-3',
    url: '/store',
  },
  {
    id: 'card-data-2',
    title: 'Purses',
    subtitle: "Don't Miss Out on Our Exclusive Summer Sale!",
    buttonCopy: 'Explore the Sunglasses',
    image: ImageCard2,
    alt: 'Sunglasses Category',
    className: 'md:col-span-1 md:row-span-3',
    url: '/store',
  },
  {
    id: 'card-data-3',
    title: 'Hats',
    subtitle: 'Limited Time Offer - Shop Now and Save Big!',
    image: ImageCard3,
    alt: 'Hat Category',
    className: 'md:col-span-1 md:row-span-3',
    buttonCopy: 'Explore the Hats',
    url: '/store',
  },
];

export default categories;
