export default function CustomImage({ imgSrc, pt }) {
  return (
    <div
      className="relative w-full bg-red-500"
      style={{ paddingTop: pt }}
    >
      <img
        src={imgSrc}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}
