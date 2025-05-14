import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import "./index.css";

function LogEmotions({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const { t } = useTranslation(); // Hook for translations

  // List of emotion keys from the translation JSON
  const emotions = [
    "happy",
    "sad",
    "angry",
    "excited",
    "nervous",
    "calm",
    "lonely",
    "grateful",
    "confused",
    "hopeful",
    "frustrated",
    "proud",
    "anxious",
    "relaxed",
    "bored",
    "curious",
    "scared",
    "tired",
    "content",
    "surprised",
    "ashamed",
    "guilty",
    "jealous",
    "embarrassed",
    "determined",
    "motivated",
    "overwhelmed",
    "inspired",
    "loved",
    "confident",
  ];

  // Group emotions into rows for the pyramid layout
  const pyramidRows = [
    emotions.slice(0, 2), // 2 buttons
    emotions.slice(2, 5), // 3 buttons
    emotions.slice(5, 9), // 4 buttons
    emotions.slice(9, 14), // 5 buttons
    emotions.slice(14, 19), // 5 buttons (center row)
    emotions.slice(19, 23), // 4 buttons
    emotions.slice(23, 26), // 3 buttons
    emotions.slice(26, 28), // 2 buttons
    emotions.slice(28, 29), // 1 button
  ];

  // Function to generate random pastel colors
  const getRandomColor = () => {
    const pastelColors = [
      "#fe5e6e",
      "#f3a853",
      "#f7f757",
      "#5bf87d",
      "#62b5f5",
      "#ab5ff6",
    ];
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
  };

  return (
    <Container
      className={`d-flex justify-content-center align-items-center flex-column vh-100 full-width ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <h1 className="peaceful-title">{t("title")}</h1>
      <p className="peaceful-description">{t("description")}</p>
      <div className="pyramid-container">
        {pyramidRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="d-flex justify-content-center mb-2"
            style={{ gap: "10px" }}
          >
            {row.map((emotion) => (
              <Button
                key={emotion}
                style={{
                  backgroundColor: getRandomColor(),
                  border: "none",
                  color: isDarkMode ? "white" : "black",
                }}
              >
                {t(emotion)}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default LogEmotions;
