import { Composition } from "remotion";

export const RemotionRoot = () => {
  return (
    <Composition
      id="WeddingInvitation"
      component={WeddingVideo}
      durationInFrames={30 * 90}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

const WeddingVideo = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFF8F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#3E302B",
        fontFamily: "Arial, sans-serif",
        fontSize: 70,
      }}
    >
      محمد & سدرة
    </div>
  );
};