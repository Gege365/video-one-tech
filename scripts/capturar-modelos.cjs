const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT_IMG = path.join(ROOT, "public", "img", "modelos");
const OUT_HTML = path.join(ROOT, "public", "modelos");
const SRC = "D:\\VIDEO ONE\\Templates Sites";

const MODELS = [
  { folder: "Site 01", raiz: "Site Raiz 01", slug: "onda", nome: "Onda", tipo: "Landing page · estúdio criativo", ideal: ["Agências", "Estúdios", "Tecnologia", "Marcas pessoais"], preco: "R$ 2.490" },
  { folder: "site 02", raiz: "Site Raiz 02", slug: "affina", nome: "Affina", tipo: "Landing page · comércio local", ideal: ["Comércio", "Gastronomia", "Lojas", "Empresas"], preco: "R$ 2.290" },
  { folder: "Site 1", raiz: "site Raiz 1", slug: "cut-short", nome: "Cut Short", tipo: "Landing page · evento", ideal: ["Eventos", "Cursos", "Lançamentos", "Empresas"], preco: "R$ 2.490" },
  { folder: "Site 2", raiz: "Site Raiz 2", slug: "inertia", nome: "Inertia", tipo: "Landing page · estúdio de motion", ideal: ["Agências", "Tecnologia", "Marcas pessoais", "Empresas"], preco: "R$ 2.490" },
  { folder: "Site 3", raiz: "Site Raiz 3", slug: "ombrelle", nome: "Ombrelle", tipo: "Landing page · restaurante", ideal: ["Gastronomia", "Bares", "Hotéis", "Comércio"], preco: "R$ 2.290" },
  { folder: "site 4", raiz: "Site Raiz 4", slug: "brume", nome: "Brume", tipo: "Landing page · bem-estar", ideal: ["Clínicas estéticas", "Bem-estar", "Spas", "Saúde"], preco: "R$ 2.490" },
  { folder: "Site 5", raiz: "Site Raiz 5", slug: "vernis", nome: "Vernis", tipo: "Landing page · serviços automotivos", ideal: ["Serviços", "Empresas", "Oficinas", "Comércio"], preco: "R$ 2.290" },
  { folder: "Site 6", raiz: "Site Raiz 6", slug: "snort", nome: "Snort", tipo: "Landing page · entretenimento", ideal: ["Eventos", "Casas de show", "Empresas", "Marcas pessoais"], preco: "R$ 2.290" },
  { folder: "Site 7", raiz: "Site Raiz 7", slug: "linea", nome: "Linea", tipo: "Landing page · SaaS / produto", ideal: ["Tecnologia", "Startups", "Empresas", "Produtos digitais"], preco: "R$ 2.690" },
  { folder: "Site 8", raiz: "Site Raiz 8", slug: "highkick", nome: "Highkick", tipo: "Landing page · fitness", ideal: ["Academias", "Personal", "Clínicas", "Empresas"], preco: "R$ 2.290" },
  { folder: "Site 9", raiz: "Site Raiz 9", slug: "farlight", nome: "Farlight", tipo: "Landing page · turismo", ideal: ["Turismo", "Hotéis", "Experiências", "Empresas"], preco: "R$ 2.490" },
  { folder: "Site 10", raiz: "Site Raiz 10", slug: "monella", nome: "Monella", tipo: "Landing page · food service", ideal: ["Gastronomia", "Delivery", "Comércio", "Empresas"], preco: "R$ 2.290" },
  { folder: "Site 11", raiz: "Site Raiz 11", slug: "arcline", nome: "Arcline", tipo: "Landing page · performance", ideal: ["Academias", "Coaching", "Saúde", "Empresas"], preco: "R$ 2.490" },
  { folder: "Site 12", raiz: "Site Raiz 12", slug: "loud-kettle", nome: "Loud Kettle", tipo: "Landing page · cervejaria", ideal: ["Gastronomia", "Comércio", "Marcas", "Empresas"], preco: "R$ 2.290" },
];

async function main() {
  fs.mkdirSync(OUT_IMG, { recursive: true });
  fs.mkdirSync(OUT_HTML, { recursive: true });
  fs.writeFileSync(path.join(ROOT, "src", "data", "modelos-sites.json"), JSON.stringify(MODELS.map(m => ({
    slug: m.slug,
    nome: m.nome,
    tipo: m.tipo,
    ideal: m.ideal,
    preco: m.preco,
    preview: `/img/modelos/${m.slug}.jpg`,
    live: `/modelos/${m.slug}/`,
  })), null, 2));

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  for (const m of MODELS) {
    const srcDir = path.join(SRC, m.folder, m.raiz);
    const destDir = path.join(OUT_HTML, m.slug);
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir)) {
      const from = path.join(srcDir, file);
      if (fs.statSync(from).isFile()) fs.copyFileSync(from, path.join(destDir, file));
    }
    const fileUrl = "file:///" + path.join(destDir, "index.html").replace(/\\/g, "/");
    console.log("capturando", m.slug, fileUrl);
    await page.goto(fileUrl, { waitUntil: "networkidle", timeout: 60000 }).catch(() => page.goto(fileUrl, { waitUntil: "load", timeout: 60000 }));
    await page.waitForTimeout(1200);
    const imgPath = path.join(OUT_IMG, `${m.slug}.jpg`);
    await page.screenshot({ path: imgPath, fullPage: true, type: "jpeg", quality: 72 });
    const stat = fs.statSync(imgPath);
    console.log("ok", m.slug, Math.round(stat.size / 1024) + "kb");
  }

  await browser.close();
  console.log("feito", MODELS.length);
}

main().catch((e) => { console.error(e); process.exit(1); });
