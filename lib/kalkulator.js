/**
 * En veldig enkel kalkulator som skal kunne addere, subtrahere, multiplisere og dividere 2 tall
 */

function addisjon (addend1, addend2) {
  return addend1 + addend2
}

/**
 * Tips til oppgaven 
  function subtraksjon (a, b) {
    return 2
  }
*/


/**
 * I Node kan du eksportere funksjoner slik at du kan gjenbruke de andre steder
 * Formatet er module.exports.<navnet på det du eksporterer> = <det du eksporterer>
 * Fordelen med å kunne eksportere og gjenbruke moduler er at du kan dele koden din i veldig små deler
 * Dette gjør det lett å ha oversikt og mye lettere å teste
 */
module.exports.addisjon = addisjon

// Tips til oppgaven
// module.exports.subtraksjon = subtraksjon
