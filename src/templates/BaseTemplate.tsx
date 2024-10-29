import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';
import Header from '@/components/Header';

export const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full">
      <Header />
      <div className="px-1 text-gray-700 antialiased pt-20">
        <div className="mx-auto max-w-screen-md">

          <main>{props.children}</main>

          <footer className="border-t border-gray-300 py-8 text-center text-sm">
            {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}
            {t.rich('made_with', {
              author: () => (
                <a
                  href="https://creativedesignsguru.com"
                  className="text-blue-700 hover:border-b-2 hover:border-blue-700"
                >
                  CreativeDesignsGuru
                </a>
              ),
            })}
            {/*
            * PLEASE READ THIS SECTION
            * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
            * The link doesn't need to appear on every pages, one link on one page is enough.
            * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
            */}
          </footer>
        </div>
      </div>
    </div>
  );
};
