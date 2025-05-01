function AuthLayout({ children }) {
  return (
    <div>
      <h1 className="text-5xl py-5">Auth pages</h1>

      {children}
    </div>
  );
}

export default AuthLayout;
