const url = 'https://www.forestapi.my.id/api/instagram/user/ivanfsyh';
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // document.getElementById('img-ig').src = data['image_url'];
        // // document.getElementById('username').innerHTML =
        // //     '<i class="fa-brands fa-instagram"></i> ' + data['username'];
        console.log(data);
    })
    .catch((error) => console.log(error));