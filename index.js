/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from './libs/test.js'

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from 'lodash'
const source = $t.source(1)
$t.answer(1, async () => {
  // Your code goes here
  //console.log(source);
  let e;
  let expen;
  let inco;
  let restaurant;//to save the amount of the category "Restaurants"
  let Incom; //to save the amount of the category "Income"
  let Grocer;//to save the amount of the category "Groceries"
  let Ren;//to save the amount of the category "Rent"
  let target={};

  //Code to get the whole amount of expenses, incomes and the balance, to input in the object target
  for (let i in e=_.filter(source,{type:'expense'})){
    expen =_.sumBy(e,'amount'); 
  }
  for (let i in e=_.filter(source,{type:'income'})){
    inco =_.sumBy(e,'amount'); 
  }
  target.balance=inco-expen;
  target.income=inco;
  target.expenses=expen;
  target.byCategories={};
  

  //Code to get the whole amount of expenses, incomes and the balance, to input in the object  byCategories and later in the object target
  let byCategories={}
  for (let i in e=_.filter(source,{category:'Restaurants'})){
    restaurant =_.sumBy(e,'amount'); 
  }
  for (let i in e=_.filter(source,{category:'Income'})){
    Incom =_.sumBy(e,'amount'); 
  }
  for (let i in e=_.filter(source,{category:'Groceries'})){
    Grocer =_.sumBy(e,'amount'); 
  }
  for (let i in e=_.filter(source,{category:'Rent'})){
    Ren =_.sumBy(e,'amount'); 
  }
  target.byCategories.Restaurants=restaurant*-1;
  target.byCategories.Income=Incom;
  target.byCategories.Groceries=Grocer*-1;
  target.byCategories.Rent=Ren*-1;

  return target; 
})

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2)
$t.answer(2, async () => {
    // Your code goes here:
    // 1. Get ids: $source.getIds()
    // 2. Get text for every id: $source.getText(id)
    // 3. Return array of texts
    
    // arrays of the texts
    let ar1=[];
    let ar2=[];
    ar1=$source.getIds();
    ar2=$source.getText();

    console.log(ar1);
    console.log(ar2);
    console.log($source.getAnswer());
    return 
})