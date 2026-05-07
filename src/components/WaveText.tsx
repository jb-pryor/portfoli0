function WaveText({ text }) {
  return (
    <div className="text-4xl font-bold tracking-[0.15em]">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="mt-50 inline-block animate-wave tracking-[.5em]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

export default WaveText;