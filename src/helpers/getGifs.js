

const urlBase = 'https://api.giphy.com/v1/gifs/search?';
const api_key = 'dPaUyWM7s4lmdI241aIqZBw6fD3PIHCs';
const limite = 10;

export const getGifs = async( category ) => {

    const url = `${urlBase}api_key=${api_key}&q=${category}&limit=${limite}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    return gifs;
}