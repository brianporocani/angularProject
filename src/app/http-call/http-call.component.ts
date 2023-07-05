import { Component } from '@angular/core';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent {
  dataDisplay: any[] = [
    {
      "createdAt": "2023-06-04T07:46:41.977Z",
      "message": "message 1",
      "id": "1"
    },
    {
      "createdAt": "2023-03-03T15:21:21.254Z",
      "message": "message 2",
      "id": "2"
    },
    {
      "createdAt": "2023-05-11T14:58:57.530Z",
      "message": "message 3",
      "id": "3"
    },
    {
      "createdAt": "2023-03-31T10:50:29.828Z",
      "message": "message 4",
      "id": "4"
    },
    {
      "createdAt": "2022-12-25T02:14:08.442Z",
      "message": "message 5",
      "id": "5"
    }
  ];
}
