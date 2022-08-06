import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApitestService } from 'src/app/apiTest/apitest.service';
import { map, startWith } from 'rxjs/operators';
import { tempData } from './data';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './DialogOverviewExampleDialog';

export interface State {
    T: string;
    v: any;
    vw: any,
    o: any,
    c: any,
    h: any,
    l: any,
    t: any,
    n: any
}

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    stateCtrl = new FormControl('');
    filteredStates: Observable<State[]>;
    matDialogueModel = '';
    states: State[] = tempData;


    constructor(public dialog: MatDialog) {
        this.filteredStates = this.stateCtrl.valueChanges.pipe(
            startWith(''),
            map(state => (state ? this._filterStates(state) : this.states.slice())),
        );
    }

    ngOnInit(): void {

    }
    private _filterStates(value: string): State[] {
        const filterValue = value.toLowerCase();

        return this.states.filter(state => state.T.toLowerCase().includes(filterValue));
    }
    updateMySelection(_value: any) {
        // diloouge open true: 
        this.matDialogueModel = _value;
        // console.log(_value)
        // alert("You selected some text!" + _value.T + "  open" + _value.o);
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '450px',
            data: { T: _value.T, o: _value.o, c:_value.c },
        });

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     _value.T = '';
        // });
    }
}

