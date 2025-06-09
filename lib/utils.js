// lib/utils.js
export const generateFaqJsonLd = (faqs) => {
  if (!faqs || !faqs.length) return '';
  const faqEntities = faqs
    .filter((f) => f.question && f.answer)
    .map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    }));
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntities,
    },
    null,
    2
  );
};