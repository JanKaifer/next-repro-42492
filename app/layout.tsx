export default function Layout({ children }: any) {
  return (
    <html>
      <head />
      <body style={{ margin: 0 }}>
        <div
          id="header"
          style={{
            position: "fixed",
            height: 200,
            width: "100vw",
            background: "green",
          }}
        ></div>
        <div
          id="content"
          style={{
            paddingTop: 200,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
