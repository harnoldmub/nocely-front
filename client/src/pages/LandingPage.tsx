import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ChevronDown,
  Crown,
  Gift,
  Headphones,
  Heart,
  Layout,
  Lock,
  MessageCircle,
  Play,
  QrCode,
  Quote,
  RefreshCcwDot,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const APP_URL = "https://daylora.app";

const FR = {
  common: {
    faq: "FAQ",
    product: "Produit",
    support: "Support",
    contact: "Contact",
    legal: "Légal",
    privacy: "Confidentialité",
    terms: "CGV",
    legalNotice: "Mentions légales",
    cookies: "Cookies",
    allRightsReserved: "Tous droits réservés.",
    madeWith: "Fait avec",
  },
  landing: {
    nav: {
      howItWorks: "Fonctionnalités",
      templates: "Expérience",
      guests: "Témoignages",
      pricing: "Tarifs",
      faq: "FAQ",
      login: "Connexion",
      createSite: "Créer mon site",
    },
    hero: {
      badge: "La plateforme mariage n°1",
      titleLine1: "Votre mariage",
      titleLine2: "mérite le meilleur",
      description: "Créez votre site de mariage, gérez vos invités et recevez de l'argent — en quelques minutes.",
      primaryCta: "Commencer gratuitement",
      secondaryCta: "Découvrir",
      highlights: ["100% gratuit pour démarrer", "Site prêt en 1 min", "Paiements sécurisés"],
    },
    stats: [
      { value: "2 500+", label: "couples heureux" },
      { value: "98%", label: "de satisfaction" },
      { value: "1 min", label: "pour créer votre site" },
      { value: "150k+", label: "invités gérés" },
    ],
    productExperience: {
      badge: "Expérience",
      titleLine1: "Tout ce dont vous avez",
      titleLine2: "besoin pour votre mariage",
      description: "De la création du site à la gestion des invités, Daylora centralise tout en un seul endroit.",
      items: [
        "Templates premium",
        "Performance",
        "Galerie photos",
        "Design personnalisable",
        "Sécurité",
        "Support dédié",
      ],
    },
    howItWorks: {
      badge: "Comment ça marche",
      titleLine1: "Votre mariage en ligne",
      titleLine2: "en quelques étapes",
      description: "En quelques étapes simples, votre mariage prend vie en ligne.",
      steps: [
        { kicker: "Démarrer", title: "Créez votre espace", description: "Répondez à quelques questions simples. Votre site de mariage personnalisé est prêt en 1 minute." },
        { kicker: "Personnaliser", title: "Personnalisez à votre image", description: "Choisissez vos couleurs, vos polices, vos photos. Daylora s'adapte à votre vision." },
        { kicker: "Invitations", title: "Invitez vos proches", description: "Envoyez des invitations personnalisées avec un lien unique. Vos invités confirment en un clic." },
        { kicker: "Publier", title: "Publiez et profitez", description: "Votre site est en ligne. Gérez les RSVP, la cagnotte et bien plus depuis votre tableau de bord." },
      ],
    },
    featureSections: {
      badge: "Fonctionnalités",
      titleLine1: "Tout ce qu'il vous faut",
      titleLine2: "pour un mariage réussi",
      description: "Chaque fonctionnalité a été pensée pour simplifier l'organisation de votre mariage et épater vos invités.",
      cards: [
        { id: "templates", eyebrow: "Templates", title: "Des modèles qui donnent envie", description: "Choisissez parmi nos templates soigneusement designés, puis personnalisez chaque détail selon vos envies.", bullets: ["3 templates premium", "Couleurs et polices personnalisables", "Aperçu en temps réel", "Mobile-first"] },
        { id: "guests", eyebrow: "Invités", title: "Gérez vos invités sans effort", description: "Importez vos invités, envoyez des invitations et suivez les RSVP en temps réel depuis votre tableau de bord.", bullets: ["RSVP en un clic", "Import de contacts", "Export de la liste", "Régimes alimentaires"] },
        { id: "invitations", eyebrow: "Invitations", title: "Des invitations digitales élégantes", description: "Chaque invité reçoit une invitation personnalisée avec son nom, un QR code et un bouton de confirmation.", bullets: ["Invitation nominative", "QR code unique", "Page RSVP dédiée", "Rappels automatiques"] },
        { id: "gifts", eyebrow: "Liste de cadeaux", title: "Liste de cadeaux et cagnotte", description: "Proposez une liste de cadeaux en ligne ou recevez des contributions directement via la cagnotte sécurisée.", bullets: ["Cagnotte sécurisée", "Messages accompagnants", "Paiements Stripe", "Retraits simplifiés"] },
        { id: "checkin", eyebrow: "Check-in", title: "Check-in le jour J", description: "Scannez les QR codes de vos invités à l'entrée pour un check-in rapide et sans accroc.", bullets: ["QR codes uniques", "Check-in mobile", "Liste en temps réel", "Export PDF"] },
        { id: "support", eyebrow: "Support", title: "Un support humain et réactif", description: "Notre équipe est disponible pour vous accompagner à chaque étape de la préparation de votre mariage.", bullets: ["Chat en direct", "Réponse en moins d'1h", "Guides et tutoriels", "Communauté privée"] },
      ],
    },
    backoffice: {
      badge: "Tableau de bord",
      titleLine1: "Pilotez votre mariage",
      titleLine2: "depuis un seul endroit",
      description: "Votre tableau de bord centralise tout : RSVP, cagnotte, photos, messages — tout y est en temps réel.",
      items: ["📊 Statistiques en temps réel", "💌 Gestion des invitations", "💰 Suivi de la cagnotte", "📸 Galerie collaborative", "💬 Messages des invités", "📋 Export des données"],
    },
    pricing: {
      badge: "Tarifs",
      titleLine1: "Un investissement unique",
      titleLine2: "pour un souvenir éternel",
      description: "Commencez gratuitement, passez au Premium quand vous êtes prêts. Sans surprise.",
      freePlan: {
        label: "Gratuit",
        price: "0€",
        description: "Pour découvrir Daylora sans engagement.",
        features: [
          { text: "1 template (Classique)", included: true },
          { text: "RSVP limité (30 invités)", included: true },
          { text: "Cagnotte", included: true },
          { text: "6 photos galerie", included: true },
          { text: "Sans branding Daylora", included: false },
          { text: "Liste de cadeaux", included: false },
        ],
        cta: "Démarrer gratuitement",
      },
      annualPlan: {
        badge: "Meilleur choix",
        label: "Premium — 12 mois",
        price: "149€",
        priceSuffix: "paiement unique",
        description: "Investissez une fois pour organiser votre mariage sereinement. Accès immédiat à toutes les fonctionnalités.",
        chip: "Accès 12 mois · Paiement unique",
        features: ["3 templates premium", "RSVP illimités", "Liste de cadeaux", "Page live & blagues", "50 photos galerie", "Sans branding Daylora", "Pages personnalisées"],
        cta: "Choisir l'annuel — 149€",
      },
      monthlyPlan: {
        label: "Premium — Mensuel",
        price: "23,99€",
        priceSuffix: "/mois",
        description: "Les mêmes fonctionnalités premium, résiliable à tout moment.",
        features: ["3 templates premium", "RSVP illimités", "Liste de cadeaux", "Page live & blagues", "50 photos galerie", "Sans branding Daylora"],
        cta: "Choisir le mensuel",
      },
      reassurances: ["Paiement sécurisé", "Résiliable à tout moment", "Support réactif", "Accès immédiat"],
      footer: "Aucune carte requise pour commencer gratuitement. Passez au Premium quand vous êtes prêt.",
    },
    testimonials: {
      badge: "Témoignages",
      titlePrefix: "Ils ont",
      titleHighlight: "adoré",
      titleSuffix: "Daylora",
      description: "Des milliers de couples nous font confiance pour organiser le plus beau jour de leur vie.",
      items: [
        { name: "Sophie & Marc", location: "Paris, France", quote: "Daylora a transformé notre mariage. Nos invités étaient bluffés par la qualité du site. La cagnotte en ligne a simplifié tout le processus." },
        { name: "Amélie & James", location: "Lyon, France", quote: "Le live pendant la soirée était magique ! Les messages des invités s'affichaient en direct avec des confettis. Un moment inoubliable." },
        { name: "Fatou & Olivier", location: "Bordeaux, France", quote: "Créer notre site a pris 5 minutes. Le résultat est digne d'un studio professionnel. Nos invités ont confirmé via le RSVP en un instant." },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { question: "Combien de temps faut-il pour créer mon site ?", answer: "En moyenne 1 minute. On vous pose quelques questions, et votre site est prêt à être partagé." },
        { question: "Mes invités ont-ils besoin de créer un compte ?", answer: "Non, jamais. Votre site est accessible à tout le monde, sans inscription. Vos invités confirment leur présence en un seul clic." },
        { question: "Comment fonctionne la cagnotte ?", answer: "Les paiements passent par Stripe, le système de paiement le plus utilisé au monde. Chaque don est accompagné d'un message et vous voyez les montants en direct." },
        { question: "Puis-je modifier mon site après la création ?", answer: "Bien sûr. Couleurs, polices, images, textes — vous pouvez tout changer à tout moment depuis votre espace. Vous pouvez même changer de modèle." },
        { question: "Puis-je récupérer la liste de mes invités ?", answer: "Oui, vous pouvez télécharger un fichier avec tous les détails : noms, emails, réponses, régimes alimentaires — tout y est." },
        { question: "Comment fonctionne le parrainage ?", answer: "Vous recevez un code à partager avec vos amis. Chaque ami qui l'utilise obtient une réduction sur le Premium." },
      ],
    },
    closingCta: {
      titleLine1: "Rejoignez des milliers",
      titleLine2: "de couples heureux",
      description: "Rejoignez les couples qui ont choisi Daylora pour organiser leur mariage sereinement — en un seul investissement.",
      cta: "Accéder à Daylora Premium — 149€",
      highlights: ["149€ paiement unique", "Accès 12 mois", "Sans abonnement"],
    },
    footer: {
      tagline: "La nouvelle génération de sites de mariage.",
      productLinks: ["Fonctionnalités", "Tarifs", "FAQ"],
    },
  },
};

const mobileViewport = { once: true, margin: "200px 0px 0px 0px", amount: 0 as const };

const fadeUp = {
  hidden: { opacity: 1, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function LandingPage() {
  const t = FR;
  const landing = t.landing;
  const common = t.common;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const howItWorksSteps = [
    {
      ...landing.howItWorks.steps[0],
      image: "/marketing-real/howitworks-start.png",
      icon: <Wand2 className="h-5 w-5" />,
    },
    {
      ...landing.howItWorks.steps[1],
      image: "/marketing-real/howitworks-personalize.png",
      icon: <Layout className="h-5 w-5" />,
    },
    {
      ...landing.howItWorks.steps[2],
      image: "/marketing-real/howitworks-invitations.png",
      icon: <Users className="h-5 w-5" />,
    },
    {
      ...landing.howItWorks.steps[3],
      image: "/marketing-real/howitworks-publish.png",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const experiencePillars = [
    { label: landing.productExperience.items[0], icon: <Crown className="h-5 w-5" /> },
    { label: landing.productExperience.items[1], icon: <Zap className="h-5 w-5" /> },
    { label: landing.productExperience.items[2], icon: <Camera className="h-5 w-5" /> },
    { label: landing.productExperience.items[3], icon: <Layout className="h-5 w-5" /> },
    { label: landing.productExperience.items[4], icon: <ShieldCheck className="h-5 w-5" /> },
    { label: landing.productExperience.items[5], icon: <Headphones className="h-5 w-5" /> },
  ];

  const featureCards = [
    {
      ...landing.featureSections.cards[0],
      image: "/marketing-real/feature-templates.png",
      icon: <Wand2 className="h-5 w-5" />,
    },
    {
      ...landing.featureSections.cards[2],
      image: "/marketing-real/feature-invitations.png",
      icon: <QrCode className="h-5 w-5" />,
    },
    {
      ...landing.featureSections.cards[3],
      image: "/marketing-real/feature-gifts.png",
      icon: <Gift className="h-5 w-5" />,
    },
    {
      ...landing.featureSections.cards[1],
      image: "/marketing-real/feature-guests.png",
      icon: <Users className="h-5 w-5" />,
    },
    {
      ...landing.featureSections.cards[4],
      image: "/marketing-real/feature-checkin.png",
      icon: <BadgeCheck className="h-5 w-5" />,
    },
    {
      ...landing.featureSections.cards[5],
      image: "/marketing-real/feature-support.png",
      icon: <Headphones className="h-5 w-5" />,
    },
  ];

  const supportCard = featureCards.find((card) => card.id === "support");

  const testimonials = [
    { ...landing.testimonials.items[0], image: "/images/testimonial-1.jpg", rating: 5 },
    { ...landing.testimonials.items[1], image: "/images/testimonial-2.jpg", rating: 5 },
    { ...landing.testimonials.items[2], image: "/images/testimonial-3.jpg", rating: 5 },
  ];

  const pricingReassurances = [
    { icon: <Lock className="h-5 w-5" />, label: landing.pricing.reassurances[0] },
    { icon: <RefreshCcwDot className="h-5 w-5" />, label: landing.pricing.reassurances[1] },
    { icon: <Headphones className="h-5 w-5" />, label: landing.pricing.reassurances[2] },
    { icon: <Zap className="h-5 w-5" />, label: landing.pricing.reassurances[3] },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F6F1EA] text-[#2b2320] selection:bg-primary/20">
      <nav className="fixed top-0 z-50 w-full px-4 py-3 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#E9DFD2]/80 bg-white/80 px-5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-8">
          <a href="/" className="group flex cursor-pointer items-center">
            <img src="/images/logo.png" alt="Daylora" className="h-10 w-auto transition-all group-hover:scale-105 md:h-12" />
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#7A6B5E] lg:flex">
            <a href="#cinema" className="group relative transition-colors hover:text-primary">
              {landing.nav.howItWorks}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all group-hover:w-full" />
            </a>
            <a href="#templates" className="group relative transition-colors hover:text-primary">
              {landing.nav.templates}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all group-hover:w-full" />
            </a>
            <a href="#guests" className="group relative transition-colors hover:text-primary">
              {landing.nav.guests}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all group-hover:w-full" />
            </a>
            <a href="#pricing" className="group relative transition-colors hover:text-primary">
              {landing.nav.pricing}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all group-hover:w-full" />
            </a>
            <a href="#faq" className="group relative transition-colors hover:text-primary">
              {landing.nav.faq}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all group-hover:w-full" />
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <a href={`${APP_URL}/login`} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="hidden text-xs font-bold uppercase tracking-widest text-[#7A6B5E] transition-colors hover:text-[#2b2320] md:inline-flex">
                {landing.nav.login}
              </Button>
            </a>
            <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer">
              <Button className="h-10 rounded-full border-none bg-[#2b2320] px-5 text-sm text-white shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-black md:h-12 md:px-8 md:text-base">
                {landing.nav.createSite}
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section ref={heroRef} className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src="/images/wedding-hero.png" alt="Wedding" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F6F1EA]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F6F1EA] to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-6xl space-y-8 px-6 pt-24 text-center"
        >
          <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {landing.hero.badge}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl font-extrabold leading-[0.85] tracking-tighter text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)] sm:text-7xl md:text-8xl lg:text-[6.75rem]"
            >
              {landing.hero.titleLine1}
              <br />
              <span className="text-gradient">{landing.hero.titleLine2}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-white/90 drop-shadow-md sm:text-xl md:text-2xl"
            >
              {landing.hero.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group h-14 w-full rounded-full border-none bg-primary px-10 text-lg shadow-[0_15px_40px_rgba(200,169,106,0.5)] transition-all hover:-translate-y-1 hover:bg-primary/90 md:h-16 md:px-14 md:text-xl sm:w-auto">
                  {landing.hero.primaryCta}
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 md:h-6 md:w-6" />
                </Button>
              </a>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/20 bg-white/5 px-10 text-lg text-white shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20 md:h-16 md:px-14 md:text-xl">
                <a href="#cinema">
                  <Play className="mr-3 h-5 w-5 fill-white" />
                  {landing.hero.secondaryCta}
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 pt-2 md:gap-6">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                <Wand2 className="h-3.5 w-3.5 text-white" />
                <span className="text-xs font-medium text-white">{landing.hero.highlights[0]}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                <QrCode className="h-3.5 w-3.5 text-white" />
                <span className="text-xs font-medium text-white">{landing.hero.highlights[1]}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                <Headphones className="h-3.5 w-3.5 text-white" />
                <span className="text-xs font-medium text-white">{landing.hero.highlights[2]}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="h-6 w-6 text-[#7A6B5E]/60" />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#E9DFD2]/50 bg-white/50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
          >
            {landing.stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="space-y-2 text-center">
                <div className="text-gradient font-serif text-2xl font-bold md:text-4xl">{stat.value}</div>
                <div className="text-sm font-medium text-[#7A6B5E]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="space-y-5 text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <Crown className="h-3.5 w-3.5" />
              {landing.productExperience.badge}
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              {landing.productExperience.titleLine1}
              <br />
              <span className="text-gradient">{landing.productExperience.titleLine2}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-lg text-[#7A6B5E]">
              {landing.productExperience.description}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {experiencePillars.map((item) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="show"
                viewport={mobileViewport}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-[#E9DFD2] bg-white px-4 py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-[#5D5147]">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cinema" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="mb-14 space-y-5 text-center md:mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {landing.howItWorks.badge}
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              {landing.howItWorks.titleLine1}
              <br />
              <span className="text-gradient">{landing.howItWorks.titleLine2}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-lg text-[#7A6B5E]">
              {landing.howItWorks.description}
            </motion.p>
          </motion.div>

          <div className="space-y-14 md:space-y-20">
            {howItWorksSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={mobileViewport}
                  variants={stagger}
                  className={`grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2 ${!isEven ? "lg:direction-rtl" : ""}`}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 1, x: isEven ? -20 : 20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className={`group relative ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DFD2] bg-white shadow-2xl">
                      <div className="relative overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="h-[260px] w-full object-cover transition-transform ease-out group-hover:scale-105 md:h-[340px]"
                          style={{ transitionDuration: "1.2s" }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-xl">
                          <span className="text-white">{step.icon}</span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{step.kicker}</span>
                        </div>
                        <div className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold text-white/80 backdrop-blur-xl">
                          {String(index + 1).padStart(2, "0")} / {String(howItWorksSteps.length).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 1, x: isEven ? 20 : -20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } },
                    }}
                    className={`space-y-6 ${!isEven ? "lg:order-1 lg:text-right" : ""}`}
                  >
                    <div className={`flex items-center gap-3 ${!isEven ? "lg:justify-end" : ""}`}>
                      <span className="rounded-2xl border border-primary/10 bg-primary/10 p-3 text-primary">
                        {step.icon}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">{step.kicker}</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{step.title}</h3>
                    <p className="max-w-xl text-lg leading-relaxed text-[#7A6B5E]">{step.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="templates" className="scroll-mt-32 bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="space-y-5 text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <BadgeCheck className="h-3.5 w-3.5" />
              {landing.featureSections.badge}
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              {landing.featureSections.titleLine1}
              <br />
              <span className="text-gradient">{landing.featureSections.titleLine2}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-lg text-[#7A6B5E]">
              {landing.featureSections.description}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featureCards.map((card) => (
              <motion.article
                id={card.id}
                key={card.id}
                initial="hidden"
                whileInView="show"
                viewport={mobileViewport}
                variants={fadeUp}
                className={`scroll-mt-32 overflow-hidden rounded-[2rem] border border-[#E9DFD2] bg-[#F6F1EA]/60 shadow-[0_20px_60px_-30px_rgba(43,35,32,0.18)] ${
                  card.id === "support" || card.id === "checkin" ? "lg:col-span-2" : ""
                }`}
              >
                {card.image ? (
                <div className={`grid ${card.id === "support" || card.id === "checkin" ? "lg:grid-cols-[0.95fr_1.05fr]" : ""}`}>
                  <div className="relative min-h-[260px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`h-full w-full object-cover ${
                        card.id === "invitations" ? "object-center" : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white backdrop-blur-xl">
                      {card.icon}
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{card.eyebrow}</span>
                    </div>
                  </div>
                  <div className="space-y-6 p-8 md:p-10">
                    <div className="space-y-3">
                      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        {card.eyebrow}
                      </span>
                      <h3 className="font-serif text-3xl font-bold leading-tight">{card.title}</h3>
                      <p className="text-base leading-relaxed text-[#7A6B5E]">{card.description}</p>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {card.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-[#E9DFD2] bg-white px-4 py-4">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed text-[#5D5147]">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                ) : (
                  <div className={`grid ${
                    card.id === "support" || card.id === "checkin"
                      ? "lg:grid-cols-[0.8fr_1.2fr]"
                      : "lg:grid-cols-[0.7fr_1.3fr]"
                  }`}>
                    <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#2b2320] via-[#3C322A] to-[#4A3F36] p-8 text-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,169,106,0.26),_transparent_58%)]" />
                      <div className="relative space-y-5">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/10 text-primary backdrop-blur-sm">
                          <span className="text-white">{card.icon}</span>
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
                          {card.eyebrow}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6 p-8 md:p-10">
                      <div className="space-y-3">
                        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                          {card.eyebrow}
                        </span>
                        <h3 className="font-serif text-3xl font-bold leading-tight">{card.title}</h3>
                        <p className="text-base leading-relaxed text-[#7A6B5E]">{card.description}</p>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        {card.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-[#E9DFD2] bg-white px-4 py-4">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm leading-relaxed text-[#5D5147]">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="organization" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="overflow-hidden rounded-[2.5rem] border border-[#E9DFD2] bg-gradient-to-br from-[#2b2320] to-[#3D332B] px-8 py-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.28)] md:px-12 md:py-14"
          >
            <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <Layout className="h-3.5 w-3.5" />
              {landing.backoffice.badge}
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              {landing.backoffice.titleLine1}
              <br />
              <span className="text-gradient">{landing.backoffice.titleLine2}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
              {landing.backoffice.description}
            </motion.p>

            <motion.div variants={stagger} className="mt-10 grid gap-4 md:grid-cols-3">
              {landing.backoffice.items.map((item) => (
                <motion.div key={item} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/90 backdrop-blur-sm">
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="space-y-5 text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <Crown className="h-3.5 w-3.5" />
              {landing.pricing.badge}
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold md:text-6xl">
              {landing.pricing.titleLine1}
              <br />
              <span className="text-gradient italic">{landing.pricing.titleLine2}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-lg text-[#7A6B5E]">
              {landing.pricing.description}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={mobileViewport}
              variants={fadeUp}
              className="flex flex-col justify-between space-y-7 rounded-[2.5rem] border border-[#E9DFD2] bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="space-y-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">{landing.pricing.freePlan.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl font-bold">{landing.pricing.freePlan.price}</span>
                </div>
                <p className="text-sm text-[#7A6B5E]">{landing.pricing.freePlan.description}</p>
                <ul className="space-y-3">
                  {landing.pricing.freePlan.features.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-sm">
                      {item.included ? (
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      ) : (
                        <X className="h-4 w-4 flex-shrink-0 text-[#C4B8AA]" />
                      )}
                      <span className={item.included ? "text-[#5D5147]" : "text-[#B6A796]"}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="h-14 w-full rounded-full border-2 border-[#E6DCCF] bg-white text-base font-bold text-[#2b2320] transition-all hover:border-primary/40 hover:bg-[#F3EBE1]">
                  {landing.pricing.freePlan.cta}
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={mobileViewport}
              variants={fadeUp}
              className="relative z-10 flex flex-col justify-between space-y-7 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2b2320] to-[#3D332B] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-1 md:scale-105"
            >
              <div className="absolute right-6 top-4 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Star className="h-3 w-3 fill-white" />
                  {landing.pricing.annualPlan.badge}
                </span>
              </div>

              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />

              <div className="relative z-10 space-y-5">
                <div className="text-xs font-bold uppercase tracking-widest text-primary">{landing.pricing.annualPlan.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-bold text-white">{landing.pricing.annualPlan.price}</span>
                  <span className="text-sm text-white/60">{landing.pricing.annualPlan.priceSuffix}</span>
                </div>
                <p className="text-sm text-white/70">{landing.pricing.annualPlan.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/15 px-3 py-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  <span className="text-[11px] font-bold text-primary">{landing.pricing.annualPlan.chip}</span>
                </div>
                <ul className="space-y-3">
                  {landing.pricing.annualPlan.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer" className="relative z-10 block">
                <Button className="h-14 w-full rounded-full border-none bg-primary text-base font-bold text-white shadow-[0_10px_30px_rgba(200,169,106,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_15px_40px_rgba(200,169,106,0.5)]">
                  {landing.pricing.annualPlan.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={mobileViewport}
              variants={fadeUp}
              className="flex flex-col justify-between space-y-7 rounded-[2.5rem] border border-[#E9DFD2] bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="space-y-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">{landing.pricing.monthlyPlan.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl font-bold">{landing.pricing.monthlyPlan.price}</span>
                  <span className="text-sm text-[#7A6B5E]">{landing.pricing.monthlyPlan.priceSuffix}</span>
                </div>
                <p className="text-sm text-[#7A6B5E]">{landing.pricing.monthlyPlan.description}</p>
                <ul className="space-y-3">
                  {landing.pricing.monthlyPlan.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-[#5D5147]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="h-14 w-full rounded-full border-2 border-[#E6DCCF] bg-white text-base font-bold text-[#2b2320] transition-all hover:border-primary/40 hover:bg-[#F3EBE1]">
                  {landing.pricing.monthlyPlan.cta}
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {pricingReassurances.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex flex-col items-center gap-3 rounded-2xl border border-[#E9DFD2]/60 bg-white/60 p-5 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-[#5D5147]">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm text-[#8C7A6B]">{landing.pricing.footer}</p>
        </div>
      </section>

      <section id="testimonials" className="relative overflow-hidden bg-white px-6 py-24 md:py-32">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="space-y-5 text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <Heart className="h-3.5 w-3.5" />
              {landing.testimonials.badge}
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              {landing.testimonials.titlePrefix} <span className="text-gradient italic">{landing.testimonials.titleHighlight}</span> {landing.testimonials.titleSuffix}
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-lg text-[#7A6B5E]">
              {landing.testimonials.description}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="show"
                viewport={mobileViewport}
                variants={fadeUp}
                className="group rounded-3xl border border-[#E9DFD2] bg-[#F6F1EA]/60 p-8 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(200,169,106,0.12)]"
              >
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="mb-6 leading-relaxed text-[#5D5147] italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-[#2b2320]">{testimonial.name}</div>
                    <div className="text-xs text-[#7A6B5E]">{testimonial.location}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                    <Star key={ratingIndex} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F6F1EA] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="space-y-5 text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <MessageCircle className="h-3.5 w-3.5" />
              {common.faq}
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold md:text-5xl">
              {landing.faq.title}
            </motion.h2>
          </motion.div>

          <div className="space-y-4">
            {landing.faq.items.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="show"
                viewport={mobileViewport}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-[#E9DFD2] bg-white transition-all hover:border-primary/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="group flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <h4 className="pr-4 font-serif text-lg font-bold transition-colors group-hover:text-primary">{faq.question}</h4>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#7A6B5E] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-48 pb-6" : "max-h-0"}`}>
                  <p className="px-8 leading-relaxed text-[#7A6B5E]">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/images/feature-guests.jpg" alt="Wedding celebration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b2320]/90 to-[#2b2320]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={mobileViewport}
            variants={stagger}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
              {landing.closingCta.titleLine1}
              <br />
              <span className="text-primary italic">{landing.closingCta.titleLine2}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80">
              {landing.closingCta.description}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href={`${APP_URL}/onboarding`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group h-16 w-full rounded-full border-none bg-primary px-12 text-xl shadow-[0_15px_40px_rgba(200,169,106,0.5)] transition-all hover:-translate-y-1 hover:bg-primary/90 md:px-16 sm:w-auto">
                  {landing.closingCta.cta}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 text-sm text-white/50">
              <span>{landing.closingCta.highlights[0]}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>{landing.closingCta.highlights[1]}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>{landing.closingCta.highlights[2]}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#E6DCCF] bg-[#F6F1EA] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-4">
              <a href="/" className="flex items-center">
                <img src="/images/logo.png" alt="Daylora" className="h-10 w-auto" />
              </a>
              <p className="text-sm leading-relaxed text-[#7A6B5E]">{landing.footer.tagline}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">{common.product}</h4>
              <div className="space-y-3">
                <a href="#templates" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{landing.footer.productLinks[0]}</a>
                <a href="#guests" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{landing.footer.productLinks[1]}</a>
                <a href="#pricing" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{landing.footer.productLinks[2]}</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">{common.support}</h4>
              <div className="space-y-3">
                <a href="#support" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{supportCard?.eyebrow ?? common.support}</a>
                <a href="#faq" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{common.faq}</a>
                <a href="mailto:contact@daylora.co" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{common.contact}</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A6B5E]">{common.legal}</h4>
              <div className="space-y-3">
                <a href="/confidentialite" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{common.privacy}</a>
                <a href="/cgv" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{common.terms}</a>
                <a href="/mentions-legales" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{common.legalNotice}</a>
                <a href="/cookies" className="block text-sm text-[#5D5147] transition-colors hover:text-primary">{common.cookies}</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E6DCCF] pt-8 md:flex-row">
            <div className="text-xs text-[#B6A796]">
              © 2026 Daylora. {common.allRightsReserved}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-[#B6A796]">
                <span>{common.madeWith}</span>
                <Heart className="h-3 w-3 fill-primary text-primary" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
