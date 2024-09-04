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

### Metoder

- **Konstruktør**
  ```javascript
  constructor(data)

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
