import { redirect } from 'next/navigation';

export default function TermsPage() {
  // Keep canonical content at /terms-of-service; redirect /terms there.
  redirect('/terms-of-service');
}
