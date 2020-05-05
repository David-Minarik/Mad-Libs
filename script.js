function onSubmit() {
    let verbIng = document.getElementById("verbIng").value;
    let pluralNoun= document.getElementById("pluralnoun").value;
    let adjective= document.getElementById("adjective").value;
    let presentTenseVerb= document.getElementById("presentTenseVerb").value;
    let noun= document.getElementById("noun").value;


    let sentence = " There are too many " + verbIng + " " + pluralNoun + " on this " + adjective + " airplane! I screamed. \"somebody has to " + presentTenseVerb+ " on the "
    + noun + " to solve this problem! \"  ";

    document.getElementById("madLibResult").innerHTML = sentence;
}