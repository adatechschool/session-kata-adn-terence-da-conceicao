const sequence = require('./sequence.js');
const table = require('./conversionTable.js');


//Etape1
function getCodons (string) {
    let codonsList = []
    let codon = []
    for (let i = 0; i < string.length; i ++) {
        codon.push(string[i])
        if (codon.length >= 3) {
            codon = codon.join('');
            codonsList.push(codon)
            codon = []
        }
    }
    return codonsList
}
let codonsList = getCodons(sequence);


//Etape2
function getProteins (list, table) { 
    let proteinsList = []
    for (let codon of list) {
        if (table[codon]) {
            proteinsList.push(table[codon])
        }
    }
    return proteinsList.join('')
}

const protList = getProteins(codonsList, table)


//Etape3
function get25CharsSequences (string) {
   let sequencesList = []
    let sequence = []
    for (let i = 0; i < string.length; i ++) {
        sequence.push(string[i])
        if (sequence.length >= 25) {
            sequence = sequence.join('');
            sequencesList.push(sequence)
            sequence = []
        }
    }
    return sequencesList
}
const nucleotidesList = get25CharsSequences(protList)

// console.log("test enclenché")
// console.log("codonsList = ",codonsList)
// console.log("protListe = ",protList)

