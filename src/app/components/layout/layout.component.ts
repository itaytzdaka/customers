import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public customersData = [
    {
      name: "עמית וטל (לברדור)",
      ticking: "אביטל",
      teamLeader: "עינב",
      job: 25,
      hoursRightTillNow: 0,
      hoursUsed: 17.84,
      percentUsed: 0,
      note: "כניסה 16/12, ענבר 3.31",
      hoursException: 0
    },
    {
      name: "AKT",
      ticking: "אירה",
      teamLeader: "ליסה",
      job: 100,
      hoursRightTillNow: 0,
      hoursUsed: 110.3,
      percentUsed: 0,
      note: "מסיימים ב-15/2/2022",
      hoursExeption: 0
    }
  ];


  public dateNow: any;
  public daysInMonth: any;
  public workDaysTillNow: number=18;
  public fullWorkTillNow: number=this.workDaysTillNow*8;

  constructor() { }



  ngOnInit(): void {
    this.dateNow=new Date();
    this.daysInMonth=new Date(this.dateNow.getFullYear(), this.dateNow.getMonth()+1, 0).getDate();
    this.updateCustomers();


  }

  public updateCustomers(){
    this.customersData.forEach(customer => {
      customer.hoursRightTillNow=customer.job/100*this.fullWorkTillNow;
      customer.percentUsed=+(customer.hoursUsed/customer.hoursRightTillNow*100).toString().slice(0,5);
      customer.hoursException=customer.hoursUsed-customer.hoursRightTillNow;
    });
  }

}
