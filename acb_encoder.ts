import {Readable} from 'stream';
import {encodeAcb} from '@atesgoral/acb';
import type {ColorBook} from '@atesgoral/acb';

const book: ColorBook = {
  id: 9010, // ID can be anything that does not conflict with an existing color book 
            // that exists in Photoshop's color book folder.
            // This value is Todd Linkner's id for his Riso Ink Color Book + 1
  title: 'CAMD RISO Inks 2025',
  description: 'RISO Ink colors in the CAMD Print center, Fall 2025',
  colorNamePrefix: '',
  colorNamePostfix: '',
  pageSize: 5, // five colors per page
  pageKey: 0, // first color is the page key (zero indexed)
  colorModel: 'Lab',
  colors: [
    // I chose to make code = hex code value for the color
    // The order of these colors is the order they are displayed in the colorbook
    {name: 'BRIGHT RED', code: 'f15060', components: [62, 46, 33]},
    {name: 'FLUORESCENT ORANGE', code: 'ff7477', components: [66, 54, 26]},
    {name: 'SUNFLOWER', code: 'ffb511', components: [81, 17, 75]},
    {name: 'YELLOW', code: 'ffe800', components: [90, 1, 90]},
    {name: 'GREEN', code: '00a95c', components: [62, -46, 28]},
    {name: 'TURQUOISE', code: '00aa93', components: [70, -39, -3]},
    {name: 'SEA FOAM', code: '62c2b1', components: [72, -33, -1]}, // added Oct. 2025
    {name: 'CORNFLOWER', code: '62a8e5', components: [72, -17, -31]},
    {name: 'BLUE', code: '0078bf', components: [54, -31, -49]},
    {name: 'ORCHID', code: 'bb76cf', components: [63, 25, -21]},
    {name: 'FLUORESCENT PINK', code: 'ff48b0', components: [61, 75, -14]},
    {name: 'LIGHT MAUVE', code: 'e6b5c9', components: [79, 21, -3]}, // added Oct. 2025
    {name: 'CHARCOAL', code: 'a5aaa8', components: [69, -2, 0]}, // added Oct. 2025
    {name: 'BLACK', code: '000000', components: [12, 2, 0]},
    {name: 'COPPER', code: 'bd6439', components: [63, 31, 59]},
  ]
};

const readable = Readable.from(encodeAcb(book));
readable.pipe(process.stdout);