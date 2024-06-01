import React, { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?51391";

    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#00e785",
        // ctaText: "Chat with me",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "Firman Ardi",
        brandSubTitle: "undefined",
        brandImg:
          "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        welcomeText: "Halo 👋\nAda yang bisa saya bantu ?",
        messageText: "",
        backgroundColor: "#00e785",
        ctaText: "Chat with me",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "62895339423748",
      },
    };

    script.onload = () => {
      CreateWhatsappChatWidget(options);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;
