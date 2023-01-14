const getJoke = async() => {
    let info;
    try{
        const res = await axios.get('https://api.chucknorris.io/jokes/random')
        info = res.data.value
        return info
    } catch(e) {
        info = "There was an error detected :("
        return info
    }
};

const setJoke = async() => {
    let data = await getJoke();
    document.querySelector('.jokes').innerText = data;
}

document.querySelector('.get-joke').addEventListener('click', setJoke);