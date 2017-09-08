import { Component, Input } from '@angular/core';

@Component({
    selector: 'story-card',
    templateUrl: './story-card.component.html',
    styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent {
    @Input() header: string;
    @Input() story: string;
}
