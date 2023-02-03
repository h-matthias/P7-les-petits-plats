async function getData () {

    const url = './src/data/recipes.json'

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log('Error:', error);
    }
}
