function Logo() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-auto h-24 mx-auto mt-4 rounded-full"
      />
      <p className="text-xl text-[#1D9BD6FF] font-robotoMono font-bold ">
        SOS CLUB
      </p>
    </div>
  );
}

export default Logo;
