import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Clyde', description: 'Less inbox. More freight.' };

export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang='en'><body>{children}</body></html>;}
