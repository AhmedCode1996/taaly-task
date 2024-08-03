import AuthGreetings from "../_components/AuthGreetings";
import LoginForm from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <section className="flex bg-white rounded-[13.98px]">
      <AuthGreetings />
      <LoginForm />
    </section>
  );
};

export default LoginPage;
