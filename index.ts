import './style.css';
import { logToDiv } from './display';
import {
  map,
  fromEvent,
  auditTime,
  debounceTime,
  throttleTime,
  tap,
} from 'rxjs';

const searchInputElement = document.getElementById('search-input');
//Emit event on every 'keyup'
const searchKeyUpObservable = fromEvent(searchInputElement, 'keyup').pipe(
  map((event) => event.target?.value)
);

searchKeyUpObservable
  .pipe(
    auditTime(1000), //search term for typeahead suggestions
    tap((value) => logToDiv('auditTimeLog', value))
  ).subscribe();
  searchKeyUpObservable
  .pipe(
    debounceTime(1000), //search term for typeahead suggestions
    tap((value) => logToDiv('debounceTimeLog', value))
  ).subscribe();
  searchKeyUpObservable
  .pipe(
    throttleTime(1000), //search term for typeahead suggestions
    tap((value) => logToDiv('throttleTimeLog', value))
  ).subscribe();
