import { Component, OnInit } from '@angular/core';

import { GitDBService } from 'src/app/services/git-db.service';
import { DbAjaxResponse } from 'src/app/models/db-ajax-response';

// import { Person } from 'src/app/models/persons';
// import { Star } from 'src/app/models/stars';

@Component({
  selector: 'app-db-json',
  templateUrl: './db-json.component.html',
  styleUrls: ['./db-json.component.css']
})
export class DbJsonComponent implements OnInit {

  constructor(public mySrv:GitDBService) { }
  // students:Person[]=[]
  // techers:Person[]=[]
  // stars:Star[]=[]


  fullResponse:DbAjaxResponse

  ngOnInit(): void {
    this.mySrv.httpGetType<DbAjaxResponse>
    ("https://raw.githubusercontent.com/nisimben/DB/master/db.json")
    .subscribe(_dbAjaxRes =>{
      this.fullResponse = _dbAjaxRes
    })
  }

}
