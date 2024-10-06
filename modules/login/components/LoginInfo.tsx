import Image from "next/image";

const LoginInfo = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-16 bg-gradient-to-b from-neutral-200 to-neutral-100 px-8 dark:from-neutral-800 dark:to-neutral-900 lg:p-16">
      <div className="flex flex-col gap-2 text-center">
        <h2
          className="text-2xl font-medium text-neutral-700 dark:text-neutral-300"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-anchor="#login"
        >
          Access your account to manage your data. Please enter your email and
          password to login.
        </h2>
      </div>

      <div className="relative">
        <Image
          src="/images/dashboard.png"
          width={500}
          height={500}
          alt="login"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor="#login"
        />
        <Image
          src="/images/dashboard.png"
          width={200}
          height={200}
          alt="login"
          className="absolute -right-12 bottom-24 hidden translate-y-1/2 rounded-md border-2 border-neutral-500 md:block"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-anchor="#login"
        />
      </div>
    </div>
  );
};

export default LoginInfo;
