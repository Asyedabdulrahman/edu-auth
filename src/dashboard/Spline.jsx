import Spline from "@splinetool/react-spline";

function Splinee() {
  return (
    <div className="relative w-full h-screen">
      <Spline scene="https://prod.spline.design/RePrgCatiAFfe03a/scene.splinecode" />
      <h1 className="absolute top-1/2 transform -translate-y-1/2 right-4  text-white text-4xl font-bold">testing spline tool</h1>
    </div>
  );
}

export default Splinee;
