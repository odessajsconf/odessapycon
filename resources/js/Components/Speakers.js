import $ from 'jquery';
import { BaseComponent } from '../Base/BaseComponent';
import { RenderSpeakers } from '../Modules/RenderSpeakers';
import { SpeakersRu } from '../lang/ru/speakers-ru';
import { SpeakersEn } from '../lang/en/speakers-en';

export class SpeakersComponent extends BaseComponent {

    constructor() {
        super();
        this.mainSpeakers = new RenderSpeakers({
          modal: 'speakers-modal',
          speakersRu: SpeakersRu,
          speakersEn: SpeakersEn,
          container: '#speakers-list'
        });
    }

    _events() {

    }

}
