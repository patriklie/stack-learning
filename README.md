# Data Structur Prosjekt / egen læring

Dette prosjektet omhandler implementeringen av enkle datastrukturer ved hjelp av JavaScript. De inkluderte datastrukturene er Node, LinkedList og Stack.

## Innhold

- [Node](#node)
- [LinkedList](#linkedlist)
- [Stack](#stack)
- [Hvordan bruke](#hvordan-bruke)
- [Eksempler](#eksempler)

## Node

`Node`-klassen representerer en node i en enkel lenket liste. Den har følgende egenskaper og metoder:

### Egenskaper

- `data`: Inneholder verdien som lagres i noden.
- `next`: Referanse til neste node i listen.

## LinkedList

`LinkedList`-klassen representerer en lenket liste med noder. 

### Egenskaper

- `head`: Inneholder verdien som lagres i headnoden.

### Metoder
- `addToHead` - Tar inn data som argument og lager en ny node som plasseres i front av listen.
- `addToTail` - Tar inn data som argument og lager en ny node som plasseres bakerst i listen.
- `removeHead` - Fjerner første noden i listen.
- `removeTail` - Fjerner den siste noden i listen.
- `printList` - Bygger og logger en string med nodene i listen, fra start til end.


## Stack

`Stack` -klassen representerer en FILO stack basert på linkedlist med nodes.

### Egenskaper

- `stack`: Inneholder nyopprettet linkedlist.
- `maxSize`: Inneholder numerisk verdi for maksstørrelsen på stacken, dersom ingenting er oppgitt defaulter den til Infinity.
- `size`: Inneholder stackens nåværende størrelse, starter på 0.

### Metoder
- `push` - Tar inn data oppretter node og legger til toppen av stacken.
- `pop` - Fjerner øverste elementet fra stacken.
- `peek`- Returnerer data fra øverste noden i stacken.
- `isEmpty` - Sjekker om stacken er tom, returnerer boolean true/false.
- `hasRoom`- Sjekker om stacken er full, returnerer boolean true/false.
- `printStack` - Printer en string med alle datene fra stacken front to end.