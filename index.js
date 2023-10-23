// Api url

// http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100

// Working Example of my port

// https://api.qrserver.com/v1/create-qr-code/?data=https://michaelariasdls.github.io/hostedport/&size=200x200


// http(s)://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[pixels]x[pixels]
// http://goqr.me/api/doc/






document.querySelector('button').addEventListener('click', getQrcode);

function getQrcode() {
    let site = document.querySelector('input').value;
    let img = document.getElementById('qrcode'); // Use getElementById to get the image element by its id

    // The format is not used in this example
    // You can directly use the QR code URL
    let data = `${site}`;

    // Construct the URL for the QR code image
    let url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=200x200`;

    fetch(url, {
        method: 'GET',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob(); // Use response.blob() to get the image data
        })
        .then(blob => {
            const objectURL = URL.createObjectURL(blob); // Create a URL for the image blob
            img.src = objectURL; // Set the image source to the URL
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}










// document.querySelector('button').addEventListener('click', getQrcode);

// function getQrcode() {
    

//     let site = document.querySelector('input').value
//     let img = document.getElementById('qrcode');
//     // let size = 
//     //size doesent need a specific its default is 200x200

//     // let apiKey = 'GJpIgQGyjWrmCbtUL1ITHw==iGJD1KipvjGZOm2f'
//     // console.log(site);

//     // let format = 'png';
//     let data = `${site}`
//     console.log(data)

//     //Example https://${google.com}
//     let url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=200x200`
    
//     console.log(url)

//     //data, format, fmt required
//     // let url = `https://api.api-ninjas.com/v1/qrcode?data=${data}&format=${format}`

    
//     fetch(url, {
//         method: 'GET', 
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': format
//         }
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(blob => {
//             const objectURL = URL.createObjectURL(blob); // Create a URL for the image blob
//             img.src = objectURL; // Set the image source to the URL
//         })
//         .catch(error => {
//             console.error('Error: ', error);
//         });
// }




//WORKING SOMEWHAT LINKS & QR CODE WORKING BUT ERROR THROWING UP


// https://api.api-ninjas.com/v1/qrcode?format=png&data=



 



    // data = &#x27;https://${site} &#x27; 


    // data = &#x27;https://api-ninjas.com &#x27;fmt = &#x27;png &#x27;api_url = &#x27;https://api.api-ninjas.com/v1/qrcode?data={}&amp;format={}&#x27;.format(data, fmt)
    // response = requests.get(api_url, headers={&#x27;X-Api-Key &#x27;: &#x27;YOUR_API_KEY &#x27;,  &#x27;Accept &#x27;: &#x27;image/png &#x27;}, stream=True)

    // if response.status_code == requests.codes.ok:
    // with open(&#x27;img.jpg &#x27;, &#x27;wb &#x27;) as out_file:
    //     shutil.copyfileobj(response.raw, out_file)
    // else:
    // print(&quot;Error:&quot;, response.status_code, response.text)


    // //source code

    // // let userSelect = funny

    // // let limit = 5
    // // console.log(limit)

    // // userSelect = userSelect <= limit ? userSelect : limit;
    // // console.log(userSelect)

    // let url = `https://api.api-ninjas.com/v1/qrcode?format=png&data=`;
    //  console.log(url)
    

    // // let url = `https://api.api-ninjas.com/v1/dadjokes?limit=${funny}&funny=${limit}`;

    
    
    
    //   }

// Example 2 jokes
// [
//     {
//       "joke": "What sounds like a sneeze and is made of leather? A shoe."
//     },
//     {
//       "joke": "How do you make a tissue dance? Put a little boogie in it!"
//     }
//   ]


//Example is written in Ajax refer to weatherAPI to rewrite it using fetch



// var data = 'https://api-ninjas.com';
// var fmt = 'png'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/qrcode?data=' + data + '&format=' + fmt,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY' },
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });






