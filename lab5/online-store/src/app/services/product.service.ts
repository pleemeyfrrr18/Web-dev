import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[] = [
    {id: 1, name: 'Smartphones'},
    {id: 2, name: 'Laptops'},
    {id: 3, name: 'Game Consoles'},
    {id: 4, name: 'Gadgets'}
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17 Pro',
      description: 'Latest Apple smartphone.',
      price: 852047,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 0,
      categoryId: 1
    }, 
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S25 Ultra',
      description: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      price: 558471,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi 15T',
      description: 'Xiaomi 15T 12 ГБ/256 ГБ золотистый — это мощный и стильный смартфон с передовыми технологиями и впечатляющими характеристиками.',
      price: 500000,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc6/p56/86336893.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pc6/p56/86336893.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pe2/p56/86336894.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p1b/p57/86336896.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-15t-12-gb-256-gb-zolotistyi-podarok-152133749/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
      price: 330940,
      rating: 4.67,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy S24 Ultra',
      description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ черный',
      price: 558471,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
      likes: 0,
      categoryId: 1
    },

    // Laptops
    {
      id: 1,
      name: 'Apple MacBook Air 13 2020',
      description: 'Первый чип, разработанный специально для Mac.',
      price: 439982,
      rating: 4.76,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 2,
      name: 'ThundeRobot 911S Core D',
      description: 'Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей.',
      price: 496989,
      rating: 4.31,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13 2025',
      description: 'Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность.',
      price: 523993,
      rating: 3.98,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 5,
      name: 'ASUS TUF A15 FA506"',
      description: 'TUF Gaming A15 — это игровой ноутбук, созданный для серьёзных игр и отличающийся новым стильным дизайном.',
      price: 455540,
      rating: 4.32,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc9/p0a/72613237.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pc9/p0a/72613237.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pc9/p0a/72613237.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7c/p07/72613228.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/asus-tuf-a15-fa506-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00je0-148010487/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 5,
      name: 'Apple MacBook Air 13 2020',
      description: 'Первый чип, разработанный специально для Mac.',
      price: 439982,
      rating: 4.76,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 0,
      categoryId: 2
    },

    // Game Consoles
    {
      id: 1,
      name: 'Sony PlayStation 5 Slim',
      description: 'Иммерсивный игровой опыт в тонком форм-факторе. Приготовьтесь встречать новую PlayStation 5 Slim.',
      price: 302293,
      rating: 4.49,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 2,
      name: 'Nintendo Switch OLED',
      description: 'NINTENDO ПРЕДСТАВЛЯЕТ КОНСОЛЬ NINTENDO SWITCH (OLED-МОДЕЛЬ) С КРАСОЧНЫМ 7-ДЮЙМОВЫМ OLED-ЭКРАНОМ!',
      price: 172400,
      rating: 4.67,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hcf/hc0/64191557926942.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h83/hb5/64191561498654.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 3,
      name: 'Sony PlayStation 4 Slim 1Tb',
      description: 'Sony PlayStation 4 Slim 1Tb + геймпад + UFC 4 + Mortal Kombat 11 Ultimate + GTA V + FC 24',
      price: 189999,
      rating: 4.99,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/pcf/7086101.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pbb/pcf/7086101.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf3/h90/63769888555038.jpg?format=gallery-large','https://i5.walmartimages.com/seo/PlayStation-4-Slim-1TB-Console_06a3ebf2-055a-45e8-9a23-c01619ba9d25.6117e30f8548ce2e39e3426f3277cf66.jpeg'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-4-slim-1tb-geimpad-ufc-4-mortal-kombat-11-ultimate-gta-v-fc-24-129675197/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 4,
      name: 'Игровая приставка Dendy G5s',
      description: 'Игровая приставка Dendy G5s + джойстик + 500 встроенных иг',
      price: 6998,
      rating: 4.21,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h30/86375700168734.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc8/h30/86375700168734.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hc7/h99/86375700201502.png?format=gallery-medium','https://i5.walmartimages.com/seo/PlayStation-4-Slim-1TB-Console_06a3ebf2-055a-45e8-9a23-c01619ba9d25.6117e30f8548ce2e39e3426f3277cf66.jpeg'],
      link: 'https://kaspi.kz/shop/p/dendy-g5s-dzhoistik-500-vstroennyh-igr-107092951/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 5,
      name: 'Sony Playstation 4 Pro 1Tb черный',
      description: 'Игровая приставка Sony Playstation 4 Pro 1Tb черный + GTA V +MK 11 + Call of Duty + UFC 4 + геймпадг',
      price: 229990,
      rating: 4.37,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h83/64407282417694.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hfa/h83/64407282417694.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hd0/h51/64407286284318.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he3/h90/64407288643614.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-4-pro-1tb-chernyi-gta-v-mk-11-call-of-duty-ufc-4-geimpad-103627528/?c=750000000',
      likes: 0,
      categoryId: 3
    },

    // Gadgets
    {
      id: 1,
      name: 'Apple Watch SE',
      description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      price: 139898,
      rating: 4.19,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 2,
      name: 'Apple Watch Series 10',
      description: 'Apple Watch Series 10 предлагают еще больше возможностей: увеличенный экран, тонкий изящный и прочный корпус, быстрая зарядка и новые возможности.',
      price: 209147,
      rating: 4.42,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/p77/3341806.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p0c/p77/3341806.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p29/p77/3341807.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p45/p77/3341808.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-m-l-46-mm-chernyi-128572958/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 3,
      name: ' Зарядное устройство Apple 18W USB-C',
      description: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
      price: 6083,
      rating: 4.73,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h16/h93/64377062064158.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 4,
      name: 'Мышь Logitech G102 Lightsync черный',
      description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью.',
      price: 5990,
      rating: 4.61,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hea/h93/64119547428894.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 5,
      name: 'Клавиатура Ajazz AK820 серый',
      description: 'Клавиатура Ajazz AK820 — идеальный выбор для геймеров и профессионалов, которые ценят комфорт и стиль в работе.',
      price: 16000,
      rating: 4.39,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p3b/24830377.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pcf/p3b/24830377.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p3a/p93/21403995.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p56/p93/21403996.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-seryi-114228960/?c=750000000',
      likes: 0,
      categoryId: 4
    },
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
