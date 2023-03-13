export class Secret {

    id?: string;
    title: string;
    nickname: string;
    nameOfSubject: string;
    objectifImgLink: string;
    resultImgLink: string;
    killCount: string;
    log: string;
    secretAudio: string;

    constructor() {

        this.title = '';
        this.nickname = '';
        this.nameOfSubject = '';
        this.objectifImgLink = '';
        this.resultImgLink = '';
        this.killCount = '';
        this.log = '';
        this.secretAudio = '';

    }
}