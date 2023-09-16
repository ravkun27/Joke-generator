Random Joke Generator
The Random Joke Generator is a web application that fetches and displays random jokes from different categories. It serves as an interactive and entertaining tool for users to enjoy a good laugh. This project incorporates key programming concepts such as classes, switch statements, and error handling using try-catch-finally.

How to Use the Site
1. Category Selection: Start by selecting a joke category from the dropdown menu. You can choose from categories like "Programming," "General," or "Pun."

2. Fetch a Joke: Click the "Get Joke" button to fetch and display a random joke based on your selected category.

3. Result Display: The joke will appear on the screen below the button. If an error occurs during the fetch process, an error message will be displayed instead.

4. Refresh: To fetch another random joke, simply click the "Get Joke" button again.

Incorporation of Key Concepts
Classes
The project is organized using the JokeGenerator class. This class encapsulates the functionality of fetching and displaying jokes. It helps keep the code modular and maintainable.

Switch Statements
Behind the scenes, a switch-like structure is used to select different joke categories based on the user's choice. The selected category is passed as a parameter to the API endpoint, ensuring that the fetched joke matches the user's preference.

async fetchRandomJoke(category) {
    // ...
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    // ...
}
Error Handling (Try-Catch-Finally)
The project incorporates robust error handling using try-catch-finally statements. In the fetchRandomJoke method, we attempt to fetch a joke and catch any errors that may occur, such as network issues or invalid API responses. If an error is caught, an error message is displayed to the user.

try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    if (!response.ok) {
        throw new Error('Failed to fetch joke');
    }
    // ...
} catch (error) {
    console.error('An error occurred:', error);
    return 'An error occurred. Please try again later.';
} finally {
    console.log('Fetch operation completed.');
}
Conclusion
The Random Joke Generator is a playful web application that not only provides a good laugh but also showcases key programming concepts. The use of classes, switch statements, and robust error handling makes the code organized, functional, and user-friendly.

Give it a try and enjoy some random humor! 😄
