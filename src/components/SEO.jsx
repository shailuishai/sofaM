import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, ogImage }) {
    const siteTitle = "Sofa M | Архитектура вашего комфорта";
    const fullTitle = title ? `${title} | Sofa M` : siteTitle;
    const defaultDesc = "Премиальная мебель собственного производства под заказ. Безупречное качество и индивидуальный подход.";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />

            {/* Open Graph (для красивых ссылок в Telegram/WhatsApp) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:image" content={ogImage || "/og-image.jpg"} />

            {/* Canonical Link (защита от дублей страниц) */}
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    );
}