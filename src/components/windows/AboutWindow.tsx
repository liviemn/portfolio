import WindowDesign from "../WindowDesign";

type AboutWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutWindow({
  isOpen,
  onClose,
}: AboutWindowProps) {
  return (
    <WindowDesign
      isOpen={isOpen}
      onClose={onClose}
      title="about me"
    >
      <div className="space-y-5">
        <p className="leading-7">
          Hello ♡
        </p>

        <p className="text-sm leading-6 text-[#6F5C50]">
          My name is Olivia Suh. I am a Computer Science major at George Mason University. 
          I love: matcha, vanilla latte from pete's coffee, gaming, miffy, shopping, notetaking, skiing, traveling, skincare, MBTI
          Favorite music genre: kballad/sentemental music
          Games: Valorant, TFT, Animal Crossing, Minecraft
        </p>
      </div>
    </WindowDesign>
  );
}