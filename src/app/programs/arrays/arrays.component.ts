import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loopString('Shaheer');
    this.findIndex(['b', 'a', 'c'], 'a')
    let x = this.removeFromArray(['b', 'a', 'c'], 'k');
    let y = this.removeAllInstancesFromArray(['a', 'b', 'b', 'c'], 'b');
    let z = this.addAtSpecificIndex(['a', 'b', 'b', 'c'], 2);
    let m = this.findAndRemoveDuplicates(['a', 'b', 'b', 'c','d', 'd']);
    let v = this.getOnlyUniquevaluesFromArrays(['a', 'b', 'b', 'c','d', 'd']);
    let b = this.sort([8,1,2,3,4,5,6,7], [8,1,2,3,4,5,6,7]);
  }

  loopString(str: string){
    for(let i = 0; i < str.length; i++){
      console.log(str[i]);
    }
  }

  findIndex(arr: string[], value: string){
    console.log(arr.indexOf(value));
    return arr.indexOf(value);
  }

  removeFromArray(arr: string[], value:string){
    if(arr.indexOf(value) !== -1){
      arr.splice(arr.indexOf(value), 1)
    }
    else return -1;
    return arr;
  }

  removeAllInstancesFromArray(arr: string[], value:string){
    if(arr.indexOf(value) === -1){
      return -1;
    }
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  }

  addAtSpecificIndex(arr: string[], index: number){
    arr.splice(arr.length, 0, "Lene");
    return arr;
  }

  getOnlyUniquevaluesFromArrays(arr: string[]){
    //Using Map or Dictionary
    //set, get, has, delete, size
    let dic = new Map<string, number>();
    arr.forEach(x => {
      dic.set(x, arr.filter(y => y === x).length);
    }); 
    console.log(dic);

    //Using Object
    let arrObj : { [key:string]:number; } = {};
    arr.forEach(x => {
      arrObj[x] = arr.filter(y => y === x).length;
    }); 
    console.log(arrObj);
  }

  findAndRemoveDuplicates(arr: string[]){
    let uniqueArr = [...new Set(arr)];
    return uniqueArr.map(val => [val, arr.filter(item => item === val).length]);
  }

  findAndRemoveDuplicatesWithoutSets(arr: string[]){
    let uniqueArr = [...new Set(arr)];
    return uniqueArr.map(val => [val, arr.filter(item => item === val).length]);
  }

  sort(arr: number[], arrDesc: number[]){
    const swap = (arr: number[], x1: number, x2: number) => {
      [arr[x1], arr[x2]] = [arr[x2], arr[x1]];
    };

    //Assending
    for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }

    //Descending
    for (let k = 0; k < arrDesc.length; k++) {
      for (let m = k + 1; m < arrDesc.length; m++) {
        if (arrDesc[m] > arrDesc[k]) {
          swap(arrDesc, m, k);
        }
      }
    }

    console.log(arr);
    console.log(arrDesc);
  }
}