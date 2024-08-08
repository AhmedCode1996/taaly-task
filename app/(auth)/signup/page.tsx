import AuthGreetings from "../../../components/auth/shared/AuthGreetings";
import SignupForm from "../../../components/auth/signup/SignupForm";

const SignupPage = () => {
  return (
    <section className="flex bg-white rounded-[13.98px]">
      <AuthGreetings />
      <SignupForm />
    </section>
  );
};

export default SignupPage;
