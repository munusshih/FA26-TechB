/* global URL */

const selectedReadingUrls = new Set([
  "https://www.cs.otago.ac.nz/cosc343/Resources/turing1950.pdf",
  "https://courses.cs.umbc.edu/331/papers/eliza.html",
  "https://oro.open.ac.uk/46718/",
  "https://www.ruhabenjamin.com/race-after-technology",
  "https://proceedings.mlr.press/v81/buolamwini18a.html",
  "https://excavating.ai/",
  "https://aclanthology.org/2020.acl-main.463/",
  "https://faculty.washington.edu/ebender/stochasticparrots/",
  "https://jods.mitpress.mit.edu/pub/lewis-arista-pechawis-kite/release/1",
]);

export const readingCollections = [
  {
    id: "histories-intelligence",
    title: "Histories and ideologies of intelligence",
    groups: [
      "Historical and Cultural Models of Intelligence",
      "Foundational Primary Texts to Read Critically",
      "Accelerationism, Automation, and Technological Ideology",
      "Position Texts to Debate, Not Core Critical Readings",
    ],
  },
  {
    id: "classification-power",
    title: "Classification, data, and platform power",
    groups: [
      "Classification, Race, and the Coded Gaze",
      "Digital Colonialism and Platform Power",
    ],
  },
  {
    id: "language-extraction",
    title: "Language models, labor, and extraction",
    groups: ["Language Models, Meaning, and Extraction"],
  },
  {
    id: "relational-worlds",
    title: "Decolonial, feminist, and relational worlds",
    groups: [
      "Decolonizing Technology and Knowledge",
      "Cyberfeminism and Feminist Digital Justice",
      "Indigenous, More-Than-Human, and Relational Intelligence",
      "Critical Design Fiction and Alternative World-Building",
    ],
  },
];

export const toolCollections = [
  {
    id: "learn-inspect",
    title: "Learn and inspect models",
  },
  {
    id: "make-generative",
    title: "Make with generative models",
  },
  {
    id: "run-build-local",
    title: "Run and build locally",
  },
];

const readingCollectionByGroup = new Map(
  readingCollections.flatMap((collection) =>
    collection.groups.map((group) => [group, collection.id]),
  ),
);

export const resourceImages = [
  {
    src: "/images/commons/i-ching-leibniz.jpg",
    alt: "A circular and gridded arrangement of I Ching hexagrams annotated by Gottfried Wilhelm Leibniz.",
    credit: "I Ching diagram, 1701",
    source:
      "https://commons.wikimedia.org/wiki/File:Diagram_of_I_Ching_hexagrams_owned_by_Gottfried_Wilhelm_Leibniz,_1701.jpg",
  },
  {
    src: "/images/commons/ramon-llull-ars-magna-wheel.png",
    alt: "Ramon Llull’s circular Ars Magna combinatorial figure.",
    credit: "Ramon Llull, Ars Magna",
    source:
      "https://commons.wikimedia.org/wiki/File:Ramon_Llull_-_Ars_Magna_Fig_1.png",
  },
  {
    src: "/images/commons/ramon-llull-ars-magna.png",
    alt: "A manuscript page combining Ramon Llull’s tree of knowledge with a circular figure.",
    credit: "Ramon Llull, Ars Magna tree",
    source:
      "https://commons.wikimedia.org/wiki/File:Ramon_Llull_-_Ars_Magna_Tree_and_Fig_1.png",
  },
  {
    src: "/images/commons/quipu-t1198.jpg",
    alt: "A fifteenth- or sixteenth-century Peruvian quipu made from knotted cotton cords.",
    credit: "Quipu, T-1198",
    source: "https://commons.wikimedia.org/wiki/File:Quipu,_T-1198.jpg",
  },
  {
    src: "/images/commons/eliza-conversation.png",
    alt: "A monochrome terminal transcript of a conversation with ELIZA.",
    credit: "ELIZA conversation",
    source: "https://commons.wikimedia.org/wiki/File:ELIZA_conversation.png",
  },
  {
    src: "/images/commons/jacquard-punchcards.jpg",
    alt: "A Jacquard loom with a long chain of punched cards.",
    credit: "Jacquard loom punchcards",
    source:
      "https://commons.wikimedia.org/wiki/File:A_Jacquard_loom_showing_information_punchcards,_National_Museum_of_Scotland.jpg",
  },
  {
    src: "/images/commons/reprogramming-eniac.png",
    alt: "Two women rewiring the ENIAC computer with a new program in 1946.",
    credit: "Reprogramming ENIAC, 1946",
    source: "https://commons.wikimedia.org/wiki/File:Reprogramming_ENIAC.png",
  },
  {
    src: "/images/commons/naca-human-computers.jpg",
    alt: "Six women working with calculators and engineering records at NACA.",
    credit: "NACA human computers",
    source:
      "https://commons.wikimedia.org/wiki/File:Early_NACA_Human_Computers_at_Work_(7538103290).jpg",
  },
  {
    src: "/images/commons/lepidoptera-classification.jpg",
    alt: "A museum plate classifying and naming six moth specimens.",
    credit: "Lepidoptera classification plate",
    source:
      "https://commons.wikimedia.org/wiki/File:Illustrations_of_typical_specimens_of_Lepidoptera_Heterocera_in_the_collection_of_the_British_Museum_(Pl._CXX)_(9005217351).jpg",
  },
  {
    src: "/images/commons/facial-recognition-demonstration.jpg",
    alt: "Facial-recognition software identifying a face during a public demonstration.",
    credit: "Facial-recognition demonstration",
    source:
      "https://commons.wikimedia.org/wiki/File:Demonstration_of_facial_recognition_software.jpg",
  },
  {
    src: "/images/commons/pdc-server-room.jpg",
    alt: "Dense rows of servers and network cables in a parallel computing center.",
    credit: "PDC server room",
    source: "https://commons.wikimedia.org/wiki/File:PDC_server_room.jpg",
  },
  {
    src: "/images/commons/salar-de-atacama.jpg",
    alt: "A satellite view of lithium evaporation ponds in Chile’s Salar de Atacama.",
    credit: "Salar de Atacama",
    source:
      "https://commons.wikimedia.org/wiki/File:Salar_de_Atacama_-_Chile.jpg",
  },
  {
    src: "/images/commons/community-memory-workstation.jpg",
    alt: "A wooden Community Memory public computer workstation.",
    credit: "Community Memory workstation",
    source:
      "https://commons.wikimedia.org/wiki/File:Community_Memory_Project_coin-op_workstation_1,_Computer_History_Museum,_Mountain_View,_California,_USA_(49502016452).jpg",
  },
];

const featuredReadingImages = new Map([
  ["https://doi.org/10.1007/s13347-020-00405-8", resourceImages[3]],
  [
    "https://mitpress.mit.edu/9780995455009/the-question-concerning-technology-in-china/",
    resourceImages[0],
  ],
  [
    "https://mimi-onuoha.com/the-library-of-missing-datasets",
    resourceImages[8],
  ],
  [
    "https://vnsmatrix.net/projects/the-cyberfeminist-manifesto-for-the-21st-century",
    resourceImages[6],
  ],
  ["https://cyberfeminismindex.com/", resourceImages[7]],
  ["https://anatomyof.ai/", resourceImages[10]],
  [
    "https://journals.sagepub.com/doi/pdf/10.1177/0306396818823172",
    resourceImages[11],
  ],
  [
    "https://scholarworks.iu.edu/journals/index.php/artifact/article/view/4045",
    resourceImages[12],
  ],
  ["https://www.w3.org/History/1945/vbush/", resourceImages[5]],
  ["https://www-formal.stanford.edu/jmc/ascribing.pdf", resourceImages[4]],
]);

function toolGroup(group, items) {
  return items.map((item) => ({
    ...item,
    group,
    kind: "Tool",
  }));
}

export const archiveTools = [
  ...toolGroup("learn-inspect", [
    {
      title: "ml5.js",
      url: "https://ml5js.org/",
      meta: "Creative machine learning in the browser",
      status: "Free · Source available",
      provider: "NYU ITP / IMA and NYU Shanghai IMA",
      sourceType: "University-led project",
    },
    {
      title: "Wekinator",
      url: "https://www.wekinator.org/",
      meta: "Train gestural models for live interaction",
      status: "Free · Open source",
      provider: "Rebecca Fiebrink · Goldsmiths, University of London",
      sourceType: "University research",
    },
    {
      title: "LearningML",
      url: "https://learningml.org/en/home/",
      meta: "Build and program small classifiers",
      status: "Free · Open source",
      provider: "LearningML · Fundación Cruzando",
      sourceType: "Educational project",
    },
    {
      title: "Machine Learning for Kids",
      url: "https://machinelearningforkids.co.uk/",
      meta: "Train models through guided projects",
      status: "Free · Open source",
      provider: "Dale Lane",
      sourceType: "Independent educational project",
    },
    {
      title: "MediaPipe Studio",
      url: "https://ai.google.dev/edge/mediapipe/solutions/studio",
      meta: "Test live-media models in the browser",
      status: "Free · Educational",
      provider: "Google",
      sourceType: "Corporate tool",
    },
    {
      title: "Orange Data Mining",
      url: "https://orangedatamining.com/",
      meta: "No-code visual machine-learning workflows",
      status: "Free · Open source",
      provider: "University of Ljubljana",
      sourceType: "University research",
    },
    {
      title: "GAN Lab",
      url: "https://poloclub.github.io/ganlab/",
      meta: "Train and inspect a GAN in the browser",
      status: "Free · Open source",
      provider: "Georgia Tech · Polo Club of Data Science",
      sourceType: "University research",
    },
    {
      title: "Diffusion Explainer",
      url: "https://poloclub.github.io/diffusion-explainer/",
      meta: "See how diffusion turns text into images",
      status: "Free · Open source",
      provider: "Georgia Tech · Polo Club of Data Science",
      sourceType: "University research",
    },
    {
      title: "Learning Interpretability Tool",
      url: "https://pair-code.github.io/lit/",
      meta: "Probe model behavior and counterfactuals",
      status: "Free · Open source",
      provider: "Google PAIR",
      sourceType: "Corporate research",
    },
    {
      title: "Fairlearn",
      url: "https://fairlearn.org/",
      meta: "Assess group harms in model outputs",
      status: "Free · Open source",
      provider: "Microsoft",
      sourceType: "Corporate research",
    },
    {
      title: "AI Blindspot",
      url: "https://aiblindspot.media.mit.edu/",
      meta: "Audit blindspots across an AI lifecycle",
      status: "Free · Educational",
      provider: "MIT Media Lab",
      sourceType: "University research",
    },
  ]),
  ...toolGroup("make-generative", [
    {
      title: "ComfyUI",
      url: "https://docs.comfy.org/",
      meta: "Node-based generative-media workflows",
      status: "Free · Open source",
      provider: "Comfy Org and open-source contributors",
      sourceType: "Community project",
    },
    {
      title: "InvokeAI",
      url: "https://invoke.ai/",
      meta: "Canvas-based local image generation",
      status: "Free · Open source",
      provider: "Invoke community",
      sourceType: "Community project",
    },
    {
      title: "Krita AI Diffusion",
      url: "https://github.com/Acly/krita-ai-diffusion",
      meta: "Generative image editing inside Krita",
      status: "Free · Open source",
      provider: "Acly and open-source contributors",
      sourceType: "Community project",
    },
    {
      title: "Hugging Face Diffusers",
      url: "https://huggingface.co/docs/diffusers/index",
      meta: "Program image, video, and audio diffusion",
      status: "Free · Open source",
      provider: "Hugging Face",
      sourceType: "Company-maintained open source",
    },
    {
      title: "AudioCraft",
      url: "https://github.com/facebookresearch/audiocraft",
      meta: "Generate music and sound with deep learning",
      status: "Free · Source available",
      provider: "Meta AI Research",
      sourceType: "Corporate research",
    },
    {
      title: "RAVE",
      url: "https://acids-ircam.github.io/RAVE/",
      meta: "Real-time neural audio synthesis",
      status: "Free · Source available",
      provider: "IRCAM · ACIDS research group",
      sourceType: "Research institute",
    },
    {
      title: "TripoSR",
      url: "https://github.com/VAST-AI-Research/TripoSR",
      meta: "Turn one image into a 3D model",
      status: "Free · Open source",
      provider: "VAST-AI Research",
      sourceType: "Research project",
    },
  ]),
  ...toolGroup("run-build-local", [
    {
      title: "Ollama",
      url: "https://docs.ollama.com/quickstart",
      meta: "Run and remix language models locally",
      status: "Free · Open source",
      provider: "Ollama",
      sourceType: "Company-maintained open source",
    },
    {
      title: "Jan",
      url: "https://www.jan.ai/docs",
      meta: "Open-source local AI workspace",
      status: "Free · Open source",
      provider: "Menlo Research",
      sourceType: "Company-maintained open source",
    },
    {
      title: "Transformers.js",
      url: "https://huggingface.co/docs/transformers.js",
      meta: "Run multimodal models in the browser",
      status: "Free · Open source",
      provider: "Hugging Face",
      sourceType: "Company-maintained open source",
    },
    {
      title: "llamafile",
      url: "https://github.com/mozilla-ai/llamafile",
      meta: "Run a language model from one file",
      status: "Free · Open source",
      provider: "Mozilla Ocho",
      sourceType: "Open research project",
    },
    {
      title: "Langflow",
      url: "https://docs.langflow.org/",
      meta: "Visually prototype LLM applications",
      status: "Free · Open source",
      provider: "Langflow",
      sourceType: "Company-maintained open source",
    },
    {
      title: "Gradio",
      url: "https://www.gradio.app/guides/quickstart",
      meta: "Turn a model into a shareable interface",
      status: "Free · Open source",
      provider: "Hugging Face",
      sourceType: "Company-maintained open source",
    },
  ]),
];

const sourceFallbacks = {
  "arxiv.org": {
    venue: "arXiv",
    sourceType: "Academic preprint",
    accessHost: "arXiv",
  },
  "mimi-onuoha.com": {
    venue: "Mimi Onuoha · independent artist project",
    sourceType: "Artist project",
  },
  "warwick.ac.uk": {
    venue: "Original venue not listed",
    sourceType: "University-hosted copy",
    accessHost: "University of Warwick",
  },
  "vnsmatrix.net": {
    venue: "VNS Matrix · artist collective",
    sourceType: "Artist collective",
  },
  "feministinternet.org": {
    venue: "Association for Progressive Communications",
    sourceType: "Civil-society network",
  },
  "carolinesinders.com": {
    venue: "Caroline Sinders · artist project",
    sourceType: "Artist project",
  },
  "laboriacuboniks.net": {
    venue: "Laboria Cuboniks · independent collective",
    sourceType: "Independent collective",
  },
  "anatomyof.ai": {
    venue: "Anatomy of an AI System · independent research project",
    sourceType: "Independent research",
  },
  "indigenous-ai.net": {
    venue: "Indigenous Protocol and AI Working Group",
    sourceType: "Independent working group",
  },
  "www-formal.stanford.edu": {
    venue: "Original venue not listed",
    sourceType: "University-hosted author copy",
    accessHost: "Stanford University",
  },
  "interaction-design.org": {
    venue: "Interaction Design Foundation",
    sourceType: "Private education provider",
  },
  "moma.org": {
    venue: "Museum of Modern Art",
    sourceType: "Museum publication",
  },
  "opentranscripts.org": {
    venue: "Open Transcripts",
    sourceType: "Artist / practitioner talk",
    accessHost: "Open Transcripts",
  },
};

const accessHostLabels = {
  "aclanthology.org": "ACL Anthology",
  "arxiv.org": "arXiv",
  "cyber.harvard.edu": "Harvard University · Berkman Klein Center",
  "data-feminism.mitpress.mit.edu": "MIT Press",
  "designjustice.mitpress.mit.edu": "MIT Press",
  "doi.org": "DOI record",
  "dukeupress.edu": "Duke University Press",
  "escholarship.org": "University of California eScholarship",
  "journals.ed.ac.uk": "University of Edinburgh Journals",
  "jods.mitpress.mit.edu": "MIT Press · Journal of Design and Science",
  "mitpress.mit.edu": "MIT Press",
  "nyupress.org": "NYU Press",
  "openaccess.thecvf.com": "Computer Vision Foundation Open Access",
  "people.csail.mit.edu": "MIT CSAIL",
  "plato.stanford.edu": "Stanford Encyclopedia of Philosophy",
  "proceedings.neurips.cc": "NeurIPS proceedings",
  "research.google": "Google Research",
  "warwick.ac.uk": "University of Warwick",
  "www.dukeupress.edu": "Duke University Press",
  "www-formal.stanford.edu": "Stanford University",
};

const readingProvenanceOverrides = new Map([
  [
    "https://arxiv.org/abs/1803.09010",
    {
      sourceType: "Mixed academic / corporate research",
      origin:
        "DAIR Institute, universities, and Microsoft Research affiliations",
    },
  ],
  [
    "https://openaccess.thecvf.com/content/WACV2021/html/Birhane_Large_Image_Datasets_A_Pyrrhic_Win_for_Computer_Vision_WACV_2021_paper.html",
    {
      sourceType: "Mixed university / company research",
      origin: "University College Dublin and UnifyID AI Labs",
    },
  ],
  [
    "https://proceedings.neurips.cc/paper_files/paper/2022/hash/9d5609613524ecf4f15af0f7b31abca4-Abstract.html",
    {
      sourceType: "Corporate research",
      origin: "Google Research and Google Brain",
    },
  ],
  [
    "https://proceedings.neurips.cc/paper_files/paper/2023/hash/ed3fea9033a80fea1376299fa7863f4a-Abstract.html",
    {
      sourceType: "Mixed academic / corporate research",
      origin: "NYU, Cohere, and Anthropic",
    },
  ],
]);

function cleanMarkdown(value) {
  return value
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function compactCitation(citation) {
  const quotedTitles = [...citation.matchAll(/“([^”]+)”/g)];
  const italicTitle = citation.match(/([*_])([^*_]+)\1/);
  const firstTitleIndex =
    quotedTitles[0]?.index ?? (italicTitle ? italicTitle.index : -1);

  if (firstTitleIndex < 0) {
    return {
      author: "",
      title: cleanMarkdown(citation.replace(/\.$/, "")),
      source: "",
      titleKind: "untitled",
    };
  }

  const author = cleanMarkdown(citation.slice(0, firstTitleIndex))
    .replace(/[.,]\s*$/, "")
    .trim();
  const titleMatches = quotedTitles.length ? quotedTitles : [italicTitle];
  const title = quotedTitles.length
    ? titleMatches.map((match) => `“${match[1]}”`).join(", ")
    : italicTitle[2];
  const lastTitle = titleMatches.at(-1);
  const titleEnd = lastTitle.index + lastTitle[0].length;
  const source = cleanMarkdown(citation.slice(titleEnd))
    .replace(/^[\s.,]+/, "")
    .replace(/\.$/, "")
    .trim();

  return {
    author,
    title,
    source,
    titleKind: quotedTitles.length ? "article" : "book",
  };
}

function getHostname(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function isYearOnly(value) {
  return !value || !/[A-Za-zÀ-ž]/.test(value);
}

function getHostEntry(registry, hostname) {
  return registry[hostname] ?? registry[hostname.replace(/^www\./, "")];
}

function inferSourceType({ hostname, source, titleKind }) {
  const fallback = getHostEntry(sourceFallbacks, hostname);
  if (fallback?.sourceType) return fallback.sourceType;

  if (
    /(^|\.)(openai\.com|anthropic\.com|research\.google|google\.com|meta\.com|microsoft\.com|deepseek\.com|nvidia\.com)$/.test(
      hostname,
    )
  ) {
    return "Corporate primary document";
  }

  if (
    titleKind === "book" ||
    /\b(Press|Publishing|Polity|Bloomsbury|Penguin|Macmillan|Verso)\b/i.test(
      source,
    )
  ) {
    return "Book / publisher";
  }

  if (
    /\.(edu|ac\.uk)$/.test(hostname) ||
    /(Journal|Proceedings|Transactions|Communications of the ACM|Science|Nature|SCRIPTed|Philosophy & Technology|Artificial Intelligence|Stanford Encyclopedia of Philosophy|\bComputer\s+\d)/i.test(
      source,
    ) ||
    /(^|\.)(doi\.org|aclanthology\.org|escholarship\.org|journals\.sagepub\.com|nature\.com|openaccess\.thecvf\.com|onlinelibrary\.wiley\.com|philpapers\.org|proceedings\.neurips\.cc|pubmed\.ncbi\.nlm\.nih\.gov|scholarworks\.iu\.edu)$/.test(
      hostname,
    )
  ) {
    return "Academic publication";
  }

  return "Independent / civil-society source";
}

function createProvenance({ citation, source, titleKind, url }) {
  const hostname = getHostname(url);
  const fallback = getHostEntry(sourceFallbacks, hostname);
  const override = readingProvenanceOverrides.get(url);
  const year = citation.match(/\b(?:18|19|20)\d{2}\b/g)?.at(-1);
  const venue = isYearOnly(source)
    ? [fallback?.venue ?? "Venue not listed", source || year]
        .filter(Boolean)
        .join(" · ")
    : source;

  return {
    venue,
    sourceType:
      override?.sourceType ?? inferSourceType({ hostname, source, titleKind }),
    origin: override?.origin,
    accessHost:
      fallback?.accessHost ??
      getHostEntry(accessHostLabels, hostname) ??
      hostname.replace(/^www\./, ""),
    year,
  };
}

export function createReadingArchive(source) {
  const readings = [];
  const seenUrls = new Set();
  let group = "";

  source.split(/\n\s*\n/).forEach((block) => {
    const value = block.trim();
    const heading = value.match(/^#{1,2}\s+(?:\d+\.\s*)?(.+)$/);

    if (heading) {
      group = cleanMarkdown(heading[1]);
      return;
    }

    if (!group || value.startsWith("#") || value.startsWith("---")) return;

    const links = [...value.matchAll(/\[[^\]]+]\((https?:\/\/[^)\s]+)\)/g)];
    if (!links.length) return;

    const url = links[0][1];
    if (selectedReadingUrls.has(url) || seenUrls.has(url)) return;

    const citation = value.split("\n")[0].replace(/\s{2,}$/, "");
    const { author, title, source, titleKind } = compactCitation(citation);
    const provenance = createProvenance({
      citation,
      source,
      titleKind,
      url,
    });

    seenUrls.add(url);
    readings.push({
      author,
      title,
      url,
      group,
      collection: readingCollectionByGroup.get(group),
      kind: "Reading",
      image: featuredReadingImages.get(url),
      ...provenance,
    });
  });

  return readings;
}
