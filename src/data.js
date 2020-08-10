import whiteTShirt from './images/whiteTShirt.jpg';
import thankfulRed from './images/thankfulRed.jpg';
import starMug from './images/starMug.jpg';
import patternMug from './images/patternMug.jpg';
import brownBookbag from './images/brownBookbag.jpg';
import whiteBookbag from './images/whiteBookbag.jpg';
import imageBio from './images/bio.jpg';

export const products = [
    {
        sys: {
            id: "1"
        },
        fields: {
            title: "white t-shirt",
            parameter: "white-t-shirt",
            img: whiteTShirt,
            price: 20,
            quantity: 0,
            total: 0,
            size: [
                "small",
                "medium",
                "large",
                "x-large"
            ],
            inCart: false
        }
    },
    {
        sys: {
            id: "2"
        },
        fields: {
            title: "red thankful t-shirt",
            parameter: "red-thankful-t-shirt",
            img: thankfulRed,
            price: 20,
            quantity: 0,
            total: 0,
            size: [
                "small",
                "medium",
                "large",
                "x-large"
            ],
            inCart: false
        }
    },
    {
        sys: {
            id: "3"
        },
        fields: {
            title: "star mug",
            parameter: "star-mug",
            img: starMug,
            price: 10,
            quantity: 0,
            total: 0,
            inCart: false
        }
    },
    {
        sys: {
            id: "4"
        },
        fields: {
            title: "white pattern mug",
            parameter: "white-pattern-mug",
            img: patternMug,
            price: 10,
            quantity: 0,
            total: 0,
            inCart: false
        }
    },
    {
        sys: {
            id: "5"
        },
        fields: {
            title: "brown backpack",
            parameter: "brown-backpack",
            img: brownBookbag,
            price: 40,
            quantity: 0,
            total: 0,
            inCart: false
        }
    },
    {
        sys: {
            id: "6"
        },
        fields: {
            title: "white backpack",
            parameter: "white-backpack",
            img: whiteBookbag,
            price: 40,
            quantity: 0,
            total: 0,
            inCart: false
        }
    }
]

export const bio = [
    {
        sys: {
            id: 1
        },

        fields: {
            image: imageBio,
            title: "About Custom Creations",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo risus, vestibulum vel dui non, congue varius magna. Sed vel lacinia eros. Mauris pulvinar feugiat ante fermentum molestie"
        }
    }
]