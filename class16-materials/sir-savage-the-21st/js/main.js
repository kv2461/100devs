//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function printTwentyOne(){
    for (let i = 0; i<21; i++){
        console.log('21');
    }
}
//Bonus can you make it print '21' 21 times to the dom?

document.querySelector('#click').addEventListener('click',twentyOneDom)

function twentyOneDom(){
    document.querySelector('#savageSays').innerText =""
    for (let i=0;i<21;i++){
        document.querySelector('#savageSays').innerText+=" 21";
    }
}