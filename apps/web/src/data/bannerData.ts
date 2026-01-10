export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  altText: string;
}

export const bannerData: Banner[] = [
  {
    id: '1',
    title: 'New Summer Collection',
    subtitle: 'Discover our exclusive summer essentials',
    ctaText: 'Shop Now',
    ctaLink: '/shop',
    imageUrl: '/images/banner-summer.jpg',
    altText: 'Summer collection featuring elegant dresses and accessories'
  },
  {
    id: '2',
    title: 'Limited Edition',
    subtitle: 'Luxury pieces crafted for the modern woman',
    ctaText: 'Explore',
    ctaLink: '/collections/limited-edition',
    imageUrl: '/images/banner-limited.jpg',
    altText: 'Luxury clothing and accessories'
  },
  {
    id: '3',
    title: 'Effortless Elegance',
    subtitle: 'Timeless designs for every occasion',
    ctaText: 'View Collection',
    ctaLink: '/collections/elegant',
    imageUrl: '/images/banner-elegant.jpg',
    altText: 'Elegant clothing for various occasions'
  }
];