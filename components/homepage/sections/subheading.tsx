
const Card = ({ text }: { text: string }) => {
  return (
    <div className="mx-auto p-8">
      <h2 className="text-5xl md:text-4xl font-semibold text-center text-slate-800">
        {text}
      </h2>
    </div>
  );
}

const Subheading = () => {
  return (
    <div className="max-w-full mx-auto my-10 py-4 grid grid-cols-4 justify-center bg-slate-100/20">
      <Card text="{text}" />
      <Card text="{text}" />
      <Card text="{text}" />
      <Card text="{text}" />
    </div>
  );
}

export default Subheading;