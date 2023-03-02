export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-14">
      <div className="p-10">{children}</div>
    </div>
  );
}
