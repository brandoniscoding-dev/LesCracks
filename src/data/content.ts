import { Language } from '../hooks/useLanguage';

export const content = {
  fr: {
    nav: {
      why: 'Pourquoi',
      method: 'Méthode',
      testimonials: 'Témoignages',
      faq: 'FAQ',
      join: 'Go Maintenant',
      home: 'Accueil'
    },
    hero: {
      title: 'Tes idées dorment encore ?',
      subtitle: 'Réveille-les avec un accompagnement qui te fait décoller !',
      description: 'Arrête de rêver, commence à créer. On transforme tes idées en projets concrets qui impressionnent.',
      primaryCta: 'Lance-toi !',
      secondaryCta: 'Voir comment',
      emailPlaceholder: 'Ton email pour démarrer',
      emailCta: 'Go !',
      scrollHint: 'Découvre la magie',
      projectsCount: '120+ projets lancés',
      satisfaction: '95% de satisfaction'
    },
    why: {
      title: 'Pourquoi tu bloques ?',
      subtitle: 'On connaît ces galères qui t\'empêchent de percer',
      items: [
        {
          title: 'Trop d\'idées, zéro direction',
          description: 'Tu as 50 projets en tête mais tu ne sais pas par où commencer',
          icon: '🧠'
        },
        {
          title: 'Pas de méthode claire',
          description: 'Tu codes, tu designs, mais sans structure ça part dans tous les sens',
          icon: '📋'
        },
        {
          title: 'Peur de rater',
          description: 'Et si c\'était nul ? Et si personne n\'aimait ? Tu procrastines par peur',
          icon: '💔'
        },
        {
          title: 'Réseau pro inexistant',
          description: 'Tu bosses seul dans ton coin, sans feedback ni opportunités',
          icon: '🌐'
        }
      ],
      cta: 'Résous ça maintenant'
    },
    whatYouGet: {
      title: 'Ce que tu gagnes',
      subtitle: 'Des résultats concrets qui changent ta vie',
      items: [
        {
          title: 'Un projet qui claque',
          description: 'Portfolio professionnel qui impressionne les recruteurs et clients',
          benefit: 'Crédibilité instantanée',
          icon: '🚀'
        },
        {
          title: 'Un coach qui te booste',
          description: 'Accompagnement personnalisé avec un mentor qui croit en toi',
          benefit: 'Confiance retrouvée',
          icon: '🤓'
        },
        {
          title: 'Un réseau qui t\'ouvre des portes',
          description: 'Connexions directes avec des pros qui peuvent t\'embaucher',
          benefit: 'Opportunités concrètes',
          icon: '🔗'
        }
      ],
      cta: 'Démarre ton projet'
    },
    method: {
      title: 'Notre méthode qui marche',
      subtitle: 'Simple, efficace, et ça donne des résultats',
      steps: [
        {
          title: 'On capte tes galères',
          description: 'Diagnostic complet de ta situation et de tes objectifs',
          duration: '1 semaine',
          deliverable: 'Plan d\'action personnalisé',
          icon: '🔍'
        },
        {
          title: 'Tu bosses direct',
          description: 'Formation pratique sur un vrai projet avec coaching quotidien',
          duration: '4-8 semaines',
          deliverable: 'Compétences opérationnelles',
          icon: '⌨️'
        },
        {
          title: 'Un projet prêt à briller',
          description: 'Portfolio professionnel qui démontre tes nouvelles capacités',
          duration: '2-4 semaines',
          deliverable: 'Portfolio qui impressionne',
          icon: '🏆'
        },
        {
          title: 'Des connexions pro',
          description: 'Mise en relation avec des opportunités qui matchent ton profil',
          duration: 'En continu',
          deliverable: 'Opportunités réelles',
          icon: '🤝'
        }
      ],
      cta: 'Voir la méthode en action'
    },
    testimonials: {
      title: 'Ils ont explosé leurs limites',
      subtitle: 'Leurs succès parlent d\'eux-mêmes',
      items: [
        {
          name: 'Awa',
          role: 'Designer UI/UX',
          company: 'Freelance',
          quote: 'Mon portfolio a décollé, j\'ai 3 contrats en cours ! Avant j\'avais zéro client.',
          result: '+300% de revenus',
          image: 'designer'
        },
        {
          name: 'Kofi',
          role: 'Développeur',
          company: 'Startup',
          quote: 'Projet fini en 1 mois, trop fier ! Maintenant je bosse dans une startup qui cartonne.',
          result: 'Premier CDI décroché',
          image: 'developer'
        },
        {
          name: 'Léa',
          role: 'Étudiante',
          company: 'École d\'ingé',
          quote: 'J\'ai lancé mon idée avant ma soutenance ! Le jury était bluffé par mon portfolio.',
          result: 'Projet étudiant primé',
          image: 'student'
        },
        {
          name: 'Mamadou',
          role: 'En reconversion',
          company: 'Ex-Commerce',
          quote: 'Transition réussie vers la tech ! 6 mois après, j\'ai mon job de rêve.',
          result: 'Reconversion réussie',
          image: 'career-change'
        },
        {
          name: 'Sarah',
          role: 'Entrepreneur',
          company: 'Fondatrice',
          quote: 'Mon MVP est sorti en 2 mois ! L\'accompagnement m\'a fait gagner un temps fou.',
          result: 'Startup lancée',
          image: 'entrepreneur'
        },
        {
          name: 'Alex',
          role: 'Freelance',
          company: 'Indépendant',
          quote: 'Première mission trouvée grâce à eux ! Le réseau et les conseils ont tout changé.',
          result: '+150% de tarifs',
          image: 'freelancer'
        }
      ],
      cta: 'Voir plus de succès'
    },
    about: {
      title: 'Qui se cache derrière 🤓 ?',
      subtitle: 'L\'équipe qui va transformer ta vie',
      name: 'Kamga Brandon',
      role: 'Mentor Principal & Fondateur',
      speciality: 'Full Stack AI & DevOps',
      bio: 'Passionné par l\'accompagnement depuis +4 ans. J\'ai aidé le maximum des jeunes à se demarquer et passer a l\' action. Ma mission : révéler ton potentiel et te connecter aux bonnes opportunités.',
      experience: '3+ ans d\'expérience',
      projects: '200+ projets accompagnés',
      satisfaction: '99% de satisfaction',
      values: {
        title: 'Mes valeurs',
        items: [
          'Bienveillance et écoute active',
          'Résultats concrets garantis',
          'Accompagnement 100% personnalisé',
          'Réseau pro activé pour toi'
        ]
      },
      cta: 'Parler avec Brandon'
    },
    concerned: {
      title: 'Tu es concerné si...',
      subtitle: 'Ces situations te parlent ? C\'est exactement pour toi !',
      items: [
        {
          text: 'Tu accumules les projets inachevés',
          icon: '📁',
          detail: 'Trop d\'idées, pas assez de finalisation'
        },
        {
          text: 'Tu veux enfin passer à l\'action',
          icon: '🚀',
          detail: 'L\'envie d\'agir est là, il manque la méthode'
        },
        {
          text: 'Tu cherches un mentor bienveillant',
          icon: '🤝',
          detail: 'L\'accompagnement humain fait la différence'
        },
        {
          text: 'Tu veux connecter tes skills au marché',
          icon: '🎯',
          detail: 'Transformer ton potentiel en opportunités'
        },
        {
          text: 'Tu procrastines malgré ta motivation',
          icon: '⏰',
          detail: 'La structure externe t\'aidera à passer à l\'action'
        },
        {
          text: 'Tu veux un portfolio qui impressionne',
          icon: '✨',
          detail: 'Montrer ce dont tu es vraiment capable'
        }
      ],
      cta: 'C\'est moi, je veux démarrer'
    },
    faq: {
      title: 'Questions qui reviennent souvent',
      subtitle: 'Toutes les réponses pour lever tes doutes',
      items: [
        {
          question: 'C\'est une formation ?',
          answer: 'Non, c\'est un accompagnement concret ! Plutôt que des cours théoriques, on t\'aide à réaliser un vrai projet. Tu apprends en faisant, avec un mentor qui s\'adapte à ton rythme.'
        },
        {
          question: 'Ça prend combien de temps ?',
          answer: 'À ton rythme, on va vite ! Entre 3 et 6 mois selon ton projet. Que tu aies 5h ou 20h par semaine, on structure l\'accompagnement pour maximiser ton temps.'
        },
        {
          question: 'Comment ça marche ?',
          answer: 'Coach perso, étapes claires ! Sessions individuelles, travail guidé, points réguliers. Tu as accès à ton mentor via plusieurs canaux et on organise des sessions de groupe.'
        },
        {
          question: 'Quel niveau technique faut-il ?',
          answer: 'Aucun niveau requis ! On accompagne débutants comme expérimentés. Notre méthode s\'adapte à ton niveau pour te faire progresser efficacement.'
        },
        {
          question: 'Et après l\'accompagnement ?',
          answer: 'Tu repars avec un projet concret, un portfolio pro et un réseau activé ! On continue à te soutenir et tu rejoins notre communauté d\'alumni.'
        },
        {
          question: 'C\'est combien ?',
          answer: 'Plusieurs formules selon tes besoins et budget. Contacte-nous pour une évaluation gratuite et découvrir la formule qui te correspond.'
        }
      ],
      cta: 'Encore une question ? Contacte-nous !'
    },
    finalCta: {
      title: 'Stop les excuses.',
      subtitle: 'Lance ton rêve maintenant !',
      description: 'Ne laisse plus tes idées moisir dans ta tête. Avec nous, transforme-les en projets concrets qui changent ta vie.',
      primaryCta: 'Go Maintenant !',
      secondaryCta: 'Parle à un coach',
      guarantee: 'Satisfaction garantie',
      urgency: 'Places limitées ce mois',
      emailPlaceholder: 'Ton email pour commencer',
      emailCta: 'Démarrer'
    },
    stats: {
      projects: 'Projets lancés',
      satisfaction: 'Satisfaction',
      responseTime: 'Réponse rapide',
      placement: 'Taux de réussite',
      liveProjects: 'Projets lancés aujourd\'hui'
    },
    ui: {
      loading: 'Chargement...',
      error: 'Oups, une erreur !',
      retry: 'Réessayer',
      close: 'Fermer',
      next: 'Suivant',
      previous: 'Précédent',
      readMore: 'Lire la suite',
      readLess: 'Réduire',
      swipeToSeeMore: 'Glisse pour voir plus',
      scrollToTop: 'Retour en haut',
      moreQuestions: 'D\'autres questions ? Parlons-en !',
      askQuestion: 'Poser une question',
      allRightsReserved: 'Tous droits réservés.',
      legalNotice: 'Mentions légales',
      privacy: 'Confidentialité',
      terms: 'CGU',
      contact: 'Contact',
      followUs: 'Suis-nous',
      newsletter: 'Newsletter',
      subscribe: 'S\'abonner',
      menu: 'Menu',
      closeMenu: 'Fermer le menu'
    }
  }
};

export const getContent = (language: Language) => content[language];