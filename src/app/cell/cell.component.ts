import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-cell',
    template: `
    <div [ngStyle]="getStyle()">
        <ng-content></ng-content>
    </div>
    `,
    styles: [`
    :host, div {
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
    }
    `]
})
export class CellComponent {
    @Input() black!: boolean;

    getStyle() {
        return this.black
            ? { backgroundColor: 'black', color: 'white' }
            : { backgroundColor: 'white', color: 'black' };
    }
}