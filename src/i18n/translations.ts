import type { Lang } from './types';

const en = {
  meta: {
    title: 'AccessEd — Give every learner a fair chance',
  },
  nav: {
    home: 'Home',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    signin: 'Sign in',
    getStarted: 'Get started',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch language',
  },
  footer: {
    tagline: 'Adapted learning materials, reviewed and approved by you.',
    quickLinks: 'Quick links',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    rights: 'All rights reserved.',
    madeFor: 'Built for educators',
  },
  home: {
    hero: {
      eyebrow: 'Accessible education, made simple',
      headline: 'Give every learner a fair chance',
      subheadline: 'AccessEd takes an ordinary homework sheet, quiz or exam and produces adapted versions for students who learn differently — reviewed and approved by you, every time.',
      ctaPrimary: 'Start free',
      ctaSecondary: 'See how it works',
      visualLabel: 'One document → multiple accessible versions',
      visualOriginal: 'Original document',
      visualAdapted: 'Adapted versions',
      visualBadge: 'Teacher-approved',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'Four steps from worksheet to accessible',
      subtitle: 'No new workflow to learn — AccessEd fits into how you already prepare materials.',
      steps: [
        { title: 'Upload your document', desc: 'Paste text, or upload a PDF, DOCX or TXT file — whatever you already use.' },
        { title: 'Add your students and their needs', desc: 'Tell AccessEd who needs what: dyslexia-friendly fonts, extended time, simplified language and more.' },
        { title: 'Generate adapted versions', desc: 'AccessEd produces tailored variants, grouped automatically so nothing is duplicated unnecessarily.' },
        { title: 'Review, edit and approve', desc: 'Nothing is shared until you have reviewed and approved it. You are always in control.' },
      ],
    },
    features: {
      eyebrow: 'Built for how you already teach',
      title: 'Transparent, controllable, private',
      cards: [
        {
          title: 'Transparent adaptations',
          desc: 'See exactly how AccessEd adapts each document, in plain language — no hidden black-box prompts, and you can edit the rules to match your school\u2019s policy.',
        },
        {
          title: 'You\u2019re always in control',
          desc: 'Nothing reaches a student without your review and approval.',
        },
        {
          title: 'Privacy by design',
          desc: 'Show students as \u2018Student A / B\u2019 instead of real names, and set how long data is kept.',
        },
      ],
    },
    accommodations: {
      eyebrow: 'Supported needs',
      title: 'Accommodations for every learner',
      subtitle: 'AccessEd supports a wide range of learning needs. Each adaptation is configurable and teacher-approved.',
      tags: ['Dyslexia', 'ADHD', 'Visual impairment', 'Hearing impairment', 'EAL / ESL', 'Processing speed / extended time', 'Anxiety', 'Physical / motor difficulties', 'Gifted / 2e enrichment'],
    },
    whoFor: {
      eyebrow: 'Who it\u2019s for',
      title: 'Whether you teach alone or lead a team',
      cards: [
        {
          title: 'Individual teachers',
          desc: 'Your own private workspace. Upload, adapt, review, done.',
          link: 'See Individual pricing',
        },
        {
          title: 'Schools & teams',
          desc: 'Admins manage classrooms and teachers; teachers focus on their own assigned classes.',
          link: 'See Enterprise pricing',
        },
      ],
    },
    ctaBand: {
      title: 'Ready to make your materials work for every student?',
      subtitle: 'Start free — no credit card, no commitment.',
      button: 'Get started',
    },
  },
  pricing: {
    hero: {
      eyebrow: 'Pricing',
      title: 'Simple plans for teachers and schools',
      subtitle: 'Start free and upgrade when you need collaboration. No hidden fees.',
    },
    individual: {
      name: 'Individual',
      tagline: 'For one teacher who wants their own private workspace',
      price: '\u20AC X',
      period: '/ month',
      cta: 'Start free',
      features: [
        'Unlimited document uploads',
        'Student needs tracking',
        'All accommodation types',
        'Review & approve workflow',
        'Export as PDF / DOCX / TXT',
        'Pseudonymized student IDs',
        'Configurable data retention',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      tagline: 'For schools and teams who want to work together',
      price: 'Custom',
      period: '',
      recommended: 'Recommended',
      cta: 'Contact sales',
      features: [
        'Everything in Individual, plus:',
        'Admin dashboard',
        'Invite & manage teacher accounts',
        'Assign teachers to classrooms',
        'Organization-wide audit log',
        'Organization-level retention & policy settings',
        'Priority support',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Is student data used to train AI models?',
          a: 'No. Student data and documents are never used to train or fine-tune any AI model.',
        },
        {
          q: 'Who is the data controller?',
          a: 'Your school remains the data controller; AccessEd acts as a data processor under a Data Processing Agreement.',
        },
        {
          q: 'Can I switch from Individual to Enterprise later?',
          a: 'Yes. You can start on the Individual plan and move to Enterprise at any time — your documents and student profiles carry over.',
        },
        {
          q: 'Where is data hosted?',
          a: 'All data is hosted in the EU/EEA, on infrastructure that is GDPR-aligned.',
        },
        {
          q: 'Do students need their own accounts?',
          a: 'No. Students never log in. Teachers manage their profiles and accommodations on their behalf.',
        },
        {
          q: 'Can I control how long data is kept?',
          a: 'Yes. You can configure retention periods for documents and student data, at the individual or organization level.',
        },
      ],
    },
  },
  about: {
    hero: {
      eyebrow: 'About us',
      title: 'Every student deserves to show what they know',
      mission: 'AccessEd exists because every student deserves to show what they know — not to be held back by a format that wasn\u2019t built for them. We believe accommodations should be consistent, quick to produce, and always under the teacher\u2019s control.',
    },
    why: {
      eyebrow: 'Why we built this',
      title: 'The problem and our approach',
      problem: {
        title: 'The problem',
        desc: 'Accommodations today are often manual, inconsistent, and time-consuming. Teachers spend hours rewriting the same worksheet for different learners — and even then, quality varies. Students who need accommodations wait longer, get less, or get materials that don\u2019t truly match their needs.',
      },
      approach: {
        title: 'Our approach',
        desc: 'AccessEd uses AI to produce adapted versions quickly, but every adaptation is teacher-reviewed before it reaches a student. We are privacy-first: student data is pseudonymized by default, never used for model training, and hosted in the EU. The teacher is always the decision-maker — never the AI.',
      },
    },
    principles: {
      eyebrow: 'Our principles',
      title: 'What guides every decision we make',
      cards: [
        {
          title: 'Teachers stay in control',
          desc: 'Human review is always required. The AI proposes; the teacher decides.',
        },
        {
          title: 'Access, not answers',
          desc: 'Accommodations change format, not rigor. We never inflate or deflate difficulty without an explicit teacher choice.',
        },
        {
          title: 'Privacy by default',
          desc: 'Data minimization, pseudonymization options, and no AI training on student data — ever.',
        },
        {
          title: 'Built with educators',
          desc: 'Feedback-driven and transparent adaptation rules. We build with teachers, not at them.',
        },
      ],
    },
    team: {
      eyebrow: 'The team',
      title: 'A small team, a big mission',
      desc: 'AccessEd is built by a small team passionate about accessible education. We work with teachers, SENCOs and school leaders to make sure the tool fits real classrooms — not the other way around.',
    },
    cta: {
      title: 'Want to learn more?',
      button: 'Contact us',
    },
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      subtitle: 'We\u2019d love to hear from you — whether you\u2019re a teacher with a question or a school leader exploring AccessEd.',
    },
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      organization: 'Organization (optional)',
      organizationPlaceholder: 'School or company name',
      subject: 'Subject',
      subjects: {
        general: 'General inquiry',
        sales: 'Sales',
        support: 'Support',
        press: 'Press',
      },
      message: 'Message',
      messagePlaceholder: 'How can we help?',
      submit: 'Send message',
      sending: 'Sending\u2026',
      successTitle: 'Thank you!',
      successMessage: 'We\u2019ve received your message and will get back to you soon.',
      sendAnother: 'Send another message',
      enterprisePrompt: 'Interested in AccessEd for your school? Tell us a bit about your team and we\u2019ll be in touch.',
      errors: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please enter a message.',
      },
    },
    direct: {
      text: 'or email us directly at',
      email: 'hello@accessed.app',
    },
  },
  legal: {
    privacy: {
      title: 'Privacy Policy',
      comingSoon: 'Our full Privacy Policy will be available here soon. In the meantime, feel free to contact us with any questions at hello@accessed.app.',
    },
    terms: {
      title: 'Terms of Service',
      comingSoon: 'Our full Terms of Service will be available here soon. In the meantime, feel free to contact us with any questions at hello@accessed.app.',
    },
    back: 'Back to home',
  },
  common: {
    learnMore: 'Learn more',
  },
};

type Dict = typeof en;

const el: Dict = {
  meta: {
    title: 'AccessEd — Δώστε σε κάθε μαθητή μια δίκαι ευκαιρία',
  },
  nav: {
    home: 'Αρχική',
    pricing: 'Τιμές',
    about: 'Σχετικά',
    contact: 'Επικοινωνία',
    signin: 'Σύνδεση',
    getStarted: 'Ξεκινήστε',
    openMenu: 'Άνοιγμα μενού',
    closeMenu: 'Κλείσιμο μενού',
    switchLanguage: 'Αλλαγή γλώσσας',
  },
  footer: {
    tagline: 'Προσαρμοσμένο υλικό μάθησης, ελεγμένο και εγκεκριμένο από εσάς.',
    quickLinks: 'Σύνδεσμοι',
    legal: 'Νομικά',
    privacy: 'Πολιτική Απορρήτου',
    terms: 'Όροι Χρήσης',
    contact: 'Επικοινωνία',
    rights: 'Με επιφύλαξη κάθε δικαιώματος.',
    madeFor: 'Φτιαγμένο για εκπαιδευτικούς',
  },
  home: {
    hero: {
      eyebrow: 'Προσβάσιμη εκπαίδευση, απλά',
      headline: 'Δώστε σε κάθε μαθητή μια δίκαι ευκαιρία',
      subheadline: 'Το AccessEd παίρνει ένα συνηθισμένο φύλλο εργασίας, κουίζ ή διαγώνισμα και παράγει προσαρμοσμένες εκδοχές για μαθητές που μαθαίνουν διαφορετικά — ελεγμένες και εγκεκριμένες από εσάς, κάθε φορά.',
      ctaPrimary: 'Ξεκινήστε δωρεάν',
      ctaSecondary: 'Δείτε πώς λειτουργεί',
      visualLabel: 'Ένα έγγραφο → πολλές προσβάσιμες εκδοχές',
      visualOriginal: 'Αρχικό έγγραφο',
      visualAdapted: 'Προσαρμοσμένες εκδοχές',
      visualBadge: 'Εγκεκριμένο από εκπαιδευτικό',
    },
    howItWorks: {
      eyebrow: 'Πώς λειτουργεί',
      title: 'Τέσσερα βήματα από φύλλο εργασίας σε προσβάσιμο',
      subtitle: 'Δεν χρειάζεται να μάθετε νέα διαδικασία — το AccessEd προσαρμόζεται στον τρόπο που ήδη ετοιμάζετε υλικό.',
      steps: [
        { title: 'Ανεβάστε το έγγραφό σας', desc: 'Επικολλήστε κείμενο ή ανεβάστε αρχείο PDF, DOCX ή TXT — ό,τι ήδη χρησιμοποιείτε.' },
        { title: 'Προσθέστε τους μαθητές και τις ανάγκες τους', desc: 'Πείτε στο AccessEd ποιος χρειάζει τι: γραμματοσειρές φιλικές προς δυσλεξικούς, επιπλέον χρόνος, απλοποιημένη γλώσσα και άλλα.' },
        { title: 'Δημιουργήστε προσαρμοσμένες εκδοχές', desc: 'Το AccessEd παράγει προσαρμοσμένες παραλλαγές, ομαδοποιημένες αυτόματα ώστε να μην υπάρχουν περιττά διπλότυπα.' },
        { title: 'Ελέγξτε, διορθώστε και εγκρίνετε', desc: 'Τίποτα δεν μοιράζεται μέχρι να το έχετε ελέγξει και εγκρίνει. Έχετε πάντα τον έλεγχο.' },
      ],
    },
    features: {
      eyebrow: 'Φτιαγμένο για τον τρόπο που ήδη διδάσκετε',
      title: 'Διαφανές, ελεγχόμενο, ιδιωτικό',
      cards: [
        {
          title: 'Διαφανείς προσαρμογές',
          desc: 'Δείτε ακριβώς πώς το AccessEd προσαρμόζει κάθε έγγραφο, σε απλή γλώσσα — χωρίς κρυφές εντολές, και μπορείτε να επεξεργαστείτε τους κανόνες για να ταιριάζουν στην πολιτική του σχολείου σας.',
        },
        {
          title: 'Έχετε πάντα τον έλεγχο',
          desc: 'Τίποτα δεν φτάνει σε μαθητή χωρίς τον έλεγχο και την έγκρισή σας.',
        },
        {
          title: 'Ιδιωτικότητα εκ σχεδιασμού',
          desc: 'Δείξτε τους μαθητές ως «Μαθητής Α / Β» αντί για πραγματικά ονόματα, και ορίστε πόσο καιρό κρατούνται τα δεδομένα.',
        },
      ],
    },
    accommodations: {
      eyebrow: 'Υποστηριζόμενες ανάγκες',
      title: 'Προσαρμογές για κάθε μαθητή',
      subtitle: 'Το AccessEd υποστηρίζει ευρύ φάσμα μαθησιακών αναγκών. Κάθε προσαρμογή είναι ρυθμιζόμενη και εγκεκριμένη από τον εκπαιδευτικό.',
      tags: ['Δυσλεξία', 'ADHD', 'Όραση', 'Ακοή', 'Ελληνικά ως δεύτερη γλώσσα (EAL/ESL)', 'Ταχύτητα επεξεργασίας / επιπλέον χρόνος', 'Άγχος', 'Κινητικές δυσκολίες', 'Ταλαντούχοι / 2e εμπλουτισμός'],
    },
    whoFor: {
      eyebrow: 'Για ποιον είναι',
      title: 'Είτε διδάσκετε μόνος είτε ηγείστε ομάδας',
      cards: [
        {
          title: 'Ατομικοί εκπαιδευτικοί',
          desc: 'Ο δικός σας ιδιωτικός χώρος εργασίας. Ανεβάστε, προσαρμόστε, ελέγξτε, έτοιμο.',
          link: 'Δείτε τιμές ατομικού',
        },
        {
          title: 'Σχολεία & ομάδες',
          desc: 'Οι διαχειριστές διαχειρίζονται τάξεις και εκπαιδευτικούς· οι εκπαιδευτικοί εστιάζουν στις δικές τους τάξεις.',
          link: 'Δείτε τιμές Enterprise',
        },
      ],
    },
    ctaBand: {
      title: 'Έτοιμοι να κάνετε το υλικό σας να λειτουργεί για κάθε μαθητή;',
      subtitle: 'Ξεκινήστε δωρεάν — χωρίς πιστωτική κάρτα, χωρίς δέσμευση.',
      button: 'Ξεκινήστε',
    },
  },
  pricing: {
    hero: {
      eyebrow: 'Τιμές',
      title: 'Απλά πακέτα για εκπαιδευτικούς και σχολεία',
      subtitle: 'Ξεκινήστε δωρεάν και αναβαθμίστε όταν χρειάζεστε συνεργασία. Χωρίς κρυφές χρεώσεις.',
    },
    individual: {
      name: 'Ατομικό',
      tagline: 'Για έναν εκπαιδευτικό που θέλει τον δικό του ιδιωτικό χώρο',
      price: '\u20AC X',
      period: '/ μήνα',
      cta: 'Ξεκινήστε δωρεάν',
      features: [
        'Απεριόριστα ανεβάσματα εγγράφων',
        'Καταγραφή αναγκών μαθητών',
        'Όλοι οι τύποι προσαρμογής',
        'Ροή ελέγχου & έγκρισης',
        'Εξαγωγή ως PDF / DOCX / TXT',
        'Ψευδώνυμα αναγνωριστικά μαθητών',
        'Ρυθμιζόμενη διατήρηση δεδομένων',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      tagline: 'Για σχολεία και ομάδες που θέλουν να συνεργαστούν',
      price: 'Επικοινωνία',
      period: '',
      recommended: 'Προτείνεται',
      cta: 'Επικοινωνία πωλήσεων',
      features: [
        'Όλα όσα περιλαμβάνει το Ατομικό, συν:',
        'Πίνακας διαχειριστή',
        'Πρόσκληση & διαχείριση λογαριασμών εκπαιδευτικών',
        'Ανάθεση εκπαιδευτικών σε τάξεις',
        'Καταγραφή ελέγχου οργανισμού',
        'Ρυθμίσεις διατήρησης & πολιτικής οργανισμού',
        'Υποστήριξη προτεραιότητας',
      ],
    },
    faq: {
      eyebrow: 'Συχνές ερωτήσεις',
      title: 'Συχνές ερωτήσεις',
      items: [
        {
          q: 'Χρησιμοποιούνται τα δεδομένα μαθητών για εκπαίδευση μοντέλων AI;',
          a: 'Όχι. Τα δεδομένα μαθητών και τα έγγραφα δεν χρησιμοποιούνται ποτέ για εκπαίδευση ή βελτιστοποίηση κανενός μοντέλου AI.',
        },
        {
          q: 'Ποιος είναι ο υπεύθυνος επεξεργασίας δεδομένων;',
          a: 'Το σχολείο σας παραμένει ο υπεύθυνος επεξεργασίας δεδομένων· το AccessEd λειτουργεί ως εκτελών την επεξεργασία βάσει Συμφωνίας Επεξεργασίας Δεδομένων.',
        },
        {
          q: 'Μπορώ να αλλάξω από Ατομικό σε Enterprise αργότερα;',
          a: 'Ναι. Μπορείτε να ξεκινήσετε με το ατομικό πακέτο και να μεταβείτε στο Enterprise οποτεδήποτε — τα έγγραφα και τα προφίλ μαθητών μεταφέρονται.',
        },
        {
          q: 'Πού φιλοξενούνται τα δεδομένα;',
          a: 'Όλα τα δεδομένα φιλοξενούνται στην ΕΕ/ΕΟΧ, σε υποδομή σύμφωνη με τον GDPR.',
        },
        {
          q: 'Χρειάζονται οι μαθητές δικό τους λογαριασμό;',
          a: 'Όχι. Οι μαθητές δεν συνδέονται ποτέ. Οι εκπαιδευτικοί διαχειρίζονται τα προφίλ και τις προσαρμογές τους.',
        },
        {
          q: 'Μπορώ να ελέγξω πόσο καιρό κρατούνται τα δεδομένα;',
          a: 'Ναι. Μπορείτε να ρυθμίσετε τις περιόδους διατήρησης για έγγραφα και δεδομένα μαθητών, σε ατομικό ή οργανισμιακό επίπεδο.',
        },
      ],
    },
  },
  about: {
    hero: {
      eyebrow: 'Σχετικά με εμάς',
      title: 'Κάθε μαθητής αξίζει να δείξει τι ξέρει',
      mission: 'Το AccessEd υπάρχει επειδή κάθε μαθητής αξίζει να δείξει τι ξέρει — όχι να εμποδίζεται από μια μορφή που δεν φτιάχτηκε για αυτόν. Πιστεύουμε ότι οι προσαρμογές πρέπει να είναι σταθερές, γρήγορες στην παραγωγή και πάντα υπό τον έλεγχο του εκπαιδευτικού.',
    },
    why: {
      eyebrow: 'Γιατί το φτιάξαμε',
      title: 'Το πρόβλημα και η προσέγγισή μας',
      problem: {
        title: 'Το πρόβλημα',
        desc: 'Οι προσαρμογές σήμερα είναι συχνά χειροκίνητες, ασυνεπείς και χρονοβόρες. Οι εκπαιδευτικοί ξοδεύουν ώρες ξαναγράφοντας το ίδιο φύλλο εργασίας για διαφορετικούς μαθητές — και ακόμα κι τότε, η ποιότητα ποικίλλει. Οι μαθητές που χρειάζονται προσαρμογές περιμένουν περισσότερο, παίρνουν λιγότερα, ή παίρνουν υλικό που δεν ταιριάζει πραγματικά στις ανάγκες τους.',
      },
      approach: {
        title: 'Η προσέγγισή μας',
        desc: 'Το AccessEd χρησιμοποιεί AI για να παράγει προσαρμοσμένες εκδοχές γρήγορα, αλλά κάθε προσαρμογή ελέγχεται από τον εκπαιδευτικό πριν φτάσει σε μαθητή. Είμαστε ιδιωτικότητα-πρώτα: τα δεδομένα μαθητών είναι ψευδώνυμα εξ ορισμού, δεν χρησιμοποιούνται ποτέ για εκπαίδευση μοντέλων, και φιλοξενούνται στην ΕΕ. Ο εκπαιδευτικός είναι πάντα ο αποφασίζων — ποτέ το AI.',
      },
    },
    principles: {
      eyebrow: 'Οι αρχές μας',
      title: 'Τι καθοδηγεί κάθε απόφασή μας',
      cards: [
        {
          title: 'Οι εκπαιδευτικοί έχουν τον έλεγχο',
          desc: 'Ο ανθρώπινος έλεγχος είναι πάντα υποχρεωτικός. Το AI προτείνει· ο εκπαιδευτικός αποφασίζει.',
        },
        {
          title: 'Πρόσβαση, όχι απαντήσεις',
          desc: 'Οι προσαρμογές αλλάζουν τη μορφή, όχι τη δυσκολία. Δεν αυξάνουμε ή μειώνουμε ποτέ τη δυσκολία χωρίς ρητή επιλογή του εκπαιδευτικού.',
        },
        {
          title: 'Ιδιωτικότητα εξ ορισμού',
          desc: 'Ελαχιστοποίηση δεδομένων, επιλογές ψευδωνύμων, και καμία εκπαίδευση AI σε δεδομένα μαθητών — ποτέ.',
        },
        {
          title: 'Φτιαγμένο με εκπαιδευτικούς',
          desc: 'Κανόνες προσαρμογής βασισμένους σε ανατροφοδότηση και διαφανείς. Φτιάχνουμε με εκπαιδευτικούς, όχι πάνω τους.',
        },
      ],
    },
    team: {
      eyebrow: 'Η ομάδα',
      title: 'Μια μικρή ομάδα, μια μεγάλη αποστολή',
      desc: 'Το AccessEd φτιάχνεται από μια μικρή ομάδα παθιασμένη με την προσβάσιμη εκπαίδευση. Συνεργαζόμαστε με εκπαιδευτικούς, συντονιστές ΕΑΕ και διευθυντές σχολείων για να σιγουρευτούμε ότι το εργαλείο ταιριάζει σε πραγματικές τάξεις — όχι το αντίστροφο.',
    },
    cta: {
      title: 'Θέλετε να μάθετε περισσότερα;',
      button: 'Επικοινωνήστε μαζί μας',
    },
  },
  contact: {
    hero: {
      eyebrow: 'Επικοινωνία',
      title: 'Επικοινωνήστε μαζί μας',
      subtitle: 'Θα χαρούμε να ακούσουμε από εσάς — είτε είστε εκπαιδευτικός με ερώτηση είτε διευθυντής σχολείου που εξερευνά το AccessEd.',
    },
    form: {
      name: 'Όνομα',
      namePlaceholder: 'Το όνομά σας',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      organization: 'Οργανισμός (προαιρετικά)',
      organizationPlaceholder: 'Όνομα σχολείου ή εταιρείας',
      subject: 'Θέμα',
      subjects: {
        general: 'Γενική ερώτηση',
        sales: 'Πωλήσεις',
        support: 'Υποστήριξη',
        press: 'Τύπος',
      },
      message: 'Μήνυμα',
      messagePlaceholder: 'Πώς μπορούμε να βοηθήσουμε;',
      submit: 'Αποστολή μηνύματος',
      sending: 'Αποστολή\u2026',
      successTitle: 'Ευχαριστούμε!',
      successMessage: 'Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε σύντομα.',
      sendAnother: 'Στείλτε άλλο μήνυμα',
      enterprisePrompt: 'Ενδιαφέρεστε για το AccessEd για το σχολείο σας; Πείτε μας λίγα για την ομάδα σας και θα επικοινωνήσουμε.',
      errors: {
        nameRequired: 'Παρακαλώ εισάγετε το όνομά σας.',
        emailRequired: 'Παρακαλώ εισάγετε το email σας.',
        emailInvalid: 'Παρακαλώ εισάγετε έγκυρο email.',
        messageRequired: 'Παρακαλώ εισάγετε μήνυμα.',
      },
    },
    direct: {
      text: 'ή στείλτε μας email απευθείας στο',
      email: 'hello@accessed.app',
    },
  },
  legal: {
    privacy: {
      title: 'Πολιτική Απορρήτου',
      comingSoon: 'Η πλήρης Πολιτική Απορρήτου μας θα είναι διαθέσιμη εδώ σύντομα. Εν τω μεταξύ, μη διστάσετε να επικοινωνήσετε με εμάς για ερωτήσεις στο hello@accessed.app.',
    },
    terms: {
      title: 'Όροι Χρήσης',
      comingSoon: 'Οι πλήρεις Όροι Χρήσης μας θα είναι διαθέσιμοι εδώ σύντομα. Εν τω μεταξύ, μη διστάσετε να επικοινωνήσετε με εμάς για ερωτήσεις στο hello@accessed.app.',
    },
    back: 'Επιστροφή στην αρχική',
  },
  common: {
    learnMore: 'Μάθετε περισσότερα',
  },
};

export const translations: Record<Lang, Dict> = { en, el };

export type TranslationDict = Dict;
