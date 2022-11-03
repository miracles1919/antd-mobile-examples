export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <header>Ant Design Mobile</header>
      <main>{children}</main>
    </div>
  );
}
