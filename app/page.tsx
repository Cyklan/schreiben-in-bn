import { Work_Sans } from "next/font/google";
import Image from "next/image";
import image from "./image.jpeg";

const displayFont = Work_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const FOUNDING_YEAR = 1999;

export default function Info() {
  const thisYear = new Date().getFullYear();

  return (
    <div>
      <h2 className={`text-xl font-bold mb-2 ${displayFont.className}`}>
        Über mich
      </h2>
      <Image className="mb-4" width={720} alt="Petra Ihm-Fahle" src={image} />
      <p>
        Seit über 20 Jahren bin ich als freie Journalistin im Wetteraukreis
        unterwegs.
      </p>
      <p>
        Vorher habe ich zehn Jahre als Buchhändlerin in Gießen, Frankfurt und
        Neu-Isenburg gearbeitet und zehn Semester Vor- und Frühgeschichte an der
        Philipps-Universität Marburg studiert.
      </p>
      <p>
        Schon seit meiner Kindheit fasziniert mich das Schreiben; seit dem
        ersten Schulaufsatz über eine Rittersage wollte ich immer
        Schriftstellerin werden. Gut erinnere ich mich an eine Lesung des damals
        sehr bekannten Kinderbuchautoren Heinrich Maria Denneborg und eine
        Postkarte, mit der mir Otfried Preußler auf einen Brief antwortete.
        Bücher, die ich in die Hände bekam, habe ich verschlungen,
        beispielsweise von Astrid Lindgren, Enid Blyton und Marie Luise Fischer.
      </p>
      <p>
        Bereits als Kind und Jugendliche habe ich geschrieben, ernst wurde es
        aber erst, als ich das erste Buch von Ingrid Noll las. Ihr flotter
        Frauenkrimi &ldquo;Der Hahn ist tot&rdquo; begeisterte mich so, dass
        auch ich begann, Krimis zu schreiben. Mein Ziel war es,
        Bestsellerautorin zu werden.
      </p>
      <p>
        &ldquo;Die Blümelein, sie schlafen&rdquo;, &ldquo;Lichthupe&rdquo; und
        der Kinderkrimi &ldquo;Till und Fabian und der sprechende Fisch&rdquo;
        landeten zunächst allerdings in der Schublade. Ich merkte, dass es gar
        nicht so einfach ist, etwas zu veröffentlichen und gründete den
        Autorenclub Wetterau, anfangs hieß er &ldquo;Wetterauer Autorenclub
        Stories in Aspik&rdquo;. Ziel war es, sich mit Gleichgesinnten
        auszutauschen. Dieser Club besteht erfolgreich seit{" "}
        {thisYear - FOUNDING_YEAR} Jahren.
      </p>
      <p>
        Ich bin Romanautorin, Mitautorin verschiedener Anthologien und
        Bloggerin. 2001 landete ich beim freien Journalismus, der mir wegen der
        abwechslungsreichen Abläufe liegt.
      </p>
      <p>
        Als Autorin habe ich die Essays &ldquo;Eiswürfelzeit&ldquo; und
        &ldquo;Immer FESTE schreiben&ldquo; publiziert, ferner die
        Kurzgeschichten &ldquo;Tod auf der Skiwiese&ldquo;,
        &ldquo;Schattengesicht&ldquo;, &ldquo;Lene&ldquo; u. a. Zudem bin ich
        Mitautorin von &ldquo;Corona - Tagebuch einer Pandemie&ldquo; des
        Autorenclubs Wetterau. Ich habe den Roman &ldquo;Nele und der neue
        Goethe - Liebeswahn trifft Don Juan&ldquo; (als Pia Gabrielly) und das
        Sachbuch &ldquo;Glücklich in die Tasten hauen&ldquo; geschrieben. Gerade
        bin ich gerade dabei, meinen Kriminalroman &ldquo;Wenn die Blümlein
        schlafen&ldquo; herauszubringen (als Pia Gabrielly).
      </p>
      <p>
        Als Journalistin gehören Hintergrundberichte und lokalpolitische Themen
        für regionale Zeitungen zu meinen Stärken. Hier ein Beispiel über eine
        Nonne, die sich verliebte und ein Buch darüber schrieb.
      </p>
      <p>Ich lebe und arbeite in Bad Nauheim.</p>
    </div>
  );
}
