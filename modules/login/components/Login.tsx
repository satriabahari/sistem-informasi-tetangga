import ThemeButton from "@/common/components/elements/ThemeButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiContentstack as LogoIcon } from "react-icons/si";
import LoginForm from "./LoginForm";
import LoginInfo from "./LoginInfo";
import BackButton from "@/common/components/elements/BackButton";

const Login = () => {
  return (
    <section id="login" className="relative min-h-screen overflow-hidden">
      <BackButton />

      <ThemeButton
        className="absolute right-4 top-4 rounded-full"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-anchor="#login"
      />
      <LoginForm />
      {/* <LoginInfo /> */}
    </section>
  );
};

export default Login;
