import { Component, OnInit } from '@angular/core';
import customerDetails from '../../customerDetails.json';

interface DataDetails {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  aboutMe: string;
}

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.scss'],
})
export class UsersdetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  details: DataDetails[] = customerDetails;
}
