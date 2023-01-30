export default function Layout({ children }: any) {
  const navbarH = 200;
  return (
    <html>
      <head />
      <body style={{ margin: 0 }}>
        <div
          id="header"
          style={{
            position: "fixed",
            height: navbarH,
            width: "100vw",
            background: "green",
          }}
        ></div>
        <div
          id="content"
          style={{
            paddingTop: navbarH,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
