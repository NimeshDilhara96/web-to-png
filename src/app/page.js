import Converter from "@/components/Converter";
import FaqAccordion from "@/components/FaqAccordion";

// 1. Next.js App Router Metadata API
export const metadata = {
  title: "Free Image to WebP Converter | Fast, Private, No Limits",
  description: "Convert your PNG, JPG, and GIF images to WebP instantly directly in your browser. 100% private, zero file size limits, and no server uploads.",
  keywords: [
    "Image to WebP converter",
    "Convert image to WebP",
    "JPG to WebP converter",
    "PNG to WebP converter",
    "Bulk Image to WebP converter",
    "Free online WebP converter",
    "Fast WebP converter",
    "Lossless WebP converter",
    "WebP converter no upload"
  ],
  alternates: {
    canonical: "https://tools.mommentx.space",
  },
  openGraph: {
    title: "Free Image to WebP Converter",
    description: "Lightning-fast, strictly client-side image to WebP converter.",
    type: "website",
  },
  verification: {
    google: "MPKtElHbSG4pCpKJqhAXIDSqeu1FfaagHWVTPWr4daM",
  }
};

export default function Home() {
 // 2. Structured Data Schema for SEO
 const jsonLd = {
"@context":"https://schema.org",
"@type":"WebApplication",
 name:"Free Image to WebP Converter",
 url:"https://tools.mommentx.space",
 description:"A lightning-fast, strictly client-side tool to convert images to the modern WebP format without uploading to any server.",
 applicationCategory:"UtilityApplication",
 operatingSystem:"All",
 offers: {
"@type":"Offer",
 price:"0",
 priceCurrency:"USD",
},
};

 return (
 <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-200 selection:text-blue-900">
 {/* Inject JSON-LD */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)}}
 />
 
  {/* Top Navbar */}
  <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo/Brand */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="text-xl font-bold text-blue-600 tracking-tight">WebP Converter</a>
        </div>
        {/* Nav Links */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          <a href="#why-webp" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Why WebP?</a>
          <a href="#instructions" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Instructions</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
          <a href="#converter" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Convert Now
          </a>
        </div>
      </div>
    </div>
  </nav>

  {/* Hero Header Section */}
  <header className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
 <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
 100% Free & Private
 </div>
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
 Fast Image to WebP Converter
 </h1>
 <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
 Convert your images to the next-gen WebP format instantly. Processing happens entirely in your browser—no uploads, no limits, and absolute privacy.
 </p>
 </header>

 {/* Main Converter Application */}
 <main id="converter" className="px-4 sm:px-6 lg:px-8 pb-16 relative z-10 scroll-mt-24">
 <Converter />
 </main>

 {/* Long-form SEO Content */}
 <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
 
 <section id="why-webp" className="scroll-mt-24">
 <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Use WebP?</h2>
 <p className="text-lg text-gray-600 leading-relaxed mb-6">
 WebP is a modern image format developed by Google that provides superior lossless and lossy compression for images on the web. By using WebP, webmasters and developers can create smaller, richer images that make the web significantly faster.
 </p>
 <ul className="space-y-4 text-gray-600">
 <li className="flex gap-3">
 <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
 <span><strong>Smaller file sizes:</strong> WebP lossless images are 26% smaller compared to standard PNGs.</span>
 </li>
 <li className="flex gap-3">
 <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
 <span><strong>Lightning-fast loading times:</strong> Reduced image sizes mean your website loads faster, boosting your SEO and retaining users.</span>
 </li>
 <li className="flex gap-3">
 <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
 <span><strong>High fidelity quality:</strong> WebP lossy images are 25-34% smaller than comparable JPEG images at an equivalent SSIM quality index.</span>
 </li>
 </ul>
 </section>

 <section id="instructions" className="scroll-mt-24">
 <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Use This Tool</h2>
 <ol className="list-decimal pl-6 text-lg text-gray-600 space-y-3 marker:text-blue-600 marker:font-bold">
 <li className="pl-2">Drag and drop your image (PNG, JPG, JPEG, or GIF) into the dashed box above, or click to open your file browser.</li>
 <li className="pl-2">Preview your image to ensure the correct file is selected.</li>
 <li className="pl-2">Adjust the WebP quality slider. Lower quality shrinks file size further, while higher quality preserves image details.</li>
 <li className="pl-2">Click the <strong>"Convert & Download WebP"</strong> button.</li>
 <li className="pl-2">Your converted `.webp` file will download automatically!</li>
 </ol>
 </section>

 <section id="faq" className="scroll-mt-24">
 <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
 <FaqAccordion />
 </section>
 
 </article>

 {/* Clean Footer */}
 <footer className="border-t border-gray-200 py-10 mt-10">
 <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
 <p>&copy; {new Date().getFullYear()} Fast WebP Converter. All rights reserved.</p>
 </div>
 </footer>
 </div>
 );
}
