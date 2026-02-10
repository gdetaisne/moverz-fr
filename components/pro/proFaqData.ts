export const PRO_FAQS = [
  {
    question: "C’est quoi un “lead” chez vous ?",
    answer:
      "Un lead est compté dès que le client a complété son dossier (formulaire rempli). À ce stade vous avez les infos client + projet (adresses, dates, formule, contraintes).",
  },
  {
    question: "Et si le client ne signe pas avec moi ?",
    answer:
      "Moverz sert à standardiser et accélérer la constitution du dossier (preuves + docs). Si le client ne conclut pas, c’est souvent externe au tunnel (prix, projet annulé, concurrent). Si le dossier est complété, le lead est décompté de l’abonnement.",
  },
  {
    question: "Comment gérez-vous les doublons ?",
    answer:
      "Un client = un dossier. Le client peut modifier son dossier : cela n’impacte pas la facturation. Nous pouvons définir une règle d’unicité (ex: contact + société + période) pour éviter les doublons.",
  },
  {
    question: "Est-ce que je peux vraiment supprimer les visites techniques ?",
    answer:
      "Dans la majorité des cas, oui. Le dossier est standardisé et complété par des documents (inventaire, déclaration de valeur). En cas de doute (accès critique / cas hors norme), vous gardez une voie de secours (appel court, ou visite).",
  },
  {
    question: "Et si l'IA se trompe / n'arrive pas à analyser ?",
    answer:
      "Best effort : si l'IA est en erreur ou incertaine, le dossier reste exploitable et vous gardez la main dans le backoffice. Nous prévoyons toujours une voie de secours (forçage / correction).",
  },
  {
    question: "Qu'est-ce que j'exporte concrètement ?",
    answer:
      "Dossier en PDF, déclaration de valeur en PDF, inventaire en Excel. Et pour vos outils : export CSV des tables leads/dossiers (Starter/Pro).",
  },
  {
    question: "RGPD : où sont hébergées les données ? Combien de temps gardez-vous les dossiers ?",
    answer:
      "Hébergement en Europe. Les dossiers sont conservés le temps nécessaire au traitement du projet, puis anonymisés (suppression des éléments identifiants, conservation éventuelle de données agrégées).",
  },
] as const;

