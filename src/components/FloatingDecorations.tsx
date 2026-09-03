const decorations = [
  {
    symbol: "✦",
    left: "8%",
    top: "18%",
    size: "24px",
    delay: "0s",
    duration: "6s",
  },
  {
    symbol: "♡",
    left: "15%",
    top: "35%",
    size: "20px",
    delay: "1s",
    duration: "7s",
  },
  {
    symbol: "୨୧",
    left: "22%",
    top: "12%",
    size: "18px",
    delay: "2s",
    duration: "5s",
  },
  {
    symbol: "✿",
    left: "30%",
    top: "28%",
    size: "22px",
    delay: "0.5s",
    duration: "8s",
  },
  {
    symbol: "♡",
    left: "38%",
    top: "15%",
    size: "17px",
    delay: "1.5s",
    duration: "6.5s",
  },

  {
    symbol: "✦",
    left: "48%",
    top: "8%",
    size: "20px",
    delay: "2.5s",
    duration: "7.5s",
  },
  {
    symbol: "୨୧",
    left: "60%",
    top: "20%",
    size: "16px",
    delay: "0.8s",
    duration: "5.5s",
  },
  {
    symbol: "✧",
    left: "72%",
    top: "14%",
    size: "21px",
    delay: "1.8s",
    duration: "8.5s",
  },
  {
    symbol: "♡",
    left: "82%",
    top: "30%",
    size: "18px",
    delay: "0.3s",
    duration: "6s",
  },
  {
    symbol: "✦",
    left: "90%",
    top: "18%",
    size: "23px",
    delay: "2.2s",
    duration: "7s",
  },

  {
    symbol: "୨୧",
    left: "10%",
    top: "62%",
    size: "19px",
    delay: "1.2s",
    duration: "6.8s",
  },
  {
    symbol: "✧",
    left: "18%",
    top: "78%",
    size: "24px",
    delay: "0.7s",
    duration: "7.8s",
  },
  {
    symbol: "♡",
    left: "28%",
    top: "68%",
    size: "17px",
    delay: "2.8s",
    duration: "5.8s",
  },
  {
    symbol: "✦",
    left: "36%",
    top: "82%",
    size: "20px",
    delay: "1.4s",
    duration: "8.2s",
  },
  {
    symbol: "୨୧",
    left: "46%",
    top: "72%",
    size: "15px",
    delay: "0.9s",
    duration: "6.2s",
  },

  {
    symbol: "♡",
    left: "58%",
    top: "80%",
    size: "19px",
    delay: "2.1s",
    duration: "7.2s",
  },
  {
    symbol: "✧",
    left: "68%",
    top: "65%",
    size: "22px",
    delay: "1.1s",
    duration: "5.6s",
  },
  {
    symbol: "✦",
    left: "78%",
    top: "76%",
    size: "18px",
    delay: "2.6s",
    duration: "8s",
  },
  {
    symbol: "୨୧",
    left: "86%",
    top: "58%",
    size: "17px",
    delay: "0.4s",
    duration: "6.4s",
  },
  {
    symbol: "♡",
    left: "92%",
    top: "82%",
    size: "21px",
    delay: "1.7s",
    duration: "7.6s",
  },
];

export default function FloatingDecorations() {
    return(
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {decorations.map((item, index) => (
          <span
            key={index}
            className="floating-decoration absolute text-[#B96F8A]"
            style={{
              left: item.left,
              top: item.top,
              fontSize: item.size,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>
    )
}
