export default function SlideEmbed({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="480"
      style={{
        border: "1px solid #e5e5e5",
        margin: "32px 0",
      }}
      allowFullScreen
    />
  );
}
