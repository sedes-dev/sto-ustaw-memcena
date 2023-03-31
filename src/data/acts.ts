export type Act = {
  title: string,
  description: string,
  links: {
    label: string,
    url: string,
  }[]
}

const acts: Act[] = [
  {
    title: 'Janusz Kurwin-Mickey honorowym królem polski',
    description: 'Nie ma wątpliwości, że najznamieniszy polski polityk, monarcha z zamiłowania, powinen w Nowej Polsce zostać odpowiedznio uhonorowany. Jedynym królem Polski był jest i będzie Jezus Chrystus, ale wieżymy, że Panu Januszowi należy sie tytuł specjalny honorowego Króla Polski',
    links: []
  },
  {
    title: 'Nakaz bicia dzieci',
    description: 'Silna ręka młodego polskiego mężczyzny jest najlepszym narzędziem wychowawczym i dyscyplinującym. Nie tylko zezwolimy, ale nawet nakażemy (!) profilaktyczne bicie dzieci, dla lepszego efektu wychowawczego.',
    links: [
      {
        label: 'Debata ekspertów na temat bicia dzieci',
        url: 'https://www.youtube.com/watch?v=t0dAUd5Kw4Y'
      }
    ]
  },
  {
    title: 'Nierozerwalne małżeństwa',
    description: 'Umowa to umowa, tak mówi wolny rynek. A umowa małżeństwa to umowa małżeństwa to umowa najważniejsza. Wprowadzimy zakaz rozwodów, chyba, że za zgodą biskupa (tylko polskiego!) i na wniosek młodego polskiego mężczyzny.',
    links: []
  },
  {
    title: 'Zero podatków',
    description: 'Podatki zabierają młodym polskim mężczyznom ponad 99,9% ich dochodów. Co dostają w zamian? NIC! Zlikwidujemy legalną kradzież, jaką są podatki i więcej pieniędzy zostanie polakom w portfelach!',
    links: []
  },
  {
    title: 'Likwidacja usług publicznych',
    description: 'Usługi publiczne są nieefektywne ekonomicznie i droższe o ponad 50% niż na wolnym rynku! Kiedy zlikwidujemy podatki nie będzie pieniędzy na utrzymywanie usług publicznych, ale za to polacy będą mogli świadomie kupować te same usługi na wolnym rynku i to taniej!',
    links: []
  },
  {
    title: 'Łódź jako obóz biedoty',
    description: 'Nie każdy poradzi sobie w nowych realiach - tak działa selekcja naturalna, zniknie socjal, darmozjady nie będą miały za co żyć, ale co zrobić, żeby naszych pięknych polskich, wolnych ulic nie zalała fala nieudaczników leżących po chodnikach? To proste - poświęcimy miasto Łódź i tam będziemy zwozić wszystkich tych, których selekcja naturalna skazała na niebyt.',
    links: [
      {
        label: 'Ekspert na temat predyspozycji miasta Łódź',
        url: 'https://film.dziennik.pl/artykuly/503999,boguslaw-linda-twierdzi-ze-lodz-filmowa-umarla-nazywa-ja-miastem-meneli.html'
      }
    ],
  },
  {
    title: 'Talon na ku*wę i balon',
    description: 'Młody polski mężczyzna potrzebuje czasami rozładować buzujące w nim emocje. Wszyscy, którzy zagłosują na naszą partię gwarantujemy przynajmniej jedną darmową wizytę w wybranej Agencjii Towarzyskiej w miesiącu (warunek: zdjęcie z kartą do głosowania).',
    links: [],
  }
]

export default acts;