import { fromEvent } from 'rxjs';

export const logToDiv = (id, value) => {
  let displayDiv = document.getElementById(id);
  if (displayDiv?.firstElementChild != null) {
    displayDiv.insertBefore(logItem(value), displayDiv.firstElementChild);
  } else {
    displayDiv.appendChild(logItem(value));
  }
};

const logItem = (value) => {
  var itemSpan = document.createElement('p');
  itemSpan.setAttribute('class', 'logItem');
  itemSpan.textContent = value;
  return itemSpan;
};
