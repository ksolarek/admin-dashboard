const collection = [];

function Album(title, artist, format, condition) {
    this.title = title;
    this.artist = artist;
    this.format = format;
    this.condition = condition;
    this.albumId = crypto.randomUUID();
    this.info = function() {
        return `"${this.title}" by ${this.artist}, ${this.format}, in ${this.condition} condition`;
    };
}

function addAlbumToCollection(title, artist, format, condition) {
    const newAlbum = new Album(title, artist, format, condition);
    collection.push(newAlbum);
}
  
const titleInput = document.querySelector("#title");
const artistInput = document.querySelector("#artist");
const formatInput = document.querySelector("#format");
const conditionInput = document.querySelector("#condition");