angular.module('app').factory('cats', function() {
    return [
        {
            'id': 1,
            'name': 'Cat Tommy',
            'date': 1444818444256,
            'source': "http://www.thetimes.co.uk/tto/multimedia/archive/00309/108787995_309592c.jpg",
            'likes' : 0
        },
        {
            'id': 2,
            'name': 'Cat Bob',
            'date': 1444818472256,
            'source': "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
            'likes' : 0
        },
        {
            'id': 3,
            'name': 'Cat Rob',
            'date': 1444818470256,
            'source': "http://www.vetprofessionals.com/catprofessional/images/home-cat.jpg",
            'likes' : 0
        },
        {
            'id': 4,
            'name': 'Black Cat',
            'date': 1444818479256,
            'source': "http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg",
            'likes' : 0
        },
        {
            'id': 5,
            'name': 'Crazy Cat',
            'date': 1444818400256,
            'source': "http://i.telegraph.co.uk/multimedia/archive/02127/cat1_2127010i.jpg",
            'likes' : 0
        }
    ];
});