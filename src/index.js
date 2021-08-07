

const apikey = 'JCK9lmD201yVe9CLD7BzER2A8F4O4uMz';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
    .then( res => res.ok ? res.json() : Promise.reject(res) )
    .then( ( { data }) => {
        const { url } = data.images.original;
        console.log(url);
        const $image = document.createElement('img');
        //$image.setAttribute('src', url );
        $image.src = url;
        document.body.append($image);
        console.log($image);
    });



console.log('hola');