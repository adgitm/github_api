import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');
const input = $('#input');
const output = $('#output');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click') ;
btnStream$.subscribe( 
    (e) => {
        console.log(e.target.innerHTML);
    },
    (err) => {
        console.log(err);
    },
    () => {
        console.log('Completed');
    }
    );

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
    (e) => {
        console.log(e.currentTarget.value);
        output.append(e.target.value)
    },
    (err) => console.log(err) ,
    () => console.log('Completed')
);

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(
    (e) => {
        console.log(e.currentTarget.value);
        output.html('X: '+ e.clientX + ' Y: ' + e.clientY );
    },
    (err) => console.log(err) ,
    () => console.log('Completed')
);