import ImageCard3 from '../../../images/sunglasses.jpg';
import ImageCard2 from '../../../images/trainers.jpg';
import ImageCard4 from '../../../images/hat-photo.jpg';
import ImageCard1 from '../../../images/small-purse.jpg';

export const cardsData = [
  {
    id: 'card-data-1',
    title: 'Get 40%',
    subtitle: "Don't Miss Out on Our Exclusive Summer Sale!",
    buttonCopy: 'Shop Now',
    image: ImageCard1,
    alt: 'Sunglasses discount',
    className: 'md:col-span-1 md:row-span-4',
    position: 'top-0 left-0',
    url: '/store',
  },
  {
    id: 'card-data-2',
    buttonCopy: 'Explore Now',
    image: ImageCard2,
    alt: 'Trainers discount',
    className: 'md:col-span-1 md:row-span-2',
    position: 'bottom-0 left-0',
    url: '/store',
  },
  {
    id: 'card-data-3',
    title: 'Get 70%',
    subtitle: 'Limited Time Offer - Shop Now and Save Big!',
    image: ImageCard4,
    alt: 'Hat discount',
    className: 'md:col-span-1 md:row-span-4',
    position: 'top-0 left-0',
    buttonCopy: 'See Collection',
    url: '/store',
  },
  {
    id: 'card-data-4',
    buttonCopy: 'Shop Now',
    image: ImageCard3,
    alt: 'Small purse discount',
    className: 'md:col-span-1 md:row-span-2',
    position: 'top-0 right-0',
    url: '/store',
  },
];

export const animationsData = [
  {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
  },
  {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
  },
  {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
  },
  {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
  },
];
