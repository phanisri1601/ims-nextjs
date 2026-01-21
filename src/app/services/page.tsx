import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | IM Solutions',
  description: 'Explore our comprehensive advertising and marketing services',
};

export default function ServicesPage() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'left', minHeight: '80vh' }} className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
        Select a specific service from the dropdown menu in the header to learn more.
      </p>
    </div>
  );
}
