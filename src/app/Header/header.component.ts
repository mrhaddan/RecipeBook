import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    @Output() myVar = new EventEmitter<string>();

    onSelect(feature: string) {
        this.myVar.emit(feature);
    }
}
