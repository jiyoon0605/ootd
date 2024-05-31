import { getDictionary } from './dictionaries';
import type { Locale } from '@/i18n-config';
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  let fontClass = '';

  switch (lang) {
    case 'ko':
      fontClass = 'font-kr';
      break;
    case 'en':
      fontClass = 'font-en';
      break;
    case 'ja':
      fontClass = 'font-ja';
      break;
    default:
      fontClass = 'font-en'; // 기본 폰트 설정
  }

  return <div className={fontClass}>{dict.test}</div>;
}
