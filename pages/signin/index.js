import Header from '../../component/Header'
import Footer from '../../component/Footer'
import SignIn from '../../component/SingIn'

export default function SignInPage() {
  return (
    <>
      <Header />
      <SignIn />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    props: {},
  };
}