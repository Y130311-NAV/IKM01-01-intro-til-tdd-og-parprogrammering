/**
 * I Node bruker man require for å hente inn moduler
 * Man oppgir navnet på modulen dersom man har installert den slik vi gjør med ava
 * Man oppgir banen til modulen dersom der er en lokal fil
 * ".." betyr opp et nivå i katalogstrukturen, dersom du skal hente en fil i samme katalog du står så bruker du "./"
 * { navn } brukes for å sette flere variabler samtidig
 */

const test = require('ava')
const { addisjon } = require('../lib/kalkulator')

/**
 * Som bruker ønsker jeg at addisjon av 1 + 3 gir svaret 4
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */
test('addisjon av 1 + 3 gir 4', t => {
  t.is(addisjon(1, 3), 4, 'addisjon 1 + 3 er ok')
})

/**
 * Som bruker ønsker jeg at addisjon av 1 + 2 gir svaret 3
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */
test('addisjon av 1 + 2 gir 3', t => {
  t.is(addisjon(1, 2), 3, 'addisjon 1 + 2 er ok')
})

/**
 * Som bruker ønsker jeg at subtraksjon av 3 - 1 gir svaret 2
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * Som bruker ønsker jeg at subtraksjon av 5 - 1 gir svaret 4
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * Som bruker ønsker jeg at multiplikasjon av 2 * 2 gir svaret 4
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * Som bruker ønsker jeg at multiplikasjon av 2 * 4 gir svaret 8
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * Som bruker ønsker jeg at divisjon av 10/5 gir svaret 2
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * Som bruker ønsker jeg at divisjon av 10/2 gir svaret 5
 * for at jeg skal kunne vite at kalkulatoren min fungerer
 */

// ---- skriv testen for denne brukerhistorien her

/**
 * BONUSOPPGAVE
 * Kan du skrive en test som tester addisjon med alle tall fra 1 til 100?
 * Hint: Tester er bare funksjoner og funksjoner kan kalle andre funksjoner 
 */