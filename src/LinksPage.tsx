import { useEffect } from 'react';

interface LinkItem {
  title: string;
  url: string;
  image: string;
  borderColor: string;
}

const links: LinkItem[] = [
  {
    title: 'WhatsApp',
    url: 'https://api.whatsapp.com/send/?phone=5511946263124&text=Ol%C3%A1+equipe+da+Pulse%21+Estou+pronto+para+come%C3%A7ar+a+trabalhar+com+voc%C3%AAs%2C+qual+o+pr%C3%B3ximo+passo%3F&type=phone_number&app_absent=0',
    image: 'https://i.postimg.cc/Gh1wXsSj/Copia-de-Copia-de-Copia-de-Texto-do-seu-paragrafo-Copia.png',
    borderColor: '#22C55E',
  },
  {
    title: 'Guia Helix',
    url: 'https://drive.google.com/drive/folders/1z3gOQavQXehz4VCqFR7AS6OwmigeBQZF',
    image: 'https://i.postimg.cc/8PVQZrnH/Copia-de-Copia-de-Copia-de-Texto-do-seu-paragrafo-(1)-Copia.png',
    borderColor: '#3B82F6',
  },
  {
    title: 'Proposta Influencer',
    url: 'https://propostainfluencer.netlify.app/',
    image: 'https://i.postimg.cc/ZKhtwyDH/Copia-de-Copia-de-Copia-de-Texto-do-seu-paragrafo-(2)-Copia.png',
    borderColor: '#EAB308',
  },
];

const BG_IMAGE = 'https://i.postimg.cc/PqNY0JFg/Card-03.png';

export default function LinksPage() {
  useEffect(() => {
    const removeFloatingElements = () => {
      const selectors = [
        '[id*="floating"]',
        '[class*="floating"]',
        '[id*="widget"]',
        '[class*="widget"]',
        '[id*="popup"]',
        '[class*="popup"]',
        'iframe[src*="widget"]',
      ];
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      });
    };

    removeFloatingElements();
    const observer = new MutationObserver(removeFloatingElements);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with blur and overlay */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'blur(4px)',
          transform: 'scale(1.05)',
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/40" />

      {/* Main content */}
      <div className="w-full max-w-[400px] px-4 py-10 flex flex-col items-center gap-6">
        {/* Title */}
        <h1
          className="text-5xl font-bold tracking-widest text-white"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          LINKS
        </h1>

        {/* Card */}
        <div className="w-full rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl p-6 flex flex-col gap-5">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card block rounded-xl overflow-hidden opacity-0 animate-fade-in-up"
              style={{
                border: `2px solid ${link.borderColor}`,
                '--pulse-color': `${link.borderColor}B3`,
                boxShadow: `0 0 16px 2px ${link.borderColor}40`,
                animation: `pulse-border-dynamic 2s ease-in-out infinite, fade-in-up 0.6s ease-out forwards`,
                animationDelay: `${0.1 + index * 0.15}s`,
              } as React.CSSProperties}
              title={link.title}
            >
              <img
                src={link.image}
                alt={link.title}
                className="w-full h-auto block"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-white/50 text-sm tracking-wide mt-2">
          @pulseagenc
        </p>
      </div>
    </div>
  );
}