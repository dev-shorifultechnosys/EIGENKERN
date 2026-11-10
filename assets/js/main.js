/**
 * EIGENKERN — Full V14 homepage, local AI and onboarding / ES2019+ vanilla JavaScript.
 * -------------------------------------------------------
 * Does not require jQuery, plugins, analytics, or third-party CDNs.
 * Supports DE/EN translation, adaptive navigation and future in-page sections.
 * Important: do not inject untrusted HTML. All translations use textContent.
 */
(() => {
  'use strict';

  const copy = {
    de: {
      flowRefSafety: 'Nur pseudonymisierte Schattenkopie',
      flowRefViewportAria: 'Animierte Hybrid-Illustration; auf kleinen Bildschirmen horizontal wischen',
      flowRefSwipe: '← Zum Erkunden wischen →',
      flowRefStepsAria: 'Die vier Schritte des optionalen Hybrid-Modus',
      flowRefGuardTitle: 'Pseudonymizer',
      flowRefGuardCopy: 'Schattenkopie + Prüfkette',
      flowRefReturnTitle: 'Antwort zurück',
      flowRefOriginalEN: 'Original bleibt bei Ihnen',
      flowRefLocalEN: 'Lokale KI · Original bleibt hier',
      flowRefGuardEN: 'Pseudonymizer · Schattenkopie + Prüfung',
      flowRefCloudEN: 'Cloud-KI · nur Schattenkopie',
      flowRefAnswerEN: 'Die Antwort kommt zurück; Namen werden lokal zugeordnet',
      flowAccessible: 'Optionale Hybrid-Verarbeitung: Original bleibt lokal. Der Wächter erzeugt eine pseudonymisierte Schattenkopie, die Cloud-KI erhält nur diese Kopie, Antworten werden lokal zugeordnet.',
      flowMode: 'OPTIONALER HYBRID-MODUS',
      flowAnimated: 'LIVE-DATENFLUSS',
      flowOriginalTop: 'Das Original verlässt Ihre Umgebung nicht',
      flowLocalTitle: 'Lokale KI',
      flowLocalCopy: 'Original bleibt bei Ihnen',
      flowGuardTitle: 'Wächter',
      flowGuardCopy: 'Pseudonymisiert lokal',
      flowTokensAria: 'Platzhalter-Beispiele: Person 01 und Firma 01',
      flowCloudTitle: 'Cloud-KI',
      flowCloudCopy: 'Nur die Schattenkopie',
      flowNever: 'Kein direkter Originaltransfer',
      flowAnswer: 'Antwort zurück · Namen lokal wiederhergestellt',
      flowNotice: 'Optionaler Hybrid-Modus · schematische Darstellung',
      heroTrial: "Mit eigenen Daten testen",
      industryTaxUse: "Belegeingang, Fristen und Mandantenakten.",
      industryMedicalUse: "Praxis-Wissens-KI und Dienstplanung.",
      industryLegalUse: "Akten, Schriftsätze und Verträge mit Fundstellen.",
      industryCraftUse: "Angebote, Aufträge und Baustellenfotos.",
      industrySchoolsUse: "Schulunterlagen und interne Abläufe.",
      industryMunicipalUse: "Satzungen, Vorlagen und Bürgeranfragen.",
      onboardEyebrow: "SO BEGLEITEN WIR SIE",
      onboardTitle: "Vom ersten Ordner zum laufenden System.",
      onboardLead: "Wir liefern nicht nur Technik – wir begleiten Sie von der Analyse bis zum täglichen Einsatz.",
      onboardCta: "Mit eigenen Daten testen",
      onboardAria: "Fünf Schritte vom ersten Dokument bis zum Betrieb",
      onboardStep1Title: "Unterlagen ansehen",
      onboardStep1Copy: "Wir sichten Ihre Ordner, Daten und Dokumente und klären die passende Struktur.",
      onboardStep2Title: "Größtes Ärgernis zuerst",
      onboardStep2Copy: "Wir priorisieren, was im Alltag am meisten Zeit und Nerven kostet.",
      onboardStep3Title: "Fertig ausliefern",
      onboardStep3Copy: "Hardware und Software kommen vorbereitet; Ihre Ordnerstruktur bleibt.",
      onboardStep4Title: "Team schulen",
      onboardStep4Copy: "Kurze Lernvideos und eine Einführung erklären Bedienung und Grenzen.",
      onboardStep5Title: "Weiter betreuen",
      onboardStep5Copy: "Updates, Hilfestellung und Erweiterungen begleiten den Betrieb.",
      compareEyebrow: "DER UNTERSCHIED",
      compareTitle: "Cloud-KI oder Ihre eigene KI?",
      compareLead: "Fünf Kriterien für eine informierte Entscheidung – je nach Cloud-Anbieter und gewähltem Betriebsmodell.",
      compareAria: "Cloud-KI im Vergleich zu lokaler EIGENKERN KI",
      compareQuestionHeader: "Im Vergleich",
      compareCloudHeader: "Typische Cloud-KI",
      compareLocalHeader: "EIGENKERN Lokal",
      compareQ1: "Wo werden Ihre Dokumente verarbeitet?",
      compareCloud1: "Je nach Anbieter und gewählter Hosting-Region",
      compareLocal1: "Auf Ihrem Gerät oder dedizierten Server in Deutschland",
      compareQ2: "Wer kann Ihre Daten nutzen?",
      compareCloud2: "Abhängig von Anbieter, Vertrag und Einstellungen",
      compareLocal2: "Im lokalen Betrieb unter Ihrer Kontrolle",
      compareQ3: "Wie werden Nutzungskosten berechnet?",
      compareCloud3: "Je nach Angebot pro Nutzer oder Nutzung",
      compareLocal3: "Keine Gebühren pro Frage oder Nutzer",
      compareQ4: "Kann die KI ohne Internet arbeiten?",
      compareCloud4: "Normalerweise ist Internet erforderlich",
      compareLocal4: "Ja, am lokalen Gerät; beim Server ist ein Zugang nötig",
      compareQ5: "Woher kommt die Antwort?",
      compareCloud5: "Je nach Dienst aus Modellwissen oder verbundenen Quellen",
      compareLocal5: "Aus Ihren eigenen Unterlagen, mit prüfbaren Fundstellen",
      compareNote: "Wichtig: Nur im optionalen Hybrid-Modus werden Inhalte einer pseudonymisierten Schattenkopie an den ausgewählten Cloud-Dienst gesendet. Die Originaldokumente bleiben in Ihrer Umgebung. Cloud-Angebote unterscheiden sich je nach Anbieter, Region und Vertrag.",
      faqQ6: "Kann ich mit eigenen Unterlagen testen?",
      faqA6: "Ja. EIGENKERN bietet einen Test mit Ihren Unterlagen an – lokal oder auf einem dedizierten KI-Server in Deutschland. Löschung und Sicherungskopien werden vorab schriftlich vereinbart.",
      faqTestLink: "Testmöglichkeiten ansehen",
      finalTrial: "Mit eigenen Daten testen",
      v17CtaTitleLeading: "Bereit für Ihre eigene, ",
      v17CtaTitleAccent: "sichere KI?",
      v17BlockAria: "Blockierte Direktverbindung: Originaldokumente werden nicht an Cloud-KI gesendet",
      v17BlockTooltip: "Originaldokumente gehen nie direkt an Cloud-KI.",

      pageTitle: 'EIGENKERN | Ihre KI. Ihre Daten. Ihre Kontrolle.',
      pageDescription: 'EIGENKERN – lokale KI für Unternehmen. Mit Ihren Dokumenten und Quellenangaben, ohne Kosten pro Frage oder Nutzer. Lokal oder auf einem eigenen Server in Deutschland.',
      skip: 'Zum Inhalt springen',
      navSolutions: 'Lösungen', navIndustries: 'Branchen',
      navTechnology: 'Technologie', navPricing: 'Preise', navFaq: 'FAQ', navContact: 'Kontakt',
      consult: 'Jetzt beraten lassen',
      languageGroup: 'Sprache auswählen',
      openMenu: 'Menü öffnen', closeMenu: 'Menü schließen',
      eyebrow: 'LOKALE KI FÜR DEN MITTELSTAND',
      headlineFirst: 'Ihre KI. Ihre Daten.',
      headlineSecond: 'Ihre Kontrolle.',
      subtitle: 'Ihre eigene KI im eigenen Haus.',
      description: 'Die lokale KI arbeitet mit Ihren Unterlagen und liefert Antworten mit Fundstellen. Auf Ihrem Gerät oder einem eigenen Server in Deutschland. Optional als Hybrid.',
      discover: 'Mit eigenen Daten testen', video: 'So funktioniert es',
      trustGroup: 'Vorteile auf einen Blick',
      trustData: 'Daten bleiben\nunter Ihrer Kontrolle',
      trustFees: 'Keine Kosten\npro Nutzer',
      trustSources: 'Antworten mit\nQuellenangaben',
      heroImage: 'Zwei Geschäftsleute besprechen eine KI-Lösung am Laptop in einem modernen Büro.',
      deviceImage: 'Illustrative Darstellung eines kompakten lokalen KI-Geräts von EIGENKERN.',
      // Industries section — labels live outside the photographs.
      industryEyebrow: 'FÜR VIELE BRANCHEN',
      industryTitleLine1: 'Eine Lösung.',
      industryTitleLine2: 'Viele Möglichkeiten.',
      industryDescription: 'EIGENKERN unterstützt Unternehmen und Organisationen in ganz Deutschland – von der Steuerkanzlei bis zur Kommune.',
      industryAll: 'Alle Branchen entdecken',
      industriesGroup: 'Branchenübersicht',
      industryTax: 'Steuerberater', industryMedical: 'Arztpraxen', industryLegal: 'Kanzleien',
      industryCraft: 'Handwerk', industrySchools: 'Schulen', industryMunicipal: 'Kommunen',
      industryTaxAria: 'Steuerberater – Branchenlösung auf der Website öffnen',
      industryMedicalAria: 'Arztpraxen – Branchenlösung auf der Website öffnen',
      industryLegalAria: 'Kanzleien – Branchenübersicht auf der Website öffnen',
      industryCraftAria: 'Handwerk – Branchenlösung auf der Website öffnen',
      industrySchoolsAria: 'Schulen – Branchenübersicht auf der Website öffnen',
      industryMunicipalAria: 'Kommunen – Branchenübersicht auf der Website öffnen',
      industryTaxAlt: 'Aktenordner und Unterlagen in einer Steuerkanzlei',
      industryMedicalAlt: 'Heller Behandlungsraum einer Arztpraxis',
      industryLegalAlt: 'Juristische Fachbücher in einer Kanzlei',
      industryCraftAlt: 'Handwerksbetrieb mit Transportfahrzeug und Ausrüstung',
      industrySchoolsAlt: 'Modernes Klassenzimmer mit Tischen und Tafel',
      industryMunicipalAlt: 'Deutsches Rathaus mit Stadtwappen',
      // Section 03: Three Ways — German.
      waysEyebrow: 'DREI WEGE ZUR PASSENDEN KI',
      waysTitle: 'Maximale Flexibilität für Ihre IT.',
      waysDescription: 'Ob direkt in Ihrem Büro, auf einem eigenen Server in Deutschland oder im Hybrid-Modus – Sie entscheiden, wie Ihre KI arbeitet.',
      waysListLabel: 'Drei Betriebsmodelle',
      waysLocalTitle: 'Lokale KI',
      waysLocalDescription: 'Die KI läuft direkt auf einem kompakten Gerät in Ihrem Unternehmen.',
      waysServerTitle: 'Eigener Server',
      waysServerDescription: 'Ihre KI läuft auf einem Server nur für Sie, in einem Rechenzentrum in Deutschland.',
      waysHybridTitle: 'Hybrid-Modus',
      waysHybridDescription: 'Die lokale KI bleibt der Kern. Eine Cloud-KI verarbeitet optional nur die pseudonymisierte Schattenkopie.',
      waysLocalAlt: 'Kompakter EIGENKERN KI-Rechner auf einem Schreibtisch',
      waysServerAlt: 'Moderne Serverreihen in einem Rechenzentrum',
      waysHybridAlt: 'Weiße Wolken am blauen Himmel als Symbol für den optionalen Hybrid-Modus',
      waysLocalAria: 'Lokale KI – Details zum Betriebsmodell auf der Website öffnen',
      waysServerAria: 'Eigener Server – Details zum Betriebsmodell auf der Website öffnen',
      waysHybridAria: 'Hybrid-Modus – Details zum Betriebsmodell auf der Website öffnen',
      // Section 04 — original → shadow copy → optional cloud → local restoration.
      guardEyebrow: 'DAS WÄCHTER-PRINZIP',
      guardHeading: 'So bleibt Vertrauliches wirklich vertraulich.',
      guardLead: 'Der Wächter erstellt lokal eine pseudonymisierte Schattenkopie Ihrer Dokumente. Nur im optionalen Hybrid-Modus bearbeitet eine Cloud-KI diese Kopie. Die Originale bleiben in Ihrer eigenen Umgebung.',
      guardButton: 'Ablauf im Detail',
      guardStepsLabel: 'Vier Schritte des Wächter-Prinzips',
      guardStep1Title: 'Originaldokument',
      guardStep1Body: 'Ihre Dokumente bleiben in Ihrer Umgebung, z. B. Verträge, Akten und Fachunterlagen.',
      guardStep2Title: 'Wächter / Schattenkopie',
      guardStep2Body: 'Der Wächter ersetzt sensible Namen lokal durch Platzhalter, z. B. Person_01 und Firma_01.',
      guardStep3Title: 'Cloud-KI',
      guardStep3Body: 'Nur im Hybrid-Modus verarbeitet die gewählte Cloud-KI die pseudonymisierte Schattenkopie.',
      guardStep4Title: 'Antwort zurück',
      guardStep4Body: 'Die Antwort kommt lokal zurück; erst dort werden die Platzhalter durch echte Angaben ersetzt.',
      guardDetailTitle: 'Was bedeutet das für Ihre Daten?',
      guardDetailBody: 'Ihre Originaldateien werden für den optionalen Cloud-Schritt nicht als Original an den Cloud-Dienst übertragen. Stattdessen erstellt der Wächter lokal eine pseudonymisierte Schattenkopie. Die Zuordnung von Platzhaltern zu echten Namen verbleibt in Ihrer Umgebung.',

      // Section 05 — Benefits / clear value propositions, no unverified numbers.
      benefitsEyebrow: 'IHRE VORTEILE',
      benefitsTitle: 'Ihre Vorteile auf einen Blick.',
      benefitsLead: 'Weniger Aufwand, klare Kosten und die Kontrolle über Ihre eigenen Daten – für den Arbeitsalltag im Mittelstand.',
      benefitsListLabel: 'Die fünf Vorteile von EIGENKERN',
      benefitEfficientTitle: 'Effizienter arbeiten',
      benefitEfficientCopy: 'Wissen aus eigenen Dokumenten schneller finden.',
      benefitQueryTitle: 'Keine Kosten pro Frage',
      benefitQueryCopy: 'Keine Einzelabrechnung Ihrer KI-Anfragen.',
      benefitUsersTitle: 'Keine Kosten pro Nutzer',
      benefitUsersCopy: 'Keine nutzerabhängigen KI-Gebühren.',
      benefitSourcesTitle: 'Mit Quellenangaben',
      benefitSourcesCopy: 'Antworten mit Verweisen auf Ihre Dokumente.',
      benefitSovereigntyTitle: 'Datensouveränität',
      benefitSovereigntyCopy: 'Originaldokumente bleiben in Ihrer IT-Umgebung.',

      // Section 06 — official cost model: NO prices invented.
      costsEyebrow: 'KOSTEN & LEISTUNG',
      costsTitle: 'Klare Kosten. Planbar und fair.',
      costsLead: 'Hardware und Software einmalig erwerben, zusätzliche Leistungen nach Bedarf wählen – ohne Kosten pro Frage oder Nutzer.',
      costsConsult: 'Persönlich beraten lassen',
      costsListLabel: 'EIGENKERN Kostenstruktur mit drei Angebotsbereichen',
      costOnceTitle: 'Einmalig', costOnceSubtitle: 'Hardware und KI-Software',
      costOnce1: 'Passende EIGENKERN KI-Hardware',
      costOnce2: 'EIGENKERN KI-Software',
      costOnce3: 'Einrichtung und Inbetriebnahme',
      costMonthlyTitle: 'Optional monatlich', costMonthlySubtitle: 'Zusatzpakete nach Bedarf',
      costMonthly1: 'Fachmodule und Branchenlösungen',
      costMonthly2: 'Rechnungsstellung, Mahnwesen, CRM',
      costMonthly3: 'Zusatzpakete einzeln kündbar',
      costAdditionalTitle: 'Zusätzlich buchbar', costAdditionalSubtitle: 'Erweiterungen für Ihren Bedarf',
      costAdditional1: 'Wächter-Modul und Schattenkopie',
      costAdditional2: 'Optionale Hybrid-Cloud-KI-Anbindung',
      costAdditional3: 'Ersteinlesen größerer Datenbestände',
      costsQuoteNote: 'Ihr individuelles Angebot erhalten Sie nach der Vorab-Analyse Ihrer Unterlagen – transparent und auf Ihren Betrieb abgestimmt.',

      // Section 07 — real EIGENKERN video titles, illustrative SVG previews.
      videosEyebrow: "EIGENKERN IN DER PRAXIS",
      videosHeading: "Sehen statt lesen.",
      videosLead: "Drei kurze Videos zeigen, wie Sie die lokale KI im Arbeitsalltag bedienen.",
      videosAll: "Alle Videos ansehen",
      videosListAria: "Drei EIGENKERN Einführungsvideos",
      videosDemo: "PRODUKTDEMO",
      videosVideo: "VIDEO",
      videoOneLabel: "ERSTE SCHRITTE · TEIL 1",
      videoOneTitle: "User Chat",
      videoOneDesc: "Fragen stellen und Antworten mit Quellen prüfen.",
      videoTwoLabel: "ERSTE SCHRITTE · TEIL 2",
      videoTwoTitle: "Dokumente einlesen",
      videoTwoDesc: "Eigene Unterlagen einlesen und organisieren.",
      videoThreeLabel: "ERSTE SCHRITTE · TEIL 3",
      videoThreeTitle: "Verwaltung, Überblick, Benutzer und Freischaltung",
      videoThreeDesc: "Benutzer, Rechte und Geräteeinstellungen verwalten.",
      videoOneAria: "User Chat – Video hier abspielen",
      videoTwoAria: "Dokumente einlesen – Video hier abspielen",
      videoThreeAria: "Verwaltung und Freischaltung – Video hier abspielen",
      videoOnePoster: "Originalaufnahme: EIGENKERN User Chat-Oberfläche",
      videoTwoPoster: "Originalaufnahme: EIGENKERN Dokumente einlesen",
      videoThreePoster: "Originalaufnahme: EIGENKERN Verwaltung und Benutzer",
      videosPrivacy: "Drei originale EIGENKERN Videos – lokal gespeichert, ohne YouTube. Wiedergabe nur nach Klick.",
      videoDialogTitle: "EIGENKERN Produktvideo",
      videoDialogClose: "Video schließen",
      // Section 08: FAQ & consultation (German/English).
      faqEyebrow: "FAQ & BERATUNG",
      faqTitle: "Ihre Fragen. Unsere Antworten.",
      faqLead: "Alles Wichtige zur lokalen KI – verständlich erklärt. Für alles Weitere sind wir persönlich für Sie da.",
      faqTrust: "Verständlich. Persönlich. Ohne Fachchinesisch.",
      faqAccordionAria: "Häufig gestellte Fragen zu EIGENKERN",
      faqQ1: "Wo laufen meine Daten?",
      faqA1: "Ihre Originaldokumente bleiben auf dem lokalen Gerät in Ihrem Unternehmen oder in Ihrer dedizierten Serverumgebung in Deutschland. Im optionalen Hybrid-Modus wird nur eine pseudonymisierte Schattenkopie an die ausgewählte Cloud-KI übergeben.",
      faqQ2: "Wie unterscheidet sich EIGENKERN von Cloud-KI?",
      faqA2: "Die lokale KI verarbeitet Ihre eigenen Unterlagen in einer von Ihnen kontrollierten Umgebung und zeigt die Fundstellen ihrer Antworten. Anders als bei vielen Cloud-Angeboten entstehen keine separaten Gebühren pro Frage oder Nutzer.",
      faqQ3: "Was ist das Wächter-Modul?",
      faqA3: "Der Wächter ersetzt vertrauliche Angaben durch Platzhalter und erstellt eine Schattenkopie. Nur diese kann im Hybrid-Modus an eine Cloud-KI gesendet werden. Nach der Antwort werden die echten Angaben lokal wieder eingesetzt.",
      faqQ4: "Für wen eignet sich die Lösung?",
      faqA4: "Für Unternehmen und Einrichtungen, die mit eigenen Dokumenten arbeiten: etwa Steuerkanzleien, Arztpraxen, Rechtsanwaltskanzleien, Handwerksbetriebe, Schulen oder Kommunen.",
      faqQ5: "Braucht die KI Internet?",
      faqA5: "Für lokale Antworten nicht: Das Gerät rechnet vor Ort, auch ohne Internet. Für Updates und eine von Ihnen gewünschte Fernwartung kann eine Internetverbindung benötigt werden. Im optionalen Hybrid-Modus wird für die Cloud-KI eine Verbindung verwendet.",
      faqPhotoAlt: "Symbolbild einer freundlichen Beraterin im modernen Büro",
      faqPhotoLabel: "DIREKT & PERSÖNLICH",
      faqConsultEyebrow: "WIR SIND FÜR SIE DA",
      faqConsultTitle: "Persönliche Beratung",
      faqConsultText: "Sie haben Fragen zu EIGENKERN oder möchten sehen, wie die lokale KI zu Ihrem Betrieb passt? Sprechen wir darüber.",
      faqConsultCta: "Gespräch vereinbaren",
      // Section 09: final consultation CTA.
      finalCtaEyebrow: "PERSÖNLICH & UNVERBINDLICH",
      finalCtaTitle: "Bereit für Ihre eigene, sichere KI?",
      finalCtaDescription: "Lassen Sie sich persönlich beraten – unverbindlich und individuell.",
      finalCtaBenefitsLabel: "Ihre Vorteile bei einer Beratung",
      finalCtaBenefit1: "Persönliche Beratung",
      finalCtaBenefit2: "Individuelle Lösung",
      finalCtaBenefit3: "Unverbindlich",
      finalCtaButton: "Beratung anfragen",
      finalCtaButtonAria: "Persönliche Beratung bei EIGENKERN anfragen",

      // Section 10: footer / Deutsche Texte.
      footerLandmark: 'EIGENKERN Fußbereich', footerHomeAria: 'EIGENKERN – Startseite',
      footerBrandSummary: 'Lokale KI für den Mittelstand. Ihre Daten bleiben unter Ihrer Kontrolle.',
      footerNavAria: 'Footer-Navigation', footerSolutions: 'Lösungen', footerIndustries: 'Branchen',
      footerTechnology: 'Technologie', footerService: 'Service',
      footerLocal: 'Lokale KI', footerServer: 'Eigener Server', footerHybrid: 'Hybrid-Modus',
      footerGuardian: 'Wächter-Modul', footerTax: 'Steuerberater', footerMedical: 'Arztpraxen',
      footerLegal: 'Kanzleien', footerTrades: 'Handwerk', footerSchools: 'Schulen',
      footerMunicipal: 'Kommunen', footerGuardianPrinciple: 'Wächter-Prinzip',
      footerDataProtection: 'Datenschutz', footerSecurity: 'Sicherheit',
      footerIntegration: 'Integration & Geräte', footerPricing: 'Preise', footerContact: 'Kontakt',
      footerContactTitle: 'Direkt erreichbar', footerAddressAria: 'Offizielle Anschrift im Impressum ansehen',
      footerCountryAria: 'Standort Deutschland', footerCountryHeading: 'In Deutschland',
      footerCountryText: 'Entwickelt und betreut.',
      footerCopyright: 'Alle Rechte vorbehalten.', footerAbout: 'Über uns', footerLegalAria: 'Rechtliche Informationen',
      footerImprint: 'Impressum', footerPrivacy: 'Datenschutz',
      footerTop: 'Nach oben', footerTopAria: 'Zurück zum Seitenanfang',



    },
    en: {
      flowRefSafety: 'Only the pseudonymised shadow copy',
      flowRefViewportAria: 'Animated hybrid illustration; swipe horizontally on small screens',
      flowRefSwipe: '← Swipe to explore →',
      flowRefStepsAria: 'Four steps of optional hybrid processing',
      flowRefGuardTitle: 'Pseudonymiser',
      flowRefGuardCopy: 'Shadow copy + validation',
      flowRefReturnTitle: 'Answer returns',
      flowRefOriginalEN: 'Original remains with you',
      flowRefLocalEN: 'Local AI · Originals stay here',
      flowRefGuardEN: 'Pseudonymiser · Shadow copy + checks',
      flowRefCloudEN: 'Cloud AI · Shadow copy only',
      flowRefAnswerEN: 'Answer returns; real details restored locally',
      flowAccessible: 'Optional hybrid flow: originals remain local; Guardian creates a pseudonymised shadow copy; Cloud AI sees only that copy; answers are matched locally.',
      flowMode: 'OPTIONAL HYBRID MODE',
      flowAnimated: 'LIVE DATA FLOW',
      flowOriginalTop: 'Originals remain in your environment',
      flowLocalTitle: 'Local AI',
      flowLocalCopy: 'Original stays with you',
      flowGuardTitle: 'Guardian',
      flowGuardCopy: 'Pseudonymises locally',
      flowTokensAria: 'Placeholder examples: Person 01 and Company 01',
      flowCloudTitle: 'Cloud AI',
      flowCloudCopy: 'Shadow copy only',
      flowNever: 'No direct original transfer',
      flowAnswer: 'Answer returns · real names restored locally',
      flowNotice: 'Optional hybrid mode · simplified illustration',
      heroTrial: "Test with your own documents",
      industryTaxUse: "Incoming receipts, deadlines and client files.",
      industryMedicalUse: "Practice knowledge and staff scheduling.",
      industryLegalUse: "Files, legal drafts and contracts with references.",
      industryCraftUse: "Quotes, jobs and site photographs.",
      industrySchoolsUse: "School documents and internal processes.",
      industryMunicipalUse: "Bylaws, templates and citizen enquiries.",
      onboardEyebrow: "HOW WE GUIDE YOU",
      onboardTitle: "From your first folder to a working system.",
      onboardLead: "We deliver more than hardware – supporting you from the initial review through everyday use.",
      onboardCta: "Test with your own documents",
      onboardAria: "Five steps from the first documents to daily operation",
      onboardStep1Title: "Review your documents",
      onboardStep1Copy: "We check your folders and documents and plan the right structure together.",
      onboardStep2Title: "Solve the biggest problem first",
      onboardStep2Copy: "We prioritise the tasks that consume most of your team’s time.",
      onboardStep3Title: "Deliver ready to use",
      onboardStep3Copy: "Hardware and software arrive prepared; your existing folders stay in place.",
      onboardStep4Title: "Train your team",
      onboardStep4Copy: "Introductory videos and guidance explain operation and limitations.",
      onboardStep5Title: "Keep it running",
      onboardStep5Copy: "Updates, practical help and extensions support your operation.",
      compareEyebrow: "THE DIFFERENCE",
      compareTitle: "Cloud AI or your own AI?",
      compareLead: "Five criteria for an informed decision, depending on the cloud provider and deployment model.",
      compareAria: "Comparison of typical cloud AI and local EIGENKERN AI",
      compareQuestionHeader: "Comparison",
      compareCloudHeader: "Typical cloud AI",
      compareLocalHeader: "EIGENKERN Local",
      compareQ1: "Where are your documents processed?",
      compareCloud1: "Depends on provider and selected hosting region",
      compareLocal1: "On your device or dedicated server in Germany",
      compareQ2: "Who can use your data?",
      compareCloud2: "Depends on provider, contract and settings",
      compareLocal2: "Under your control in local operation",
      compareQ3: "How is usage billed?",
      compareCloud3: "Depending on the plan, per user or usage",
      compareLocal3: "No per-question or per-user charges",
      compareQ4: "Can the AI work without the internet?",
      compareCloud4: "Usually requires internet access",
      compareLocal4: "Yes, on the on-site device; server access needs a connection",
      compareQ5: "How is an answer produced?",
      compareCloud5: "Depending on the service, from model knowledge or connected sources",
      compareLocal5: "From your own documents, with verifiable source references",
      compareNote: "Important: Only in optional hybrid mode are pseudonymised shadow-copy contents sent to the selected cloud service. Original documents stay in your environment. Cloud offerings differ by provider, region and contract.",
      faqQ6: "Can I test with my own documents?",
      faqA6: "Yes. EIGENKERN offers trials with your own files, either on your premises or on a dedicated AI server in Germany. Deletion and backups are agreed in writing in advance.",
      faqTestLink: "Explore testing options",
      finalTrial: "Test with your own documents",
      v17CtaTitleLeading: "Ready for your own ",
      v17CtaTitleAccent: "secure AI?",
      v17BlockAria: "Blocked direct route: original documents are never sent to cloud AI",
      v17BlockTooltip: "Original documents are not sent directly to cloud AI.",

      pageTitle: 'EIGENKERN | Your AI. Your Data. Your Control.',
      pageDescription: 'EIGENKERN local AI for businesses. Work with your documents and traceable sources with no per-question or per-user fees. On premises or on your dedicated server in Germany.',
      skip: 'Skip to content',
      navSolutions: 'Solutions', navIndustries: 'Industries',
      navTechnology: 'Technology', navPricing: 'Pricing', navFaq: 'FAQ', navContact: 'Contact',
      consult: 'Request a consultation',
      languageGroup: 'Choose language',
      openMenu: 'Open menu', closeMenu: 'Close menu',
      eyebrow: 'LOCAL AI FOR GERMAN BUSINESSES',
      headlineFirst: 'Your AI. Your data.',
      headlineSecond: 'Your control.',
      subtitle: 'Your own AI. On your infrastructure.',
      description: 'Local AI works with your documents and answers with traceable source references. On your own device or a dedicated server in Germany. Optional hybrid mode.',
      discover: 'Test with your own data', video: 'How it works',
      trustGroup: 'Key benefits',
      trustData: 'Your data stays\nunder your control',
      trustFees: 'No fees\nper user',
      trustSources: 'Answers with\nsource references',
      heroImage: 'Two business professionals discussing an AI solution on a laptop in a modern office.',
      deviceImage: 'Illustrative rendering of a compact EIGENKERN local AI device.',
      // Industries section — English translations.
      industryEyebrow: 'FOR MANY INDUSTRIES',
      industryTitleLine1: 'One solution.',
      industryTitleLine2: 'Many possibilities.',
      industryDescription: 'EIGENKERN supports businesses and organisations across Germany – from tax advisory firms to local government.',
      industryAll: 'Explore all industries',
      industriesGroup: 'Industries overview',
      industryTax: 'Tax advisers', industryMedical: 'Medical practices', industryLegal: 'Law firms',
      industryCraft: 'Skilled trades', industrySchools: 'Schools', industryMunicipal: 'Municipalities',
      industryTaxAria: 'Tax advisers – open industry solution on the website',
      industryMedicalAria: 'Medical practices – open industry solution on the website',
      industryLegalAria: 'Law firms – open industries page on the website',
      industryCraftAria: 'Skilled trades – open industry solution on the website',
      industrySchoolsAria: 'Schools – open industries page on the website',
      industryMunicipalAria: 'Municipalities – open industries page on the website',
      industryTaxAlt: 'Folders and business documents in a tax advisory office',
      industryMedicalAlt: 'Bright treatment room in a modern medical practice',
      industryLegalAlt: 'Legal reference books in a law office',
      industryCraftAlt: 'Trade business vehicle and workshop equipment',
      industrySchoolsAlt: 'Modern classroom with tables and teaching board',
      industryMunicipalAlt: 'German town hall with municipal coat of arms',
      // Section 03: Three Ways — English.
      waysEyebrow: 'THREE WAYS TO YOUR IDEAL AI',
      waysTitle: 'Maximum flexibility for your IT.',
      waysDescription: 'In your office, on a dedicated server in Germany or in hybrid mode – choose how your AI works.',
      waysListLabel: 'Three deployment options',
      waysLocalTitle: 'Local AI',
      waysLocalDescription: 'AI runs directly on a compact device at your business premises.',
      waysServerTitle: 'Dedicated server',
      waysServerDescription: 'Your AI runs on a server reserved for you, in a data centre in Germany.',
      waysHybridTitle: 'Hybrid mode',
      waysHybridDescription: 'Local AI stays at the core. An optional cloud AI works only with a pseudonymised shadow copy.',
      waysLocalAlt: 'Compact EIGENKERN AI device on a desk',
      waysServerAlt: 'Modern server racks inside a data centre',
      waysHybridAlt: 'White clouds in a blue sky representing optional hybrid mode',
      waysLocalAria: 'Local AI – open details about this deployment option',
      waysServerAria: 'Dedicated server – open details about this deployment option',
      waysHybridAria: 'Hybrid mode – open details about this deployment option',
      // Section 04 — original → shadow copy → optional cloud → local restoration.
      guardEyebrow: 'THE GUARDIAN PRINCIPLE',
      guardHeading: 'Your confidential information stays confidential.',
      guardLead: 'The guardian creates a pseudonymised shadow copy of your documents locally. Only in optional hybrid mode does a cloud AI process that copy. The originals stay within your environment.',
      guardButton: 'Explore the process',
      guardStepsLabel: 'The four steps of the guardian process',
      guardStep1Title: 'Original document',
      guardStep1Body: 'Your documents stay in your environment – including contracts, records and specialist files.',
      guardStep2Title: 'Guardian / shadow copy',
      guardStep2Body: 'The guardian locally replaces sensitive names with placeholders such as Person_01 and Company_01.',
      guardStep3Title: 'Cloud AI',
      guardStep3Body: 'Only in hybrid mode does the selected cloud AI process the pseudonymised shadow copy.',
      guardStep4Title: 'Response returned',
      guardStep4Body: 'The response returns to your local environment, where placeholders are restored to real details.',
      guardDetailTitle: 'What does this mean for your data?',
      guardDetailBody: 'Your original files are not sent as originals to the cloud service for the optional cloud step. The guardian creates a pseudonymised shadow copy locally. The mapping from placeholders to real names remains in your environment.',

      // Section 05 — Benefits / English.
      benefitsEyebrow: 'YOUR ADVANTAGES',
      benefitsTitle: 'The benefits at a glance.',
      benefitsLead: 'Less effort, predictable costs and control of your own data – designed for everyday business needs.',
      benefitsListLabel: 'Five EIGENKERN benefits',
      benefitEfficientTitle: 'Work more efficiently',
      benefitEfficientCopy: 'Find knowledge in your own documents faster.',
      benefitQueryTitle: 'No per-question fees',
      benefitQueryCopy: 'No individual charge for each AI request.',
      benefitUsersTitle: 'No per-user fees',
      benefitUsersCopy: 'No usage-based AI fees per user.',
      benefitSourcesTitle: 'Source-referenced answers',
      benefitSourcesCopy: 'Answers reference your original documents.',
      benefitSovereigntyTitle: 'Data sovereignty',
      benefitSovereigntyCopy: 'Original documents remain in your IT environment.',

      // Section 06 — correct English commercial categories.
      costsEyebrow: 'COSTS & SERVICES',
      costsTitle: 'Clear costs. Fair and predictable.',
      costsLead: 'Purchase hardware and software once; choose additional services when needed – with no per-question or per-user fees.',
      costsConsult: 'Request a personal consultation',
      costsListLabel: 'Three EIGENKERN cost categories',
      costOnceTitle: 'One-time purchase', costOnceSubtitle: 'Hardware and AI software',
      costOnce1: 'Suitable EIGENKERN AI hardware',
      costOnce2: 'EIGENKERN AI software',
      costOnce3: 'Setup and commissioning',
      costMonthlyTitle: 'Optional monthly', costMonthlySubtitle: 'Additional modules as needed',
      costMonthly1: 'Specialist modules and industry solutions',
      costMonthly2: 'Invoicing, reminders and CRM',
      costMonthly3: 'Add-on packages cancellable individually',
      costAdditionalTitle: 'Available as add-ons', costAdditionalSubtitle: 'Extensions for your requirements',
      costAdditional1: 'Guardian module and shadow copy',
      costAdditional2: 'Optional hybrid cloud AI integration',
      costAdditional3: 'Initial import of larger document sets',
      costsQuoteNote: 'Your tailored quote follows a preliminary review of your documents – transparent and suited to your business.',

      // Section 07 — real EIGENKERN video titles, illustrative SVG previews.
      videosEyebrow: "EIGENKERN IN PRACTICE",
      videosHeading: "See it in action.",
      videosLead: "Three short videos show how to use local AI in everyday business.",
      videosAll: "View all videos",
      videosListAria: "Three EIGENKERN introduction videos",
      videosDemo: "PRODUCT DEMO",
      videosVideo: "VIDEO",
      videoOneLabel: "GETTING STARTED · PART 1",
      videoOneTitle: "User chat",
      videoOneDesc: "Ask questions and review answers with sources.",
      videoTwoLabel: "GETTING STARTED · PART 2",
      videoTwoTitle: "Import documents",
      videoTwoDesc: "Import and organise your business documents.",
      videoThreeLabel: "GETTING STARTED · PART 3",
      videoThreeTitle: "Administration, overview, users and activation",
      videoThreeDesc: "Manage users, permissions and device settings.",
      videoOneAria: "User chat – play video here",
      videoTwoAria: "Import documents – play video here",
      videoThreeAria: "Administration and activation – play video here",
      videoOnePoster: "Original video frame: EIGENKERN User Chat",
      videoTwoPoster: "Original video frame: EIGENKERN document management",
      videoThreePoster: "Original video frame: EIGENKERN administration and users",
      videosPrivacy: "Three original EIGENKERN videos, hosted locally without YouTube. Playback starts only when clicked.",
      videoDialogTitle: "EIGENKERN product video",
      videoDialogClose: "Close video",
      // Section 08: FAQ & consultation (German/English).
      faqEyebrow: "FAQ & CONSULTATION",
      faqTitle: "Your questions. Clear answers.",
      faqLead: "Everything you need to know about local AI, explained simply. For everything else, we are happy to speak personally.",
      faqTrust: "Clear answers. Personal contact. No jargon.",
      faqAccordionAria: "Frequently asked questions about EIGENKERN",
      faqQ1: "Where is my data processed?",
      faqA1: "Your original documents stay on the device in your business or in your dedicated server environment in Germany. In optional hybrid mode, only a pseudonymised shadow copy is sent to the selected cloud AI.",
      faqQ2: "How is EIGENKERN different from cloud AI?",
      faqA2: "Local AI works with your own documents in an environment you control and provides source references for its answers. Unlike many cloud offerings, there are no separate fees per question or per user.",
      faqQ3: "What is the Guardian module?",
      faqA3: "The Guardian replaces confidential information with placeholders and creates a shadow copy. In hybrid mode, only that copy can be sent to a cloud AI. Once an answer returns, real identifiers are restored locally.",
      faqQ4: "Who is the solution designed for?",
      faqA4: "Businesses and institutions that rely on their own documents, including tax advisers, medical practices, law firms, tradespeople, schools, and local authorities.",
      faqQ5: "Does the AI need the internet?",
      faqA5: "Not for local answers: the device runs on-site, including when offline. Updates and optional remote support may require internet access. Optional hybrid cloud processing uses an internet connection.",
      faqPhotoAlt: "Illustrative photo of a friendly consultant in a contemporary office",
      faqPhotoLabel: "DIRECT & PERSONAL",
      faqConsultEyebrow: "HERE TO HELP",
      faqConsultTitle: "Personal consultation",
      faqConsultText: "Questions about EIGENKERN or curious how local AI might work for your business? Let us talk about it.",
      faqConsultCta: "Arrange a conversation",
      // Section 09: final consultation CTA.
      finalCtaEyebrow: "PERSONAL & NO OBLIGATION",
      finalCtaTitle: "Ready for your own secure AI?",
      finalCtaDescription: "Speak to us about your requirements – personally and with no obligation.",
      finalCtaBenefitsLabel: "What to expect from a consultation",
      finalCtaBenefit1: "Personal guidance",
      finalCtaBenefit2: "Tailored solution",
      finalCtaBenefit3: "No obligation",
      finalCtaButton: "Request a consultation",
      finalCtaButtonAria: "Request a personal consultation with EIGENKERN",

      // Section 10: footer / English translations.
      footerLandmark: 'EIGENKERN site footer', footerHomeAria: 'EIGENKERN – Back to homepage',
      footerBrandSummary: 'Local AI for growing businesses. Your data remains under your control.',
      footerNavAria: 'Footer navigation', footerSolutions: 'Solutions', footerIndustries: 'Industries',
      footerTechnology: 'Technology', footerService: 'Support',
      footerLocal: 'Local AI', footerServer: 'Dedicated server', footerHybrid: 'Hybrid mode',
      footerGuardian: 'Guardian module', footerTax: 'Tax advisers', footerMedical: 'Medical practices',
      footerLegal: 'Law firms', footerTrades: 'Trades', footerSchools: 'Schools',
      footerMunicipal: 'Local authorities', footerGuardianPrinciple: 'Guardian process',
      footerDataProtection: 'Data protection', footerSecurity: 'Security',
      footerIntegration: 'Integration & devices', footerPricing: 'Pricing', footerContact: 'Contact',
      footerContactTitle: 'Get in touch', footerAddressAria: 'View the official registered address',
      footerCountryAria: 'Based in Germany', footerCountryHeading: 'In Germany',
      footerCountryText: 'Developed and supported.',
      footerCopyright: 'All rights reserved.', footerAbout: 'About us', footerLegalAria: 'Legal information',
      footerImprint: 'Legal notice', footerPrivacy: 'Privacy policy',
      footerTop: 'Back to top', footerTopAria: 'Return to top of page',



    }
  };

  // Avoid a stale copyright year without introducing tracking or dependencies.
  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = String(new Date().getFullYear());

  const html = document.documentElement;
  const header = document.getElementById('site-header');
  const nav = document.getElementById('primary-nav');
  const toggle = document.getElementById('menu-toggle');
  const languageButtons = document.querySelectorAll('[data-lang]');
  const langStorageKey = 'eigenkern-demo-language';
  let currentLanguage = 'de';

  function applyLanguage(language) {
    currentLanguage = Object.prototype.hasOwnProperty.call(copy, language) ? language : 'de';
    const messages = copy[currentLanguage];
    html.lang = currentLanguage;
    document.title = messages.pageTitle;
    document.querySelector('meta[name="description"]').content = messages.pageDescription;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(messages, key)) {
        element.textContent = messages[key];
      }
    });
    document.querySelectorAll('[data-aria-i18n]').forEach((element) => {
      const value = messages[element.dataset.ariaI18n];
      if (value) element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-alt-i18n]').forEach((element) => {
      const value = messages[element.dataset.altI18n];
      if (value) element.alt = value;
    });
    languageButtons.forEach((element) => {
      const selected = element.dataset.lang === currentLanguage;
      element.setAttribute('aria-pressed', String(selected));
      element.classList.toggle('is-active', selected);
    });
    toggle.setAttribute('aria-label', messages[toggle.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu']);
    try { localStorage.setItem(langStorageKey, currentLanguage); } catch (_error) { /* storage may be disabled */ }
  }

  function setMenu(open) {
    const isOpen = Boolean(open);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', copy[currentLanguage][isOpen ? 'closeMenu' : 'openMenu']);
    nav.classList.toggle('is-open', isOpen);
    header.classList.toggle('menu-is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen && window.innerWidth <= 960);
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) setMenu(false);
  }, { passive: true });

  // Navigation is fully functional even when only this first section exists:
  // if a future on-page section is present, scroll there; otherwise follow the
  // verified official eigenkern.de fallback URL from the <a href> attribute.
  document.querySelectorAll('a[data-section]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.dataset.section;
      const section = id ? document.getElementById(id) : null;
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        setMenu(false);
      }
    });
  });


  // Wächter disclosure: explicit opt-in, no external requests or background media.
  const guardianToggle = document.getElementById('waechter-toggle');
  const guardianDetail = document.getElementById('waechter-detail');
  if (guardianToggle && guardianDetail) {
    guardianToggle.addEventListener('click', () => {
      const expanded = guardianToggle.getAttribute('aria-expanded') === 'true';
      guardianDetail.hidden = expanded;
      guardianToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }


  // SECTION 07 / Video player: no autoplay or external network until click.
  // Three user-provided, locally hosted MP4 files are mapped via data-video-src.
  // Video starts only on an explicit click; closing the dialog releases playback.
  const videosDialog = document.getElementById('ek-video-dialog');
  const videoPlayer = document.getElementById('ek-video-player');
  const closeVideo = document.getElementById('ek-video-dialog-close');
  const modalTitle = document.getElementById('ek-video-dialog-title');
  let videoOpener = null;
  const stopPlayback = () => {
    if (!videoPlayer) return;
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load(); // Release downloaded media when dismissed.
    if (videoOpener) videoOpener.focus({preventScroll:true});
    videoOpener = null;
  };
  document.querySelectorAll('.ek-video-card__link').forEach((link) => {
    link.addEventListener('click', (event) => {
      const videoSource = link.dataset.videoSrc?.trim();
      if (!videoSource || !videosDialog || typeof videosDialog.showModal !== 'function') {
        // Fallback is the verified EIGENKERN video library link.
        return;
      }
      event.preventDefault();
      videoOpener = link;
      modalTitle.textContent = link.querySelector('.ek-video-card__name')?.textContent || 'EIGENKERN';
      videoPlayer.src = videoSource;
      videosDialog.showModal();
      videoPlayer.play().catch(() => { /* user can use native controls */ });
    });
  });
  if (videosDialog) {
    videosDialog.addEventListener('close', stopPlayback);
    videosDialog.addEventListener('cancel', () => { /* the close event handles cleanup */ });
    closeVideo?.addEventListener('click', () => videosDialog.close());
    videosDialog.addEventListener('click', (event) => {
      if (event.target === videosDialog) videosDialog.close();
    });
  }


  // SECTION 08 / WCAG-friendly FAQ accordion.
  // Each heading contains an actual <button>; browsers provide Enter and Space.
  // Only one answer is visible at a time; hidden panels leave the focus order.
  const faqItems = Array.from(document.querySelectorAll('.ek-faq__item'));
  function setFaqOpen(item, open) {
    const button = item.querySelector('.ek-faq__question');
    const panel = item.querySelector('.ek-faq__answer');
    if (!button || !panel) return;
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    item.classList.toggle('is-open', open);
  }
  faqItems.forEach((item) => {
    const button = item.querySelector('.ek-faq__question');
    button?.addEventListener('click', () => {
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
      faqItems.forEach((other) => setFaqOpen(other, other === item && shouldOpen));
    });
  });

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // V14: subtle one-time scroll reveals, including onboarding + comparison. No parallax, auto-playing video,
  // timers, scroll-jacking or third-party animation libraries.
  // Reduced-motion visitors always see static content.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealSelectors = [
      '.industries__intro', '.industry-card', '.onboarding__intro', '.onboarding__step', '.ways__intro', '.ways-card',
      '.waechter__panel', '.comparison__intro', '.comparison__table',
      '.costs__layout', '.ek-videos__heading-row', '.ek-video-card',
      '.ek-faq__intro', '.ek-faq__accordion', '.ek-faq__consult',
      '.ek-final-cta__panel'
    ];
    const revealNodes = document.querySelectorAll(revealSelectors.join(','));
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ek-inview');
          obs.unobserve(entry.target);
        }
      });
    }, {rootMargin: '0px 0px 36px 0px', threshold: .06});
    revealNodes.forEach((node, index) => {
      node.dataset.ekReveal = '';
      node.style.setProperty('--ek-reveal-delay', `${(index % 3) * 45}ms`);
      observer.observe(node);
    });
    document.documentElement.classList.add('ek-motion');
  }

  let storedLanguage = 'de';
  try { storedLanguage = localStorage.getItem(langStorageKey) || 'de'; } catch (_error) { /* ignore */ }
  applyLanguage(storedLanguage);
})();
