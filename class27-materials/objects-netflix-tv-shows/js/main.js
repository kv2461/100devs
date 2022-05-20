//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTVShow {
    constructor(genre, audience, directedBy, starring) {
        this.genre = genre,
        this.audience = audience,
        this.directedBy = directedBy,
        this.starring = starring
    };
    play() {
        console.log('its playing')
    };
    topPage() {
        console.log('top page of nextflix!')
    };
    pause() {
        console.log('are u still watching?')
    }
}

