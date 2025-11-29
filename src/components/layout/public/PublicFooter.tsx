export default function PublicFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-white py-4 text-center text-gray-500">
      Fixiyi © {year} – Tous droits réservés
    </footer>
  );
}
