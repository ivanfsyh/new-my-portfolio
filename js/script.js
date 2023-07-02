const url = 'https://www.forestapi.my.id/api/instagram/user/ivanfsyh';
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));