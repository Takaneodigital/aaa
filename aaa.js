/* ============================================================
   AAA — Accueil · interactions
   - Trilingue FR / DE / EN (tolérance longueur allemande +40%)
   - Sélecteur de public Assuré / Employeur
   - Overlay annotation composants (logique design system AEM)
   - Navigation mobile · recherche (démo)
   ============================================================ */

const I18N = {
  fr: {
    "util.official": "Un site officiel de l'État luxembourgeois",
    "util.how": "Comment reconnaître un site officiel",
    "util.a11y": "Accessibilité",
    "nav.aaa": "L'AAA",
    "nav.sst": "Sécurité & santé au travail",
    "nav.accidents": "Accidents & maladies prof.",
    "nav.prestations": "Prestations & cotisations",
    "nav.doc": "Documentation",
    "sm.aaa.vision": "Vision", "sm.aaa.mission": "Mission", "sm.aaa.orga": "Organisation", "sm.aaa.rapport": "Rapport annuel & statistiques", "sm.aaa.iso": "Démarche qualité",
    "sm.sst.conseil": "Conseil SST", "sm.sst.reco": "Recommandations de prévention", "sm.sst.formations": "Formations", "sm.sst.regl": "Réglementation", "sm.sst.label": "Label « Sécher a Gesond »", "sm.sst.vz": "VISION ZERO",
    "sm.acc.travail": "Accident du travail / de trajet", "sm.acc.scolaire": "Accident scolaire / périscolaire", "sm.acc.maladies": "Maladies professionnelles",
    "sm.pre.assurees": "Personnes assurées", "sm.pre.indemn": "Indemnisations", "sm.pre.cotis": "Cotisations", "sm.pre.videos": "Vidéos explicatives",
    "sm.doc.formulaires": "Formulaires", "sm.doc.publications": "Publications", "sm.doc.legis": "Législations / Jurisprudence",
    "header.searchAria": "Rechercher sur le site",
    "header.declare": "Déclarer un accident",
    "header.menu": "Menu",
    "header.close": "Fermer",
    "hero.audienceLabel": "Je suis :",
    "hero.insured": "Assuré",
    "hero.employer": "Employeur",
    "hero.title": "Comment l'AAA peut-elle vous aider ?",
    "hero.lead": "Prévention, déclaration, prestations : trouvez en quelques clics l'information et les démarches qui vous concernent.",
    "hero.searchPh": "Que recherchez-vous ? (ex. déclaration, indemnité…)",
    "hero.searchBtn": "Rechercher",
    "hero.photoCaption": "Visuel : un environnement de travail sûr pour toutes et tous.",
    "hero.badgeTitle": "Urgence accident",
    "hero.badgeSub": "Démarches en ligne, 24h/24",
    "slide.s1": "Les accidents du travail et de trajet",
    "slide.s2": "Les maladies professionnelles",
    "slide.s3": "Les accidents scolaires et périscolaires",
    "slide.s4": "La déclaration d'accident électronique",
    "slide.new": "Nouveau",
    "car.prev": "Diapositive précédente",
    "car.next": "Diapositive suivante",
    "car.toggle": "Lecture ou pause du carrousel",
    "qa.heading": "Accès rapides",
    "qa.more": "Accéder",
    "qa.i1.title": "Déclarer un accident",
    "qa.i1.tag": "Urgent · sous 24h",
    "qa.i1.desc": "Accident du travail, de trajet ou scolaire : informez votre employeur et lancez la déclaration.",
    "qa.i2.title": "Mes démarches",
    "qa.i2.desc": "Suivi de votre dossier, indemnités, prise en charge des soins et remboursements.",
    "qa.i3.title": "Recommandations de prévention",
    "qa.i3.desc": "Conseils et bonnes pratiques pour éviter les risques propres à votre métier.",
    "qa.e1.title": "Déclarer un accident",
    "qa.e1.tag": "Urgent · délai légal",
    "qa.e1.desc": "Déclarez l'accident d'un salarié dans les délais légaux et suivez le dossier.",
    "qa.e2.title": "Cotisations & bonus-malus",
    "qa.e2.desc": "Comprenez votre taux de cotisation, le système bonus-malus et le calendrier de paiement.",
    "qa.e3.title": "Prévention en entreprise",
    "qa.e3.desc": "Formations, conseil, label de qualité et recommandations par secteur d'activité.",
    "stats.eyebrow": "Chiffres-clés",
    "stats.title": "L'AAA en quelques chiffres",
    "stats.desc": "L'assurance accident protège l'ensemble des travailleurs et des élèves du Luxembourg.",
    "stat1.label": "Personnes couvertes",
    "stat1.sub": "salariés, indépendants et élèves",
    "stat2.label": "Accidents déclarés / an",
    "stat2.sub": "travail, trajet et scolaires",
    "stat3.label": "Secteurs d'activité suivis",
    "stat3.sub": "en prévention santé-sécurité",
    "stat4.label": "Réparation des dommages",
    "stat4.sub": "prise en charge quasi intégrale",
    "stats.caption": "Données indicatives, à des fins de maquette — source : rapport annuel de l'AAA.",
    "news.eyebrow": "Actualités",
    "news.title": "À la une",
    "news.all": "Toutes les actualités",
    "news1.chip": "Prévention",
    "news1.date": "28 mai 2026",
    "news1.title": "Nouvelle campagne « Un accident du travail peut être évité »",
    "news2.chip": "VISION ZERO",
    "news2.date": "15 mai 2026",
    "news2.title": "Forum SST 2026 : les inscriptions sont ouvertes",
    "news3.chip": "Démarches",
    "news3.date": "06 mai 2026",
    "news3.title": "Déclaration d'accident : la procédure en ligne évolue",
    "news4.chip": "Publication",
    "news4.date": "22 avr. 2026",
    "news4.title": "Rapport annuel 2025 et statistiques disponibles",
    "vz.eyebrow": "Univers co-brandé · intégré au site AAA",
    "vz.title": "Vers le zéro accident, zéro maladie professionnelle.",
    "vz.desc": "La stratégie nationale qui engage entreprises et salariés autour de règles d'or et de principes pour une véritable culture de la sécurité.",
    "vz.cta": "Découvrir VISION ZERO",
    "vz.s1": "Règles d'or",
    "vz.s2": "Principes de prévention",
    "vz.p1": "Sécurité",
    "vz.p1sub": "Prévenir les accidents du travail",
    "vz.p2": "Santé",
    "vz.p2sub": "Préserver la santé des travailleurs",
    "vz.p3": "Bien-être",
    "vz.p3sub": "Améliorer le bien-être au travail",
    "direct.eyebrow": "Accès directs",
    "direct.title": "L'essentiel, au même endroit",
    "direct.t1.title": "Publications",
    "direct.t1.desc": "Brochures, rapports et fiches d'information à télécharger.",
    "direct.t2.title": "Formulaires",
    "direct.t2.desc": "Déclarations, demandes de prestations et attestations.",
    "direct.t3.title": "FAQ",
    "direct.t3.desc": "Réponses aux questions les plus fréquentes des assurés et employeurs.",
    "contact.eyebrow": "Contact",
    "contact.title": "Nous contacter",
    "contact.service": "Service Prestations",
    "contact.hours": "Lun – Ven · 8h00 – 16h00",
    "contact.cta": "Nous contacter",
    "ct.tel": "Téléphone",
    "ct.fax": "Fax",
    "ct.mail": "Courriel",
    "ct.aaa.title": "Association d'assurance accident",
    "ct.aaa.place": "Cité de la sécurité sociale",
    "ct.aaa.days": "du lundi au vendredi",
    "ct.aaa.rdv": "avec ou sans rendez-vous",
    "ct.aaa.guichet": "(via MyGuichet)",
    "ct.aaa.hoursLabel": "Ouverture du guichet",
    "ct.aaa.map": "Plan et itinéraire",
    "ct.prest.title": "Service Prestations",
    "ct.prest.note": "Veuillez envoyer vos documents dans un format PDF lisible.",
    "ct.prest.hoursLabel": "Heures de bureau",
    "ct.prest.desc": "Suivi de dossier, indemnités et prise en charge des soins.",
    "ct.prev.desc": "Conseil, formations et recommandations en santé-sécurité.",
    "ct.bonus.desc": "Taux de cotisation et système bonus-malus.",
    "ct.prev.title": "Service Prévention",
    "ct.prev.bonus": "Dossiers bonus-malus",
    "footer.about": "Établissement public sous la tutelle du Ministère de la Santé et de la Sécurité sociale. Prévention et indemnisation des accidents du travail, de trajet et des maladies professionnelles.",
    "footer.c1": "Le site",
    "footer.c2": "Aide & contact",
    "footer.c3": "Informations légales",
    "footer.l.sitemap": "Plan du site",
    "footer.l.news": "Actualités",
    "footer.l.publications": "Publications",
    "footer.l.forms": "Formulaires",
    "footer.l.ds": "Système de design",
    "footer.l.faq": "FAQ",
    "footer.l.contact": "Contact",
    "footer.l.jobs": "Recrutement",
    "footer.l.a11y": "Déclaration d'accessibilité",
    "footer.l.legal": "Mentions légales",
    "footer.l.privacy": "Protection des données",
    "footer.l.cookies": "Gestion des cookies",
    "footer.legal": "© 2026 Association d'assurance accident — Cité de la sécurité sociale, Luxembourg.",
    "cmp.show": "Voir les composants",
    "cmp.dslink": "Voir le système de design"
  },
  de: {
    "util.official": "Eine offizielle Website des luxemburgischen Staates",
    "util.how": "Eine offizielle Website erkennen",
    "util.a11y": "Barrierefreiheit",
    "nav.aaa": "Die AAA",
    "nav.sst": "Sicherheit & Gesundheit am Arbeitsplatz",
    "nav.accidents": "Arbeitsunfälle & Berufskrankheiten",
    "nav.prestations": "Leistungen & Beiträge",
    "nav.doc": "Dokumentation",
    "sm.aaa.vision": "Vision", "sm.aaa.mission": "Mission", "sm.aaa.orga": "Organisation", "sm.aaa.rapport": "Jahresbericht & Statistiken", "sm.aaa.iso": "Qualitätsansatz",
    "sm.sst.conseil": "SGA-Beratung", "sm.sst.reco": "Präventionsempfehlungen", "sm.sst.formations": "Schulungen", "sm.sst.regl": "Regelwerk", "sm.sst.label": "Label »Sécher a Gesond«", "sm.sst.vz": "VISION ZERO",
    "sm.acc.travail": "Arbeits- / Wegeunfall", "sm.acc.scolaire": "Schul- / außerschulischer Unfall", "sm.acc.maladies": "Berufskrankheiten",
    "sm.pre.assurees": "Versicherte Personen", "sm.pre.indemn": "Entschädigungen", "sm.pre.cotis": "Beiträge", "sm.pre.videos": "Erklärvideos",
    "sm.doc.formulaires": "Formulare", "sm.doc.publications": "Publikationen", "sm.doc.legis": "Gesetzgebung / Rechtsprechung",
    "header.searchAria": "Auf der Website suchen",
    "header.declare": "Unfall melden",
    "header.menu": "Menü",
    "header.close": "Schließen",
    "hero.audienceLabel": "Ich bin:",
    "hero.insured": "Versicherte/r",
    "hero.employer": "Arbeitgeber",
    "hero.title": "Wie kann die AAA Ihnen weiterhelfen?",
    "hero.lead": "Prävention, Meldung, Leistungen: Finden Sie mit wenigen Klicks die Informationen und Schritte, die Sie betreffen.",
    "hero.searchPh": "Wonach suchen Sie? (z. B. Unfallmeldung, Entschädigung …)",
    "hero.searchBtn": "Suchen",
    "hero.photoCaption": "Bild: ein sicheres Arbeitsumfeld für alle.",
    "hero.badgeTitle": "Unfall-Notfall",
    "hero.badgeSub": "Online-Verfahren, rund um die Uhr",
    "slide.s1": "Arbeits- und Wegeunfälle",
    "slide.s2": "Berufskrankheiten",
    "slide.s3": "Schul- und außerschulische Unfälle",
    "slide.s4": "Die elektronische Unfallmeldung",
    "slide.new": "Neu",
    "car.prev": "Vorherige Folie",
    "car.next": "Nächste Folie",
    "car.toggle": "Karussell abspielen oder pausieren",
    "qa.heading": "Schnellzugriff",
    "qa.more": "Öffnen",
    "qa.i1.title": "Einen Unfall melden",
    "qa.i1.tag": "Dringend · binnen 24 Std.",
    "qa.i1.desc": "Arbeits-, Wege- oder Schulunfall: Informieren Sie Ihren Arbeitgeber und starten Sie die Meldung.",
    "qa.i2.title": "Meine Verfahren",
    "qa.i2.desc": "Verfolgung Ihrer Akte, Entschädigungen, Übernahme der Behandlungs- und Erstattungskosten.",
    "qa.i3.title": "Präventionsempfehlungen",
    "qa.i3.desc": "Ratschläge und bewährte Verfahren zur Vermeidung der für Ihren Beruf typischen Risiken.",
    "qa.e1.title": "Einen Unfall melden",
    "qa.e1.tag": "Dringend · gesetzliche Frist",
    "qa.e1.desc": "Melden Sie den Unfall eines Mitarbeiters fristgerecht und verfolgen Sie die Akte.",
    "qa.e2.title": "Beiträge & Bonus-Malus",
    "qa.e2.desc": "Verstehen Sie Ihren Beitragssatz, das Bonus-Malus-System und den Zahlungskalender.",
    "qa.e3.title": "Prävention im Unternehmen",
    "qa.e3.desc": "Schulungen, Beratung, Qualitätslabel und Empfehlungen nach Tätigkeitsbereich.",
    "stats.eyebrow": "Kennzahlen",
    "stats.title": "Die AAA in Zahlen",
    "stats.desc": "Die Unfallversicherung schützt alle Arbeitnehmer und Schüler Luxemburgs.",
    "stat1.label": "Versicherte Personen",
    "stat1.sub": "Arbeitnehmer, Selbständige und Schüler",
    "stat2.label": "Gemeldete Unfälle / Jahr",
    "stat2.sub": "Arbeit, Weg und Schule",
    "stat3.label": "Betreute Tätigkeitsbereiche",
    "stat3.sub": "in der Gesundheitsprävention",
    "stat4.label": "Schadensersatz",
    "stat4.sub": "nahezu vollständige Übernahme",
    "stats.caption": "Richtwerte zu Demonstrationszwecken — Quelle: Jahresbericht der AAA.",
    "news.eyebrow": "Aktuelles",
    "news.title": "Im Fokus",
    "news.all": "Alle Meldungen",
    "news1.chip": "Prävention",
    "news1.date": "28. Mai 2026",
    "news1.title": "Neue Kampagne „Ein Arbeitsunfall ist vermeidbar“",
    "news2.chip": "VISION ZERO",
    "news2.date": "15. Mai 2026",
    "news2.title": "SST-Forum 2026: Die Anmeldung ist eröffnet",
    "news3.chip": "Verfahren",
    "news3.date": "06. Mai 2026",
    "news3.title": "Unfallmeldung: Das Online-Verfahren wird weiterentwickelt",
    "news4.chip": "Publikation",
    "news4.date": "22. Apr. 2026",
    "news4.title": "Jahresbericht 2025 und Statistiken verfügbar",
    "vz.eyebrow": "Co-Branding · in die AAA-Website integriert",
    "vz.title": "Auf dem Weg zu null Unfällen, null Berufskrankheiten.",
    "vz.desc": "Die nationale Strategie, die Unternehmen und Mitarbeiter rund um goldene Regeln und Grundsätze für eine echte Sicherheitskultur zusammenbringt.",
    "vz.cta": "VISION ZERO entdecken",
    "vz.s1": "Goldene Regeln",
    "vz.s2": "Präventionsgrundsätze",
    "vz.p1": "Sicherheit",
    "vz.p1sub": "Arbeitsunfälle verhüten",
    "vz.p2": "Gesundheit",
    "vz.p2sub": "Die Gesundheit der Beschäftigten schützen",
    "vz.p3": "Wohlbefinden",
    "vz.p3sub": "Das Wohlbefinden am Arbeitsplatz steigern",
    "direct.eyebrow": "Direktzugriff",
    "direct.title": "Das Wesentliche an einem Ort",
    "direct.t1.title": "Publikationen",
    "direct.t1.desc": "Broschüren, Berichte und Infoblätter zum Herunterladen.",
    "direct.t2.title": "Formulare",
    "direct.t2.desc": "Meldungen, Leistungsanträge und Bescheinigungen.",
    "direct.t3.title": "FAQ",
    "direct.t3.desc": "Antworten auf die häufigsten Fragen von Versicherten und Arbeitgebern.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Kontaktieren Sie uns",
    "contact.service": "Leistungsabteilung",
    "contact.hours": "Mo – Fr · 8:00 – 16:00 Uhr",
    "contact.cta": "Kontaktieren Sie uns",
    "ct.tel": "Telefon",
    "ct.fax": "Fax",
    "ct.mail": "E-Mail",
    "ct.aaa.title": "Unfallversicherung (AAA)",
    "ct.aaa.place": "Cité de la sécurité sociale",
    "ct.aaa.days": "von Montag bis Freitag",
    "ct.aaa.rdv": "mit oder ohne Termin",
    "ct.aaa.guichet": "(über MyGuichet)",
    "ct.aaa.hoursLabel": "Öffnungszeiten des Schalters",
    "ct.aaa.map": "Anfahrt & Lageplan",
    "ct.prest.title": "Leistungsabteilung",
    "ct.prest.note": "Bitte senden Sie Ihre Dokumente in einem lesbaren PDF-Format.",
    "ct.prest.hoursLabel": "Bürozeiten",
    "ct.prest.desc": "Aktenverfolgung, Entschädigungen und Übernahme der Behandlungskosten.",
    "ct.prev.desc": "Beratung, Schulungen und Empfehlungen zu Sicherheit & Gesundheit.",
    "ct.bonus.desc": "Beitragssatz und Bonus-Malus-System.",
    "ct.prev.title": "Präventionsabteilung",
    "ct.prev.bonus": "Bonus-Malus-Akten",
    "footer.about": "Öffentliche Einrichtung unter der Aufsicht des Ministeriums für Gesundheit und soziale Sicherheit. Prävention und Entschädigung von Arbeits-, Wegeunfällen und Berufskrankheiten.",
    "footer.c1": "Die Website",
    "footer.c2": "Hilfe & Kontakt",
    "footer.c3": "Rechtliche Hinweise",
    "footer.l.sitemap": "Sitemap",
    "footer.l.news": "Aktuelles",
    "footer.l.publications": "Publikationen",
    "footer.l.forms": "Formulare",
    "footer.l.ds": "Designsystem",
    "footer.l.faq": "FAQ",
    "footer.l.contact": "Kontakt",
    "footer.l.jobs": "Stellenangebote",
    "footer.l.a11y": "Erklärung zur Barrierefreiheit",
    "footer.l.legal": "Impressum",
    "footer.l.privacy": "Datenschutz",
    "footer.l.cookies": "Cookie-Einstellungen",
    "footer.legal": "© 2026 Unfallversicherung (AAA) — Cité de la sécurité sociale, Luxemburg.",
    "cmp.show": "Komponenten anzeigen",
    "cmp.dslink": "Designsystem ansehen"
  },
  en: {
    "util.official": "An official website of the Luxembourg State",
    "util.how": "How to recognise an official site",
    "util.a11y": "Accessibility",
    "nav.aaa": "About AAA",
    "nav.sst": "Safety & health at work",
    "nav.accidents": "Accidents & occupational diseases",
    "nav.prestations": "Benefits & contributions",
    "nav.doc": "Documentation",
    "sm.aaa.vision": "Vision", "sm.aaa.mission": "Mission", "sm.aaa.orga": "Organisation", "sm.aaa.rapport": "Annual report & statistics", "sm.aaa.iso": "Quality approach",
    "sm.sst.conseil": "OSH advice", "sm.sst.reco": "Prevention recommendations", "sm.sst.formations": "Training", "sm.sst.regl": "Regulations", "sm.sst.label": "«Sécher a Gesond» label", "sm.sst.vz": "VISION ZERO",
    "sm.acc.travail": "Work / commuting accident", "sm.acc.scolaire": "School / after-school accident", "sm.acc.maladies": "Occupational diseases",
    "sm.pre.assurees": "Insured persons", "sm.pre.indemn": "Compensation", "sm.pre.cotis": "Contributions", "sm.pre.videos": "Explanatory videos",
    "sm.doc.formulaires": "Forms", "sm.doc.publications": "Publications", "sm.doc.legis": "Legislation / Case law",
    "header.searchAria": "Search the website",
    "header.declare": "Report an accident",
    "header.menu": "Menu",
    "header.close": "Close",
    "hero.audienceLabel": "I am:",
    "hero.insured": "Insured person",
    "hero.employer": "Employer",
    "hero.title": "How can the AAA help you?",
    "hero.lead": "Prevention, reporting, benefits: find the information and steps that concern you in just a few clicks.",
    "hero.searchPh": "What are you looking for? (e.g. accident report, compensation…)",
    "hero.searchBtn": "Search",
    "hero.photoCaption": "Visual: a safe working environment for everyone.",
    "hero.badgeTitle": "Accident emergency",
    "hero.badgeSub": "Online procedures, 24/7",
    "slide.s1": "Work and commuting accidents",
    "slide.s2": "Occupational diseases",
    "slide.s3": "School and after-school accidents",
    "slide.s4": "The electronic accident report",
    "slide.new": "New",
    "car.prev": "Previous slide",
    "car.next": "Next slide",
    "car.toggle": "Play or pause the carousel",
    "qa.heading": "Quick access",
    "qa.more": "Open",
    "qa.i1.title": "Report an accident",
    "qa.i1.tag": "Urgent · within 24h",
    "qa.i1.desc": "Work, commuting or school accident: inform your employer and start the report.",
    "qa.i2.title": "My procedures",
    "qa.i2.desc": "Track your case, compensation, coverage of care and reimbursements.",
    "qa.i3.title": "Prevention recommendations",
    "qa.i3.desc": "Advice and best practices to avoid the risks specific to your profession.",
    "qa.e1.title": "Report an accident",
    "qa.e1.tag": "Urgent · legal deadline",
    "qa.e1.desc": "Report an employee's accident within the legal deadline and follow the case.",
    "qa.e2.title": "Contributions & bonus-malus",
    "qa.e2.desc": "Understand your contribution rate, the bonus-malus system and the payment schedule.",
    "qa.e3.title": "Workplace prevention",
    "qa.e3.desc": "Training, advice, quality label and recommendations by sector of activity.",
    "stats.eyebrow": "Key figures",
    "stats.title": "The AAA in figures",
    "stats.desc": "Accident insurance protects all workers and pupils in Luxembourg.",
    "stat1.label": "People covered",
    "stat1.sub": "employees, self-employed and pupils",
    "stat2.label": "Accidents reported / year",
    "stat2.sub": "work, commuting and school",
    "stat3.label": "Sectors of activity supported",
    "stat3.sub": "in health & safety prevention",
    "stat4.label": "Compensation of damages",
    "stat4.sub": "near-full coverage",
    "stats.caption": "Indicative data for mock-up purposes — source: AAA annual report.",
    "news.eyebrow": "News",
    "news.title": "Highlights",
    "news.all": "All news",
    "news1.chip": "Prevention",
    "news1.date": "28 May 2026",
    "news1.title": "New campaign “A workplace accident can be prevented”",
    "news2.chip": "VISION ZERO",
    "news2.date": "15 May 2026",
    "news2.title": "OSH Forum 2026: registration is now open",
    "news3.chip": "Procedures",
    "news3.date": "06 May 2026",
    "news3.title": "Accident reporting: the online procedure is evolving",
    "news4.chip": "Publication",
    "news4.date": "22 Apr 2026",
    "news4.title": "2025 annual report and statistics now available",
    "vz.eyebrow": "Co-branding · integrated into the AAA site",
    "vz.title": "Towards zero accidents, zero occupational diseases.",
    "vz.desc": "The national strategy that brings companies and employees together around golden rules and principles for a real culture of safety.",
    "vz.cta": "Discover VISION ZERO",
    "vz.s1": "Golden rules",
    "vz.s2": "Prevention principles",
    "vz.p1": "Safety",
    "vz.p1sub": "Prevent workplace accidents",
    "vz.p2": "Health",
    "vz.p2sub": "Protect workers' health",
    "vz.p3": "Wellbeing",
    "vz.p3sub": "Improve wellbeing at work",
    "direct.eyebrow": "Quick links",
    "direct.title": "The essentials, in one place",
    "direct.t1.title": "Publications",
    "direct.t1.desc": "Brochures, reports and information sheets to download.",
    "direct.t2.title": "Forms",
    "direct.t2.desc": "Reports, benefit applications and certificates.",
    "direct.t3.title": "FAQ",
    "direct.t3.desc": "Answers to the most frequent questions from insured persons and employers.",
    "contact.eyebrow": "Contact",
    "contact.title": "Contact us",
    "contact.service": "Benefits department",
    "contact.hours": "Mon – Fri · 8:00 am – 4:00 pm",
    "contact.cta": "Contact us",
    "ct.tel": "Phone",
    "ct.fax": "Fax",
    "ct.mail": "Email",
    "ct.aaa.title": "Accident Insurance Association",
    "ct.aaa.place": "Cité de la sécurité sociale",
    "ct.aaa.days": "Monday to Friday",
    "ct.aaa.rdv": "with or without an appointment",
    "ct.aaa.guichet": "(via MyGuichet)",
    "ct.aaa.hoursLabel": "Counter opening hours",
    "ct.aaa.map": "Map & directions",
    "ct.prest.title": "Benefits department",
    "ct.prest.note": "Please send your documents in a legible PDF format.",
    "ct.prest.hoursLabel": "Office hours",
    "ct.prest.desc": "Case tracking, compensation and coverage of care.",
    "ct.prev.desc": "Advice, training and health & safety recommendations.",
    "ct.bonus.desc": "Contribution rate and bonus-malus system.",
    "ct.prev.title": "Prevention department",
    "ct.prev.bonus": "Bonus-malus files",
    "footer.about": "Public institution under the supervision of the Ministry of Health and Social Security. Prevention and compensation of work, commuting accidents and occupational diseases.",
    "footer.c1": "The website",
    "footer.c2": "Help & contact",
    "footer.c3": "Legal information",
    "footer.l.sitemap": "Sitemap",
    "footer.l.news": "News",
    "footer.l.publications": "Publications",
    "footer.l.forms": "Forms",
    "footer.l.ds": "Design system",
    "footer.l.faq": "FAQ",
    "footer.l.contact": "Contact",
    "footer.l.jobs": "Careers",
    "footer.l.a11y": "Accessibility statement",
    "footer.l.legal": "Legal notice",
    "footer.l.privacy": "Data protection",
    "footer.l.cookies": "Cookie settings",
    "footer.legal": "© 2026 Accident Insurance Association (AAA) — Cité de la sécurité sociale, Luxembourg.",
    "cmp.show": "Show components",
    "cmp.dslink": "View the design system"
  }
};

const LANG_LABEL = { fr: "Français", de: "Deutsch", en: "English" };

function applyLang(lang) {
  const dict = I18N[lang] || I18N.fr;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const k = el.getAttribute("data-i18n-ph");
    if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const k = el.getAttribute("data-i18n-aria");
    if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  try { localStorage.setItem("aaa-lang", lang); } catch (e) {}
}

function applyAudience(aud) {
  document.querySelectorAll("[data-audience-group]").forEach((g) => {
    g.classList.toggle("is-active", g.getAttribute("data-audience-group") === aud);
  });
  document.querySelectorAll(".toggle button").forEach((b) => {
    b.setAttribute("aria-selected", String(b.dataset.aud === aud));
  });
  try { localStorage.setItem("aaa-aud", aud); } catch (e) {}
}

(function (cb) { if (document.readyState !== "loading") cb(); else document.addEventListener("DOMContentLoaded", cb); })(() => {
  // Lucide icons
  if (window.lucide) window.lucide.createIcons();

  // langue
  let lang = "fr";
  try { lang = localStorage.getItem("aaa-lang") || "fr"; } catch (e) {}
  applyLang(lang);
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });

  // public
  let aud = "insured";
  try { aud = localStorage.getItem("aaa-aud") || "insured"; } catch (e) {}
  applyAudience(aud);
  document.querySelectorAll(".toggle button").forEach((b) => {
    b.addEventListener("click", () => applyAudience(b.dataset.aud));
  });

  // overlay composants
  const cmpBtn = document.querySelector(".cmp-toggle");
  if (cmpBtn) {
    // raccourci vers la page Système de design (sauf si on y est déjà)
    let dsLink = null;
    if (!document.querySelector(".ds-shell")) {
      const lang = (function () { try { return localStorage.getItem("aaa-lang") || "fr"; } catch (e) { return "fr"; } })();
      const label = { fr: "Voir le système de design", de: "Designsystem ansehen", en: "View the design system" }[lang] || "Voir le système de design";
      dsLink = document.createElement("a");
      dsLink.className = "cmp-dslink";
      dsLink.href = "Systeme de design.html";
      dsLink.hidden = true;
      dsLink.innerHTML = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg><span data-i18n="cmp.dslink">' + label + '</span>';
      cmpBtn.parentNode.insertBefore(dsLink, cmpBtn);
    }
    cmpBtn.addEventListener("click", () => {
      const on = document.body.classList.toggle("show-components");
      cmpBtn.setAttribute("aria-pressed", String(on));
      if (dsLink) dsLink.hidden = !on;
    });
  }

  // nav mobile
  const burger = document.querySelector(".burger");
  const drawer = document.querySelector(".mobile-nav");
  if (burger && drawer) {
    const closeBtn = drawer.querySelector("[data-close]");
    const open = () => { drawer.classList.add("open"); burger.setAttribute("aria-expanded", "true"); };
    const close = () => { drawer.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
    burger.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    drawer.addEventListener("click", (e) => { if (e.target === drawer) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  // recherche démo — éviter rechargement
  document.querySelectorAll("form[data-demo]").forEach((f) => {
    f.addEventListener("submit", (e) => e.preventDefault());
  });

  // carrousel héro
  initCarousel();

  // onglets contact (AEM Tabs)
  initContactTabs();

  // sous-menus de navigation (aria-expanded + clavier)
  initNavDropdowns();
});

function initNavDropdowns() {
  document.querySelectorAll(".mainnav .has-sub").forEach((li) => {
    const top = li.querySelector(":scope > a");
    if (!top) return;
    const setExp = (v) => top.setAttribute("aria-expanded", String(v));
    li.addEventListener("mouseenter", () => setExp(true));
    li.addEventListener("mouseleave", () => setExp(false));
    li.addEventListener("focusin", () => setExp(true));
    li.addEventListener("focusout", (e) => { if (!li.contains(e.relatedTarget)) setExp(false); });
    top.addEventListener("click", (e) => { if (top.getAttribute("href") === "#0") e.preventDefault(); });
    li.addEventListener("keydown", (e) => { if (e.key === "Escape") { setExp(false); top.focus(); } });
  });
}

function initContactTabs() {
  const tablist = document.querySelector(".ct-tablist");
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
  }
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      let n = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (idx + 1) % tabs.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); tabs[n].focus(); select(tabs[n]); }
    });
  });
}

function initCarousel() {
  const car = document.querySelector(".carousel");
  if (!car) return;
  const track = car.querySelector(".carousel-track");
  const slides = Array.from(car.querySelectorAll(".hero-slide"));
  const dots = Array.from(car.querySelectorAll(".carousel-dots button"));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, timer = null, paused = false;

  function go(n) {
    i = (n + slides.length) % slides.length;
    track.style.transform = "translateX(-" + (i * 100) + "%)";
    slides.forEach((s, k) => s.setAttribute("aria-hidden", String(k !== i)));
    dots.forEach((d, k) => d.setAttribute("aria-current", String(k === i)));
  }
  const next = () => go(i + 1);
  const prev = () => go(i - 1);
  function start() { if (!reduce && !paused && !timer) timer = setInterval(next, 5500); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  function restart() { stop(); start(); }

  car.querySelector(".next").addEventListener("click", () => { next(); restart(); });
  car.querySelector(".prev").addEventListener("click", () => { prev(); restart(); });
  dots.forEach((d, k) => d.addEventListener("click", () => { go(k); restart(); }));
  const playBtn = car.querySelector(".carousel-play");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      paused = !paused;
      playBtn.classList.toggle("is-paused", paused);
      playBtn.setAttribute("aria-pressed", String(paused));
      if (paused) stop(); else start();
    });
  }
  car.addEventListener("mouseenter", stop);
  car.addEventListener("mouseleave", start);
  car.addEventListener("focusin", stop);
  car.addEventListener("focusout", start);
  car.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { next(); restart(); }
    else if (e.key === "ArrowLeft") { prev(); restart(); }
  });

  go(0);
  start();
}
