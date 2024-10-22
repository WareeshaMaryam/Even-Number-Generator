function result() {
    let number = parseInt(prompt(`Enter a number to start Even Numbers`));
    let limit = parseInt(prompt(`Enter a number to end Even Numbers`));
    let result = '';

    while (number <= limit) {
        if (number % 2 === 0) {
            result += number + ', ';
        }
        number++;
    }
    result = result.slice(0, -2);
    document.getElementById("output").textContent = ` ${result}`;
}

function reset() {
    document.getElementById("output").textContent = " ";
}