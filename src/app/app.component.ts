import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmw7';
  columns = ["name", "sirname", "age"];
  allColumns = ["name", "sirname", "age"];
  toggle = false;
  data = [
    {
      name: "Mr. 1",
      age: 25,
      sirname: "Bond"
    },
    {
      name: "Ms. 2",
      age: 32,
      sirname: "Bond"
    }
  ];
  allData = this.data;
  criteria = "";

  public showHide(): void {
    if (!this.toggle) {
      this.columns = this.columns.filter((col) => col != "age");
    } else {
      this.columns = this.allColumns;
    }
    this.toggle = !this.toggle;
  }

  public filter(): void {
    this.data = this.allData.filter((row) => {
      let found = false;
      for (let key of this.columns) {
        console.log(key);
        if ((row[key] + "").includes(this.criteria)) {
          found = true;
        }
      }
      return found;
    });
  }
}
