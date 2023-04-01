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
  },
  {
    title: 'Obrona dobrego imienia Jana Pawła II',
    description: 'Nie może być tak, że lewactwo naśmiewa się z jednego z najwybitniejszych Polaków, a antypolskie stacje telewizyjne produkują materiały wyssane z palca, aby umniejszyć pontyfikat Polaka Papieża. Wprowadzimy prawo surowo zakazujące i każące za zbrodnie słowne i obrazkowe (tzw. memy) przeciwko naszemu rodakowi.',
    links: [
      {
        label: 'Przepis na kremówkę',
        url: 'https://domowe-wypieki.pl/przepisy/ciasta/300-kremowka-napoleonka'
      }
    ]
  },
  {
    title: 'Ustawa Antyfrankowiczowa',
    description: 'Osoby biorące kredyt we frankach podpisały umowę, po kilku latach dostały od polskich sądów prezent i masowo się z tych umów wykręcają - wpływa to negatywnie na wolny rynek. Umowa to umowa - wprowadzimy ustawę nakazującom frankowiczom oddać bankow zgodnie z umową wszystko co do grosza, a nawet z nawiązką! I to sporą.',
    links: [
      {
        label: 'Kurs franka szwajcarskiego',
        url: 'https://www.google.com/search?q=kurs+franka+szwajcarskiego&rlz=1C5CHFA_enPL1023PL1025&oq=kurs+franka'
      }
    ]
  },
  {
    title: '500 minus',
    description: 'Przez kilka ostatnich lat MILIARDY złotych zostały przekazane bezprawnie do ludzi którzy narobili dużo dzieci, nie pracują (a co za tym idzie - nie wnoszą swojego wkładu do rozwoju gospodarczego), a utrzymują się z środków programu 500 plus. Przeanalizujemy dokładnie każdy przypadek i jeżeli ktoś nie pracuje, a ma dzieci, to będzie musiał płacić 500 zł od każdego dziecka do kasy państwa. Pieniądze te będą przekazywane potem prywatnym inwestorom.',
    links: []
  },
  {
    title: 'Wolny dostęp do broni',
    description: 'Wolność twojej pięści kończy się na wolności mojego nosa - jeżeli przekroczy ona tę granicę, mam prawo odstrzelić Ci dłoń, albo nawet głowę. Każdy powinien czuć się bezpieczny w swoim domu, bandyci chodzą z pistoletami w ręku a uczciwi obywatele nie mają się jak bronić. Każdy pełnoletni polski młody mężczyzna powinien móc wejść do sklepu i kupić sobie broń bez żadnych ograniczeń i biurokracji. Załatwimy to.',
    links: [
      {
        label: 'Najkrwawsze strzelaniny w USA',
        url: 'https://pl.wikipedia.org/wiki/Masowe_strzelaniny_w_Stanach_Zjednoczonych'
      }
    ]
  },
  {
    title: 'Samochód prawem nie towarem',
    description: 'Każdy obywatel, a szczególnie młody polski mężczyzna, powinien mieć własny samochód. Najelpiej SUV. Na benzynę lub diesla. Zlikwidujey transport publiczny oraz wszelkie podatki i akcyzy na benzynę i nowe samochody, co obniży cenę paliw o ok. 75% (!) a samochodów o ok. 53% (!). Obniżka cen nowych samochodów wpłynie również na obiżenie cen na rynku samochodów używanych, więc każdego kowalskiego będzie stać na nowe 4 kółka.',
    links: [
      {
        label: 'Najpopularniejsze SUVy w Polsce w 2022 roku',
        url: 'https://autokatalog.pl/blog/2023/ranking-kompaktowych-suv-ow-top-20-modeli-polska-i-europa-rok-2022'
      }
    ]
  },
  {
    title: 'Zakaz pedałowania',
    description: 'Rowery są chorobą cywilizacyjną toczącą nasze społeczeństwo, w Nowej Polsce każdego (uczciwego, pracującego obywatela) będzie stać na samochód, rowery staną się więc zbędne, dodatkowo zakażemy jeżdżenia na nich ustawą, a przestrzeń zajmowaną przez ścieżki rowerowe przeznaczymy na dodatkowe pasy jezdni lub parkingi.',
    links: []
  },
  {
    title: 'Wyjście z Unii Europejskiej',
    description: 'Wszyscy wiemy co dzieje sie w Paryżu czy Berlinie. Lewackie ideologie, narzucane nam przez twór jakim jest Unia Europejska, próbują dostać się i do naszego kraju, póki co młodi polscy mężczyźni bronią naszych granic, ale jak długo będą mieli siłę aby to robić? Po dojściu do władzy natychmiast przystąpimy do procedury wyjścia z UE.',
    links: []
  }
]

export default acts;