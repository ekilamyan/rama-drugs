export class Experience {
    id: number;
    title: string;
    thumbnailPhoto: string;
    imageUrls: string[];
    description: string[]

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.thumbnailPhoto = data.thumbnailPhoto;
            this.imageUrls = data.imageUrls;
            this.description = data.description;
        } else {
            this.id = -1
            this.title = ''
            this.thumbnailPhoto = '';
            this.imageUrls = [''];
            this.description = [''];
        }
    }
}