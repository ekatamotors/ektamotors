import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="relative z-10 border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ekata Motors. All rights reserved.</p>

          <p>Kathmandu, Nepal</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
