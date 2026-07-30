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

const imageSequences = {
  "Decolonizing Technology and Knowledge": [3, 0, 12, 2],
  "Classification, Race, and the Coded Gaze": [8, 9, 5, 3],
  "Cyberfeminism and Feminist Digital Justice": [6, 7, 12, 9],
  "Language Models, Meaning, and Extraction": [4, 10, 11, 7],
  "Digital Colonialism and Platform Power": [11, 10, 12, 3],
  "Accelerationism, Automation, and Technological Ideology": [5, 6, 7, 10],
  "Indigenous, More-Than-Human, and Relational Intelligence": [3, 0, 12, 8],
  "Critical Design Fiction and Alternative World-Building": [12, 1, 6, 4],
  "Foundational Primary Texts to Read Critically": [1, 4, 5, 0],
  "Position Texts to Debate, Not Core Critical Readings": [10, 9, 11, 7],
  "Studio tools": [1, 4, 9, 5, 10, 12, 6, 3],
};

export const archiveTools = [
  {
    title: "Twine",
    url: "https://twinery.org/",
    meta: "Browser-based narrative prototyping",
  },
  {
    title: "p5.js Web Editor",
    url: "https://editor.p5js.org/",
    meta: "Creative coding in the browser",
  },
  {
    title: "ml5.js",
    url: "https://ml5js.org/",
    meta: "Creative machine learning for the web",
  },
  {
    title: "Wekinator",
    url: "https://wekinator.org/",
    meta: "Interactive machine learning",
  },
  {
    title: "AI Blindspot",
    url: "https://aiblindspot.media.mit.edu/",
    meta: "Critical audit workshop cards",
  },
  {
    title: "Ollama",
    url: "https://docs.ollama.com/quickstart",
    meta: "Run language models locally",
  },
  {
    title: "LM Studio",
    url: "https://lmstudio.ai/docs/app",
    meta: "Visual workspace for local models",
  },
  {
    title: "Voyant Tools",
    url: "https://voyant-tools.org/",
    meta: "Browser-based text analysis",
  },
  {
    title: "Bitsy",
    url: "https://make.bitsy.org/",
    meta: "Small-world and interface prototyping",
  },
  {
    title: "Tarot Cards of Tech",
    url: "https://tarotcardsoftech.artefactgroup.com/",
    meta: "Prompts for unintended consequences",
  },
  {
    title: "DataBasic",
    url: "https://databasic.io/",
    meta: "Beginner-friendly data exploration",
  },
  {
    title: "Datasheets for Datasets",
    url: "https://www.datasheetsfordatasets.org/",
    meta: "Dataset documentation framework",
  },
  {
    title: "Machine Learning for Kids",
    url: "https://machinelearningforkids.co.uk/",
    meta: "Small models connected to Scratch",
  },
  {
    title: "Scratch",
    url: "https://scratch.mit.edu/projects/editor/",
    meta: "Block-based procedural prototyping",
  },
  {
    title: "Hugging Face Spaces",
    url: "https://huggingface.co/spaces",
    meta: "Interactive machine-learning demos",
  },
];

function cleanMarkdown(value) {
  return value
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function compactCitation(citation) {
  const quotedTitles = [...citation.matchAll(/“([^”]+)”/g)];
  const italicTitle = citation.match(/\*([^*]+)\*/);
  const firstTitleIndex =
    quotedTitles[0]?.index ?? (italicTitle ? italicTitle.index : -1);

  if (firstTitleIndex < 0) {
    return {
      author: "",
      title: cleanMarkdown(citation.replace(/\.$/, "")),
    };
  }

  const author = cleanMarkdown(citation.slice(0, firstTitleIndex))
    .replace(/[.,]\s*$/, "")
    .trim();
  const title = quotedTitles.length
    ? quotedTitles.map((match) => `“${match[1]}”`).join(", ")
    : italicTitle[1];

  return { author, title };
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
    const { author, title } = compactCitation(citation);

    seenUrls.add(url);
    readings.push({
      author,
      title,
      url,
      group,
      kind: "Reading",
    });
  });

  return readings;
}

export function withResourceImages(items, group) {
  const sequence = imageSequences[group] ?? imageSequences["Studio tools"];

  return items.map((item, index) => ({
    ...item,
    group: item.group ?? group,
    kind: item.kind ?? "Tool",
    image: resourceImages[sequence[index % sequence.length]],
    format: ["wide", "portrait", "square", "square"][index % 4],
  }));
}
