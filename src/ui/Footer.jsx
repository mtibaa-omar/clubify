function Footer() {
  return (
    <div className="bottom-0">
      <footer className="w-full mt-auto bg-white rounded-lg dark:bg-gray-600">
        <div className="flex items-center w-full max-w-screen-xl p-4 mx-auto justify-evenly">
          <span className="text-xl text-center text-gray-500 dark:text-gray-400">
            Sos Club
          </span>
        </div>
        <div className="flex items-center w-full max-w-screen-xl p-4 mx-auto justify-evenly">
          <span className="text-xl text-center text-gray-500 dark:text-gray-400">
            © Mtibaa Omar
          </span>

          <a
            href="mailto:mtibaaomarx@gmail.com"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 me-4 md:me-6"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
