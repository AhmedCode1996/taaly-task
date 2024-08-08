import AuthGreetings from "../../../components/auth/shared/AuthGreetings";
import LoginForm from "../../../components/auth/signin/LoginForm";

const LoginPage = () => {
  return (
    <section className="flex bg-white rounded-[13.98px]">
      <AuthGreetings />
      <LoginForm />
    </section>
  );
};

export default LoginPage;
