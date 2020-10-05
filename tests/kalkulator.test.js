/**
 * I Node bruker man require for å hente inn moduler fra andre steder
 * Man oppgir navnet på modulen dersom man har installert den slik vi gjør med ava
 * Man oppgir banen til modulen dersom der er en lokal fil
 * ".." betyr opp et nivå i katalogstrukturen, dersom du skal hente en fil i samme katalog du står så bruker du "./"
 * { navn } brukes for å sette flere variabler samtidig
 */

const test = require('ava')
const { addisjon } = require('../lib/kalkulator')
// Tips til oppgaven
//const { addisjon, subtraksjon } = require('../lib/kalkulator')

/**
 * Som bruker ønsker jeg at addisjon av 1 + 3 gir svaret 4
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */
test('addisjon av 1 + 3 gir 4', t => {
  t.is(addisjon(1, 3), 4, 'addisjon 1 + 3 er ok')
})

/**
 * OPPGAVER OPPGAVER OPPGAVER OPPGAVER OPPGAVER
 */

/**
 * Som bruker ønsker jeg at subtraksjon av 3 - 1 gir svaret 2
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

// Gratis tips :-)
//test('subtraksjon av 3 - 1 gir 2', t => {
//  t.is(subtraksjon(3, 1), 2, 'subtraksjon av 3 - 1 er ok')
//})

/**
 * Som bruker ønsker jeg at multiplikasjon av 2 * 2 gir svaret 4
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * Som bruker ønsker jeg at divisjon av 10/5 gir svaret 2
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * BONUSOPPGAVE
 * Kan du skrive en test som tester addisjon med alle tall fra 1 til 100?
 * Hint: Tester er bare funksjoner og funksjoner kan kalle andre funksjoner 
 */