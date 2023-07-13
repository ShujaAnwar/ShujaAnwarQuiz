var choice = document.getElementById('message');
// var value:string = choice?.value;
choice === null || choice === void 0 ? void 0 : choice.addEventListener('input', function (event) {
    var target = event.target;
    switch (target.value) {
        case "1": {
            console.log("2 Answer \n");
            var personName = "Shuja Anwar";
            console.log(" Hello! " + personName + " would you like to learn some Python today? \n");
            break;
        }
        default: {
            console.log("helloworld");
        }
    }
});
