import { Observable, Subscriber } from "rxjs";

const obervableAlfa$ = new Observable(Subscriber => {
    Subscriber.next(1);
    Subscriber.next(2);
    Subscriber.complete()
    Subscriber.next(3);

});

const observador = {
    next: (value) => {
        console.log(`recived Value ${value}`);
    },
    complete: () => {
        console.log("Complete");
    },
    error: (error) => {
        console.log('Error: ', error);
    }
}

obervableAlfa$.subscribe(observador);