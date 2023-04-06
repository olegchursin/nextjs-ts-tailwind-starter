import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="layout flex h-12 items-center justify-between">
      <div>
        © {new Date().getFullYear()} by{' '}
        <a href="https://theodorusclarence.com?ref=tsnextstarter">
          Oleg Chursin
        </a>
      </div>
      <div>Links</div>
    </div>
  );
};

export default Footer;
