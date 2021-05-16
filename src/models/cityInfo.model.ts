export class CityInfo {
    CityName: string = '';
    Temperature: string = '';
    SunriseTime?: string = '';
    SunsetTime?: string = '';
    SeaLevel: string = '';
    Date?: string;
}

export class Singers{
    singerId: number;
    singerName: string;
    constructor(_singerId: number, singerName: string){
        this.singerId = _singerId;
        this.singerName = singerName;
    }
}

export class Songs extends Singers{
    songId: number;
    albumId: number;
    constructor(songId:number, singerId: number, singerName: string, albumId: number){
        super(singerId, singerName);
        this.songId = songId;
        this.albumId = albumId
    }
}

export class Album {

}
