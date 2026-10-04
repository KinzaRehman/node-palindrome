//alert('it works')

document.querySelector("#submit").addEventListener('click', function () {
    const userinput = document.querySelector("#userInput").value 

    fetch(`/api?palindrome=${userinput}`)
    .then(response => response.json())
    .then((data => {
        console.log(data)
        const result = document.createElement("h2")
        result.textContent = data.answer
        document.body.appendChild(result)

    }))
})