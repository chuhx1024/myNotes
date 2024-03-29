import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-basic',
  template: `
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
          <td>
            <a>Action 一 {{ data.name }}</a>
            <nz-divider nzType="vertical"></nz-divider>
            <a (click)="handleDel()">Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
})
export class NzDemoTableBasicComponent {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  status = 0

  get formatStatus () {
    const obj = {
        0: '已完成',
        1: '进行中'
    }
    return obj[this.status]
  }

  ngOnChange (data) {
    if (data.status) {
        console.log(status, '一般的ref变了...')
    }
  }

  const handleDel = (id) => {
    // 发送AJAX ....
  }
}
