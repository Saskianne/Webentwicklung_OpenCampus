console.log("JS lädt")

// Nutzrklick auf ein Bild erkennen

function enlargeImage(clickedImage){
    console.log("Click",clickedImage)

    //src und alt attribut von clickedImage auslesen
    const clickedSrc = clickedImage.src;
    const clickedAlt = clickedImage.alt;

    //großes Bild in JS auslesen/laden
   const largePreview = document.getElementById("large-preview")

   //Scr und Alt Attribut auf großes Bild anwenden
   largePreview.src =clickedSrc;
   largePreview.alt = clickedAlt;

   //preview.active Klasse vom aktuellen Element entferne
   const currentlyActiveThumail= document.querySelector(."preview.active");
   currentlyActiveThumail.classList.remove("preview-active");

   //preview.active Klasse an geklicktes Bild anhängen
   clickedImage.classList.add("preview-active");

}

// Auf Nutzerklick auf Button lauschen
fuction openSoldOutOverlay() {
    console.log("Click");
// Modal element referenz auslesen
const overlay = document.getElementById("modal");

//dem Overlay die Klasse open hinzufügen
overlay.classList.add("open");

//Auf Nutzerklcik auf x.Button lauschen
function closeSoldOutOverlay()
console.log("Click");
//Modal elemenet referenz auslesen
const overlay = document.getElementById("modal");

//dem Overlay die Klasse close hinzufügen
overlay.classList.remove("open");

//Email Inputfeld zurücksetzen
const emailField=document.getElementById("email-field");
emailField.value=""

// Error Text zurücksetzen
const errorField =document.getElementById("error-text");
errorField.textContent =""; 
}

//Aus Submit lauschen
function validateEmail() {
    //Referenz auf das Email-Input element holen
    const emailField=document.getElementById("email-field");
    console.log(emailField);
    //Email in JS einlesen
    const email = emailField.ariaValueMax;
    console.log(email);

// Email überprüfen
if (email.includes("@")&& email.includes(".de")) {
// wenn valide => "save to Database"
console.log("Korrekte Email")
console.log("Save new email signup to Database")
//Modal bei Erfolg schließen
closeSoldOutOverlay
} else {
// wenn nicht valide => fehlermeldung anzeigen    
console.log("Falsch!")    
const errorField =document.getElementById("error-text")
errorField.textContent ="Please fix your e-mail input";
}
}


