import { Component } from '@angular/core';

@Component({
    selector: 'interface',
    templateUrl: 'interface.component.html'
})

export class InterfaceComponent {
    nameLabel = '';
    numberLabel = '';

    getValue(event) {
        console.log(event);
    }
}