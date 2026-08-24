"""Extract project images from the Johnny on the Spot credentials PDF."""
import hashlib
import io
import json
import os

import pymupdf
from PIL import Image

PDF = r"D:\Thinkpad\Downloads\251205_CredentialsJohnny (3).pdf"
OUT = r"D:\Pablo\Claud3\johnny-on-the-spot\public\casos"

# slug -> (pages, client, category, video)
PROJECTS = [
    ("alcon-astigmatismo",      [9, 10],        "Alcon",                 "Campaña publicitaria", None),
    ("novartis-certican",       [12, 13, 14],   "Novartis",              "Campaña de producto",  "Iobu7Tdk6VI"),
    ("carolina-herrera",        [15],           "Carolina Herrera",      "Campaña de producto",  "xuLeI_mf4cQ"),
    ("orbit",                   [17],           "Orbit",                 "Materiales POS & Packaging", None),
    ("go-green",                [18],           "Go Green",              "Materiales POS & Packaging", None),
    ("stingbye",                [19],           "STINGbye",              "Materiales POS & Packaging", None),
    ("applus-mwc",              [21],           "Applus",                "Stand y acciones en ferias", None),
    ("gft-4yfn",                [22],           "GFT",                   "Stand y acciones en ferias", None),
    ("porsche-classic",         [23, 24, 25, 26], "Porsche",             "Stand y acciones en ferias", None),
    ("melia-60-aniversario",    [28, 29, 30],   "Meliá",                 "Eventos corporativos", "0QU0ztMIcvw"),
    ("sap-partner-summit",      [31],           "SAP",                   "Eventos corporativos", None),
    ("applus-family-day",       [32],           "Applus",                "Eventos corporativos", None),
    ("cocacola-grandvalira",    [34, 35],       "Coca-Cola",             "Street marketing",     None),
    ("avianca",                 [36],           "Avianca",               "Street marketing",     None),
    ("haribo",                  [38, 39],       "Haribo",                "Activación de marca",  None),
    ("glenfiddich",             [40, 41],       "Glenfiddich",           "Activación de marca",  None),
    ("ikea-marruecos",          [42, 43],       "IKEA Marruecos",        "Activación de marca",  None),
    ("perrier",                 [44],           "Perrier",               "Activación de marca",  None),
    ("alcon-air-optix",         [46, 47, 48],   "Alcon",                 "Lanzamiento de producto", "9azR2qmg6uk"),
    ("alcon-incontact",         [49, 50, 51],   "Alcon",                 "Lanzamiento de producto", "J77hZ1BtApc"),
    ("dr-scholl",               [52],           "Dr. Scholl",            "Lanzamiento de producto", None),
    ("petit-farm",              [54, 55],       "Petit Farm",            "Imagen corporativa",   "yOwVNWqnbpU"),
    ("metaembalatges",          [56],           "Metaembalatges",        "Imagen corporativa",   None),
    ("panoma",                  [57, 58],       "Panoma",                "Imagen corporativa",   None),
    ("alcon-air-optix-video",   [60],           "Alcon",                 "Vídeo",                "Tk0yQFDO3mM"),
    ("cocacola-on-air",         [61],           "Coca-Cola",             "Vídeo",                "5EYTmPAYuM0"),
    ("cocacola-segmentacion",   [62],           "Coca-Cola",             "Vídeo",                "8z1odiva9_c"),
    ("walk-me",                 [63],           "Walk Me",               "Vídeo",                None),
    ("ipsen-farma",             [65, 66, 67],   "Ipsen Farma",           "Convenciones",         None),
    ("puig-brand-ambassadors",  [68, 69],       "Puig",                  "Convenciones",         None),
    ("coty-prestige",           [70, 71],       "Coty Prestige",         "Convenciones",         None),
    ("sd-distribucion",         [72],           "SD Distribución",       "Convenciones",         None),
    ("cocacola-gda-2018",       [74, 75],       "Coca-Cola",             "Incentivos",           "vQgsiiJsrsY"),
    ("sap-team-cooking",        [77, 78],       "SAP",                   "Team building",        None),
    ("chopard",                 [80, 81, 82],   "Chopard",               "E-learnings",          None),
    ("puig-good-girl",          [83, 84],       "Puig",                  "E-learnings",          None),
    ("philipp-plein",           [85, 86, 87],   "Philipp Plein",         "E-learnings",          None),
    ("isdin",                   [89],           "ISDIN",                 "Rueda de prensa",      None),
]

MIN_PX = 240          # skip icons / decorative slivers
MIN_AREA = 150_000    # skip thin rules and tiny logos
MAX_W = 1600


def is_flat(im):
    """Detect near-blank images (solid colour blocks used as layout fills)."""
    small = im.convert("RGB").resize((32, 32))
    px = list(small.getdata())
    avg = tuple(sum(c[i] for c in px) / len(px) for i in range(3))
    var = sum((c[0]-avg[0])**2 + (c[1]-avg[1])**2 + (c[2]-avg[2])**2 for c in px) / len(px)
    return var < 120


def main():
    os.makedirs(OUT, exist_ok=True)
    doc = pymupdf.open(PDF)
    manifest = []
    seen_global = {}

    for slug, pages, client, category, video in PROJECTS:
        pdir = os.path.join(OUT, slug)
        os.makedirs(pdir, exist_ok=True)
        cands = []
        for pno in pages:
            page = doc[pno - 1]
            for img in page.get_images(full=True):
                xref = img[0]
                try:
                    info = doc.extract_image(xref)
                except Exception:
                    continue
                w, h = info["width"], info["height"]
                if max(w, h) < MIN_PX or w * h < MIN_AREA:
                    continue
                data = info["image"]
                digest = hashlib.md5(data).hexdigest()
                if digest in seen_global:
                    continue
                try:
                    im = Image.open(io.BytesIO(data))
                    im.load()
                except Exception:
                    continue
                if is_flat(im):
                    continue
                seen_global[digest] = slug
                cands.append((w * h, w, h, im))

        cands.sort(key=lambda c: -c[0])
        saved = []
        for idx, (_, w, h, im) in enumerate(cands[:6]):
            if im.mode in ("RGBA", "P", "LA"):
                bg = Image.new("RGB", im.size, (255, 255, 255))
                im2 = im.convert("RGBA")
                bg.paste(im2, mask=im2.split()[-1])
                im = bg
            else:
                im = im.convert("RGB")
            if im.width > MAX_W:
                im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
            name = f"{idx+1}.webp"
            im.save(os.path.join(pdir, name), "WEBP", quality=84, method=6)
            saved.append({"src": f"/casos/{slug}/{name}", "w": im.width, "h": im.height})

        manifest.append({
            "slug": slug, "client": client, "category": category,
            "video": video, "images": saved, "pages": pages,
        })
        print(f"{slug:26} {len(saved)} imgs")

    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "casos-manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    total = sum(len(p["images"]) for p in manifest)
    print(f"\nTOTAL: {total} imágenes en {len(manifest)} proyectos")


if __name__ == "__main__":
    main()
