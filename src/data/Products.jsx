import img1 from '../assets/LatestProduct/img1.png';
import img2 from '../assets/LatestProduct/img2.png';
import img3 from '../assets/LatestProduct/img3.png';
import img4 from '../assets/LatestProduct/img4.png';
import img5 from '../assets/LatestProduct/img5.png';
import img6 from '../assets/LatestProduct/img6.png';
import img7 from '../assets/LatestProduct/img7.png';
import img8 from '../assets/LatestProduct/img8.png';
import img9 from '../assets/LatestProduct/img9.png';


export const allProducts = [
    // From Featured Products
    { id: 1, name: 'Cantilever chair', code: 'Y523201', price: '$42.00', image: img1 },
    { id: 2, name: 'Bulleon chair', code: 'Y523202', price: '$55.00', image: img2 },
    { id: 3, name: 'Dolly chair', code: 'Y523203', price: '$38.00', image: img3 },
    { id: 4, name: 'Stylish chair', code: 'Y523204', price: '$120.00', image: img4 },

    { id: 6, name: 'Comfort Chair A', price: '$42.00', image: img5 },
    { id: 7, name: 'Comfort Chair B', price: '$42.00', image: img9 }, // Using img9 for variety
    { id: 8, name: 'Comfort Chair C', price: '$42.00', image: img7 }, // Using img7 for variety
    { id: 9, name: 'Comfort Chair D', price: '$42.00', image: img8 }, // Using img8 for variety
    { id: 10, name: 'Comfort Chair E', price: '$42.00', image: img1 }, // Using existing image for example

    { id: 11, name: 'Executive Seat chair', newPrice: '$32.00', oldPrice: '$52.00', image: img2 },
    { id: 12, name: 'Cantilever chair 2', newPrice: '$26.00', oldPrice: '$42.00', image: img1 },
    { id: 13, name: 'Simple chair', newPrice: '$26.00', oldPrice: '$42.00', image: img4 },
    { id: 14, name: 'Modern chair', newPrice: '$26.00', oldPrice: '$42.00', image: img5 },

    // Add more products as needed
    { id: 15, name: 'Wooden Desk', price: '$150.00', image: img6 },
    { id: 16, name: 'Minimalist Lamp', price: '$25.00', image: img7 },
];