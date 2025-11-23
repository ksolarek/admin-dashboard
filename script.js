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

const dialog = document.querySelector("dialog");
const openButton = document.querySelector(".open-dialog");
const closeButton = document.querySelector(".close-dialog");

const formButton = document.querySelector(".form-button");

formButton.addEventListener("click", function(event) {
    if (titleInput.value, artistInput.value, formatInput.value, conditionInput.value) {
        addAlbumToCollection(titleInput.value, artistInput.value, formatInput.value, conditionInput.value);
        displayCollection(collection); // function needs to be added
        event.preventDefault();
        dialog.close();
    };
});

openButton.addEventListener("click", () => {
    dialog.showModal();
    titleInput.value = "";
    artistInput.value = "";
    formatInput.value = "";
    conditionInput.value = "";
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

const myCollection = document.querySelector(".my-collection");

function displayCollection(arr) {
    for (const item of arr) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        const paraTitle = document.createElement("p");
        paraTitle.textContent = `Title: "${item.title}"`;
        cardDiv.appendChild(paraTitle);
        const paraArtist = document.createElement("p");
        paraArtist.textContent = `Artist: ${item.artist}`;
        cardDiv.appendChild(paraArtist);
        const paraFormat = document.createElement("p");
        paraFormat.textContent = `Format: ${item.format}`;
        cardDiv.appendChild(paraFormat);
        const paraCondition = document.createElement("p");
        paraCondition.textContent = `Condition: ${item.condition}`;
        cardDiv.appendChild(paraCondition);
        myCollection.appendChild(cardDiv);
    }
}