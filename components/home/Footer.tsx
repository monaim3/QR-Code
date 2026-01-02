export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 bg-gray-100 text-center text-gray-500 text-sm border-t">
      &copy; {new Date().getFullYear()} MyQR. All rights reserved.
    </footer>
  );
}