class JokeGenerator {
    constructor() {
        this.jokeElement = document.getElementById('joke');
        this.categorySelect = document.getElementById('categorySelect');
        this.newJokeButton = document.getElementById('newJokeButton');

        this.newJokeButton.addEventListener('click', this.getJoke.bind(this));
    }

    async fetchRandomJoke(category) {
        try {
            const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            const data = await response.json();
            return data.joke;
        } catch (error) {
            console.error('An error occurred:', error);
            return 'An error occurred. Please try again later.';
        } finally {
            console.log('Fetch operation completed.');
        }
    }

    getJoke() {
        const selectedCategory = this.categorySelect.value;
        this.fetchRandomJoke(selectedCategory)
            .then(joke => {
                this.jokeElement.textContent = joke;
            })
            .catch(error => {
                this.jokeElement.textContent = error;
            });
    }
}

const jokeGenerator = new JokeGenerator();
