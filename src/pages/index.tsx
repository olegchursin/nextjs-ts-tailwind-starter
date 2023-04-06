import Layout from '@/components/layout/Layout';

import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle="Home" />

      <div className="layout py-12">
        <h1>nextjs-ts-tailwind-starter</h1>
      </div>
    </Layout>
  );
}
