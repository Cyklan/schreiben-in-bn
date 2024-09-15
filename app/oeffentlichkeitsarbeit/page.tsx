import { Headline } from "@/components/Headline"

export default function Oeffentlichkeitsarbeit() {
  return (
    <>
      <Headline>Öffentlichkeitsarbeit</Headline>
      <p>
        Zwei Drittel aller Zeitungsartikel kommen durch Pressemitteilungen
        zustande, die bei Redaktionen eingereicht werden.
      </p>
      <p>
        Woran entscheidet sich, ob ein Bericht angenommen wird? Was veranlasst
        Journalisten zu einem Besuch, weil sie basierend auf Ihren Infos eine
        Reportage schreiben wollen?
      </p>
      <p>
        Nehmen wir an, Sie sind ein Verein? Sie leisten gesellschaftlich
        wertvolle Arbeit, doch sie wünschen sich stärkere Wahrnehmung, mehr
        Mitglieder und ein höheres Spendenaufkommen?
      </p>
      <p>
        Zeit für verbesserte Öffentlichkeitsarbeit, bei der ich Sie gern
        unterstütze.
      </p>
      <p>
        Oder Sie haben ein Unternehmen? Stellen wir uns vor, Sie sind ein
        Traditionsbuchhändler, ziehen an einen anderen Standort innerhalb der
        Innenstadt und vergrößern Ihre Ladenfläche um das Doppelte. In Zeiten
        von E-Books und Internethandel ist das bemerkenswert.
      </p>
      <p>Sie begehen ein rundes Jubiläum? Das ist relevant.</p>
      <p>
        Sehr setzen Sie sich für die Weiterbildung ein, veranstalten einen Tag
        der offenen Tür mit Spiel und Spaß, haben für ein gemeinnütziges Projekt
        gesammelt ... Solche und ähnliche Aktivitäten sind berichtenswert.
      </p>
      <p>
        Wichtig ist, die Anlässe zu erkennen und professionell auf die Medien
        zuzugehen - dabei helfe ich Ihnen gerne.
      </p>
      <p>
        Das gilt auch für den Fall, wenn Reporter zu Besuch kommen. Auf der
        sicheren Seite sind Sie mit einer fertigen Presseinformation, die Sie
        parallel zum Gespräch überreichen: als solide Grundlage über Ihre
        Unternehmung, in der Ihr Gegenüber noch einmal nachlesen kann.
      </p>
      <br />
      <h3 className="font-bold">Meine Leistungen:</h3>
      <ul className="list-disc">
        {LEISTUNGEN.map((leistung, index) => (
          <li key={`öffentlich-leistung-${index}`}>{leistung}</li>
        ))}
      </ul>
    </>
  );
}

const LEISTUNGEN = [
  "Pressetexte",
  "Reportagen",
  "Hintergrundberichte",
  "Interviews",
  "Fotos",
  "Pressemappen",
];
