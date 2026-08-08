const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const asset = (path: string) => `${basePath}/assets/${path}`;

export const images = {
  // Primary hero image (switched to selected product image)
  hero: asset("product-images/vanrakshak/vanrakshak-p10-img01.png"),
  // Previous catalogue alternates preserved
  hero_alt: asset("catalogue-pages/vanrakshak/vanrakshak-page-02.jpg"),
  opticsWide: asset("product-images/vanrakshak/vanrakshak-p03-img01.png"),
  astronomy: asset("product-images/vanrakshak/vanrakshak-p13-img01.jpeg"),
  fieldBird: asset("product-images/vanrakshak/vanrakshak-p01-img01.png"),
  opticProduct: asset("product-images/vanrakshak/vanrakshak-p05-img01.png"),
  navigation: asset("product-images/as_creations/as_creations-p01-img04.png"),
  cameraTrap: asset("product-images/as_creations/as_creations-p01-img08.png"),
  drone: asset("product-images/as_creations/as_creations-p01-img13.png"),
  rangeFinder: asset("product-images/as_creations/as_creations-p01-img15.png"),
  survey: asset("product-images/as_creations/as_creations-p01-img10.png"),
  telescope: asset("product-images/as_creations/as_creations-p01-img16.png")
};
