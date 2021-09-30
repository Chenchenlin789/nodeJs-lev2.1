const fs = require('fs');

//öffne die Datei blog1.txt
fs.readFile('./blog1.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

//ändere den Inhalt (Text) in der Datei blog1.txt
fs.appendFile('blog1.txt', ' I have changed the old text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

//erstelle einen neuen Ordner assets, falls er nicht existiert. Falls er existiert lösche ihn
let text = 'a new text'
if (!fs.existsSync('blog2.txt')) {
    console.log('The blog2 exists.');
    fs.writeFile('./blog2.txt', text, 'tuf-8', (err) => {
        console.log(err)
        fs.readFile('./blog2.txt', text,)
    })
} else {
    console.log('blog2 dont exists.')
}

//Lösche eine Datei “delete.txt” aber nur wenn sie existiert
// fs.unlink('delete.txt', function (err) {
//     if (err) throw err;
//     console.log('File is deleted!');
// });

//Erstelle eine Datei Hello.txt und füge ihr etwas Text hinzu. Nenne die Datei in HelloWorld.txt um
fs.rename('hello.txt', 'HelloWorld.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});