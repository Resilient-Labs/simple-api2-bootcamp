document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const gifImage = document.getElementById("gif-image");
    const apiKey = "1H5pPBfeH0xBqjkYXn9ctICHT51YZ391";

    // Function to fetch and display a GIF based on the user's search
    function fetchGif() {
        const searchTerm = searchInput.value;
        const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    const gifUrl = data.data[0].images.original.url;
                    gifImage.src = gifUrl;
                } else {
                    gifImage.src = ""; // clear  image if no GIF is found
                }
            })
            .catch(error => {
                console.error("Error fetching GIF:", error);
                gifImage.src = ""; //clear if error
            });
    }

    // Event listener for the generate button
    searchButton.addEventListener("click", fetchGif);

    // event listener to handle Enter key press in the input field
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            fetchGif();
        }
    });
});
