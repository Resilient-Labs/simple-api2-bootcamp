// Define variables
const accessKey = 'bJippHgHd-WIf15lcLC73qi97llSLWj7l5CYzr769Fg';
const secretKey = '8VdrbnITsMuNjkDs1cXvU6ahT8fm_UDnskUrIKlNNJk';
const endpoint = 'https://api.unsplash.com/photos/random';
const button = document.getElementById('btn');
const pictureList = document.getElementById('randomPicture');
const resetButton = document.createElement('button');
resetButton.innerText = 'Reset';

let listItem;

// Add event listener to the button
button.addEventListener('click', () => {
  // Make a GET request to the Unsplash API
  fetch(`${endpoint}?client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
      // Add the photo to the picture list
      listItem = document.createElement('li');
      const image = document.createElement('img');
      image.src = data.urls.regular;
      listItem.appendChild(image);
      pictureList.appendChild(listItem);
      pictureList.appendChild(resetButton);
    })
    .catch(error => console.error(error));
});

// Add event listener to the reset button
resetButton.addEventListener('click', () => {
  // Clear the entire list of photos
  pictureList.innerHTML = '';
});
