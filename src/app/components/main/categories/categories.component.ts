
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers:[CategoryService]
})
export class CategoriesComponent implements OnInit {

  categories:Category[];

  selectedCategory:Category=null;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  displayAll:boolean = true;

  selectCategory(item?: Category) {

    if (item) {
      this.selectedCategory = item;
      this.displayAll=false;
    }
    else {
      this.selectedCategory = null;
      this.displayAll=true;
    }



  }


}
