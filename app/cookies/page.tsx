import { redirect } from 'next/navigation';

export default function CookiesPage() {
  // Permanently point /cookies to the existing cookie policy route
  redirect('/cookie-policy');
}
