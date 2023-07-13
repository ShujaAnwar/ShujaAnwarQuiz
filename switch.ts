
var choice: any = document.getElementById('message') as HTMLInputElement | null;

// var value:string = choice?.value;

choice?.addEventListener('input', function (event) {
  const target = event.target as HTMLInputElement;


switch (target.value) {
  case "1": {
    console.log("2 Answer \n");
    let personName: string = "Shuja Anwar";

    console.log(
      " Hello! " + personName + " would you like to learn some Python today? \n"
    );
    break;
  }
  default:{
    console.log("helloworld");
  }

}
});


