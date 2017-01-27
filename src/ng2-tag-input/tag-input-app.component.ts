import { Component } from '@angular/core';

@Component({
    selector: 'tag-input-app',
    styleUrls: ['./tag-input-app.style.scss'],
    templateUrl: './tag-input-app.template.html'
})
export class TagInputApp {
    public autocompleteItems: string[] = [
        'Typescript',
        'Ruby',
        'Java',
        'Scala',
    ];
}