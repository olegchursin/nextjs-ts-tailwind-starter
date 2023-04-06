import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import styles from './layout.module.css';
import clsxm from '@/lib/clsxm';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <main
        className={clsxm(
          styles.content,
          'bg-white text-gray-900 dark:bg-gray-950 dark:text-white'
        )}
      >
        {children}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
