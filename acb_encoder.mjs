import {Readable} from 'stream';

import {encodeAcb} from '@atesgoral/acb';

const book = {
    "id": 9009,
    "title": "CAMD RISO Inks",
    "colorNamePrefix": "",
    "colorNamePostfix": "",
    "description": "CAMD RISO Inks",
    "pageSize": 7,
    "pageKey": 3,
    "colorModel": "Lab",
    "colors":
    [
        {
            "name": "BLACK",
            "code": "7e5fb5",
            "components":
            [
                12,
                2,
                0
            ]
        },
        {
            "name": "YELLOW",
            "code": "f69b6a",
            "components":
            [
                90,
                1,
                90
            ]
        },
        {
            "name": "SUNFLOWER",
            "code": "b7eea6",
            "components":
            [
                81,
                17,
                75
            ]
        },
        {
            "name": "BRIGHT RED",
            "code": "821f9f",
            "components":
            [
                62,
                46,
                33
            ]
        },
        {
            "name": "COPPER",
            "code": "92fa24",
            "components":
            [
                63,
                31,
                59
            ]
        },
        {
            "name": "GREEN",
            "code": "f91d7b",
            "components":
            [
                62,
                -46,
                28
            ]
        },
        {
            "name": "TURQUOISE",
            "code": "57ae0c",
            "components":
            [
                70,
                -39,
                -3
            ]
        },
        {
            "name": "CORNFLOWER",
            "code": "95dd1d",
            "components":
            [
                72,
                -17,
                -31
            ]
        },
        {
            "name": "BLUE",
            "code": "28fbe4",
            "components":
            [
                54,
                -31,
                -49
            ]
        },
        {
            "name": "ORCHID",
            "code": "873772",
            "components":
            [
                63,
                25,
                -21
            ]
        },
        {
            "name": "FLUORESCENT ORANGE",
            "code": "dd1b5d",
            "components":
            [
                66,
                54,
                26
            ]
        },
        {
            "name": "FLUORESCENT PINK",
            "code": "1d825b",
            "components":
            [
                61,
                75,
                -14
            ]
        }
    ]
};

const readable = Readable.from(encodeAcb(book));
readable.pipe(process.stdout);