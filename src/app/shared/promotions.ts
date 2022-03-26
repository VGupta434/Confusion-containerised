import { Promotion } from './promotion';

export const PROMOTIONS: Promotion[] = [
    {
      id: '0',
      name: 'Weekend Grand Buffet',
      image: '/assets/images/buffet.png',
      label: 'New',
      price: '19.99',
      featured: true,
      // tslint:disable-next-line:max-line-length
      description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
    },
    {
      id: '1',
      name: 'Arnab-Vivek-Pritam-Sausage',
      image: '/assets/images/chicken-sausage.jpg',
      label: 'New',
      price: '69.9',
      featured: true,
      // tslint:disable-next-line:max-line-length
      description: 'Featuring mouthwatering 6 inch sausages, made with selected five different spices. Approved by our lovely Chef.'
    }
  ];
