# 📊 Project: Simple API 2

This website lets you choose a type in a animal and see what they look like and what its life span is.

**Link to project:** https://kerlinaugustin-simple-api2.netlify.app/

![background](https://user-images.githubusercontent.com/102834611/169192359-34251555-f71f-44f2-a273-33e72dc0b7d9.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This website utilizes an API. I first created an input and a button. In javascript I created a function called getAnimal for the purpose to get an image from the api. I made the input value equal to a variable. I then put the variable I created into the rand parameter section of the api url. Then I created the fetch function and passed in the api url with the variable in the date parameter. Then I told it to give me a response in JSON, then I took that response and put it into a parameter called data. The data I got back from the JSON had a name, lifespan and image url key so I set them equal to different html tags to show on the website whenever someone put a animal name into the input.

## Lessons Learned:

I learned that not every api takes in parameters or an api key.
