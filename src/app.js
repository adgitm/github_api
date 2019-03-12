import $ from 'jquery';
import Rx from 'rxjs/Rx';

const numbers = [1,3,4,5] ;

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed')
    }
)

const posts = [
    {title: 'postone', body: 'thisis body'},
    {title: 'tow', body: 'this two'}
];

const posts$ = Rx.Observable.from(posts);


posts$.subscribe(
    v => {
        console.log(v);
        $('#posts').append('<li>'+ v.title + '</li>');

    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('completed')
    }
)