async function check(){
    var word = document.getElementById('word').value
    var url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    if(word.trim()==""){
        window.alert("Please Enter Something");
    }
    else{
        var result = await fetch(url);
        var data = await result.json();
        var meaning = data[0]['meanings'][0]['definitions'][0]['definition']
        document.getElementById('Result').innerHTML = meaning;
    }
}