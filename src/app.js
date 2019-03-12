import $ from 'jquery';
import Rx from 'rxjs/Rx';
import { resolve } from 'path';

const mypromise = new Promise((resolve,reject) => {

    console.log('creating promise');
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});

function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'jsonp'
    }).promise();
}

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe( x => {
    Rx.Observable.fromPromise(getUser(x.target.value))
    .subscribe(x => {
        console.log(x.data);
        $('#name').text(x.data.name);
        $('#blog').text(x.data.blog)
        $('#repos').text('public repos  ' + x.data.public_repos)
    })

})


