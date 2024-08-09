import Header from "../components/Header";

export default function Error(params) {
  return (
    <>
      <Header />
      <div className="p-5 mx-auto max-w-[1600px] flex flex-col items-center">
        <h1 className="text-3xl font-bold">An Error Occurred</h1>
        <p className="text-2xl">Error Message</p>
      </div>
    </>
  );
}
