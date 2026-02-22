
export const metadata = {
  title: "Apex Build Co — Premium Building & Renovation",
  description: "High-end building company demo homepage."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:'Arial, sans-serif',background:'#0f0f0f',color:'#fff'}}>
        {children}
      </body>
    </html>
  );
}
