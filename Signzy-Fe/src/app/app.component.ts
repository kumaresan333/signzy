import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  excelData: any = {};
  // excelData = {"_id":"5b41f1ef4d9636bc63717ec5","id":1,"data":[
  //   {"row_id":1,"data":
  //   {"a":"1","b":"2","c":"3","d":"4","e":"5","f":"5","g":"7","h":"6","i":"8","j":"9","k":"0","l":"1","m":"2","n":"3","o":"4","p":"5","q":"6","r":"7","s":"8","t":"9","u":"9","v":"1","w":"2","x":"3","y":"4","z":"5"}
  //   }
  // ]};
  constructor(public http: Http) {

  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http.get('http://172.20.10.2:9000/getdata/1').subscribe((res) => {
    this.excelData = res.json();
    const no_of_rows = this.excelData.data.length;
    for (let i = 1; i <= 15; i++) {
      const row_id = i + no_of_rows;
      this.excelData.data.push({
        "row_id": row_id, "data":
        { "a": "", "b": "", "c": "", "d": "", "e": "", "f": "", "g": "", "h": "", "i": "", "j": "", "k": "", "l": "", "m": "", "n": "", "o": "", "p": "", "q": "", "r": "", "s": "", "t": "", "u": "", "v": "", "w": "", "x": "", "y": "", "z": "" }
      });

    }
    console.log(this.excelData);
    });
  }
  updateData() {
    console.log(this.excelData);
    this.http.put('http://172.20.10.2:9000/getdata/1', this.excelData).subscribe((res) => {
    console.log(res.json());
    });
  }
  
}
