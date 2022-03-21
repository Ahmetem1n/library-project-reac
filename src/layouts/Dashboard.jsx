import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import BookCategoryAdd from "../pages/BookCategoryAdd";
import BookAdd from "../pages/BookAdd";
import BookCategoryDetail from "../pages/BookCategoryDetail";
import BookCategoryList from "../pages/BookCategoryList";
import BookDetail from "../pages/BookDetail";
import BookList from "../pages/BookList";
import StudentDetail from "../pages/StudentDetail";
import StudentList from "../pages/StudentList";
import TakeDetail from "../pages/TakeDetail";
import TakeList from "../pages/TakeList";
import Menuler from "./Menuler";
import StudentAdd from "../pages/StudentAdd";
import TakeBook from "../pages/TakeBook";
import GiveBook from "../pages/GiveBook";
import LateList from "../pages/LateList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Menuler />
        </Grid.Column>
        <Grid.Column width={12}>
          
          <Route exact path="/book_category_add" component={BookCategoryAdd} />
          <Route exact path="/book_category" component={BookCategoryList} />
          <Route exact path="/book_category/:bookCategoryId" component={BookCategoryDetail} />

          <Route exact path="/book_add" component={BookAdd} />
          <Route exact path="/book" component={BookList} />
          <Route exact path="/book/:bookId" component={BookDetail} />
          
          <Route exact path="/student_add" component={StudentAdd} />
          <Route exact path="/student" component={StudentList} />
          <Route exact path="/student/:studentId" component={StudentDetail} />
          
          <Route exact path="/taking_book" component={TakeList} />
          <Route exact path="/taking_book_late_list" component={LateList} />
          <Route exact path="/taking_book_take" component={TakeBook} />
          <Route exact path="/taking_book_give" component={GiveBook} />
          <Route exact path="/taking_book/:takingBookId" component={TakeDetail} />
        </Grid.Column>
      </Grid>
    </div>
  );
}
