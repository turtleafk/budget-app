import { Component } from '@angular/core';

@Component({
    selector: 'interface',
    templateUrl: 'interface.component.html',
    styleUrls: [`interface.component.css`]
})

export class InterfaceComponent {
    nameLabel = 'Type of Income';
    numberLabel = 'Income Amount';
    selectedOption = '';
    
    getValue(event) {
        this.selectedOption = event.target.value;

        if(this.selectedOption === 'expense') {
            this.nameLabel = 'Type of Expense';
            this.numberLabel = 'Expense Amount';
        } else {
            this.nameLabel = 'Type of Income';
            this.numberLabel = 'Income Amount';
        }
    }
}