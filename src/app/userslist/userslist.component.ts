import { Component, OnInit } from '@angular/core';
import customerList from '../../customerList.json';

interface DataList {
  id: number;
  username: string;
}

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss'],
})
export class UserslistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list: DataList[] = customerList;
}
