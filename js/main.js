document.querySelector("#submit").addEventListener('click', function () {
    const userinput = document.querySelector("#userInput").value
    // Same check as the old /api route in server.js, now run in the browser
    // so the app works as a static site on GitHub Pages with no server.
    const removeChar = userinput.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    const checkPalindrome = removeChar.split('').reverse().join('');
    const answer = removeChar === checkPalindrome
        ? `${userinput} is a palindrome`
        : `${userinput} isn't a palindrome`;
    const result = document.createElement("h2")
    result.textContent = answer
    document.body.appendChild(result)
})
